"use server";

import { revalidatePath } from "next/cache";
import { deleteMessage, setMessageRead } from "@/lib/db";

export async function markRead(formData: FormData) {
  const id = Number(formData.get("id"));
  const read = formData.get("read") === "true";
  if (!Number.isFinite(id)) return;
  await setMessageRead(id, read);
  revalidatePath("/admin");
}

export async function removeMessage(formData: FormData) {
  const id = Number(formData.get("id"));
  if (!Number.isFinite(id)) return;
  await deleteMessage(id);
  revalidatePath("/admin");
}
