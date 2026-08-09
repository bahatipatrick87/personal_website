import { Pool, type QueryResultRow } from "pg";

/**
 * Persistent storage for contact-form messages.
 *
 * Works with any standard Postgres connection string — Vercel's built-in
 * Postgres storage (Neon), Supabase, Railway, Neon directly, etc. Vercel
 * injects `POSTGRES_URL` automatically once you attach a Postgres store to
 * the project (Project → Storage → Create Database). Locally, set either
 * `POSTGRES_URL` or `DATABASE_URL` in `.env.local`.
 *
 * All functions are no-ops (return empty/null) when no connection string is
 * configured, so the rest of the app — and the contact form's email path —
 * keeps working even before a database is attached.
 */

const connectionString =
  process.env.POSTGRES_URL ||
  process.env.POSTGRES_URL_NON_POOLING ||
  process.env.DATABASE_URL;

export const isDatabaseConfigured = Boolean(connectionString);

let pool: Pool | null = null;

function getPool(): Pool {
  if (!connectionString) {
    throw new Error("No database connection string configured.");
  }
  if (!pool) {
    pool = new Pool({
      connectionString,
      // Neon / Vercel Postgres / Supabase all require SSL; local Postgres
      // typically doesn't present a cert, so don't fail on that.
      ssl: connectionString.includes("localhost")
        ? undefined
        : { rejectUnauthorized: false },
      max: 5,
    });
  }
  return pool;
}

async function query<T extends QueryResultRow = QueryResultRow>(
  text: string,
  params: unknown[] = [],
): Promise<T[]> {
  const { rows } = await getPool().query<T>(text, params);
  return rows;
}

let schemaReady: Promise<void> | null = null;

/** Creates the `messages` table on first use. Safe to call repeatedly. */
function ensureSchema(): Promise<void> {
  if (!schemaReady) {
    schemaReady = query(`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        subject TEXT NOT NULL DEFAULT '',
        message TEXT NOT NULL,
        emailed BOOLEAN NOT NULL DEFAULT FALSE,
        read BOOLEAN NOT NULL DEFAULT FALSE,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now()
      );
    `)
      .then(() => undefined)
      .catch((err) => {
        schemaReady = null; // allow a retry on the next call
        throw err;
      });
  }
  return schemaReady;
}

export type ContactMessage = {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  emailed: boolean;
  read: boolean;
  created_at: string;
};

export async function saveMessage(input: {
  name: string;
  email: string;
  subject: string;
  message: string;
  emailed: boolean;
}): Promise<ContactMessage | null> {
  if (!isDatabaseConfigured) return null;
  await ensureSchema();
  const rows = await query<ContactMessage>(
    `INSERT INTO messages (name, email, subject, message, emailed)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *;`,
    [input.name, input.email, input.subject, input.message, input.emailed],
  );
  return rows[0] ?? null;
}

export async function listMessages(): Promise<ContactMessage[]> {
  if (!isDatabaseConfigured) return [];
  await ensureSchema();
  return query<ContactMessage>(
    `SELECT * FROM messages ORDER BY created_at DESC;`,
  );
}

export async function setMessageRead(id: number, read: boolean): Promise<void> {
  if (!isDatabaseConfigured) return;
  await ensureSchema();
  await query(`UPDATE messages SET read = $2 WHERE id = $1;`, [id, read]);
}

export async function deleteMessage(id: number): Promise<void> {
  if (!isDatabaseConfigured) return;
  await ensureSchema();
  await query(`DELETE FROM messages WHERE id = $1;`, [id]);
}
