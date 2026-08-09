import { NextResponse, type NextRequest } from "next/server";

/**
 * Protects /admin (the inbox dashboard) with HTTP Basic Auth.
 * Set ADMIN_USER and ADMIN_PASSWORD in your environment to enable it.
 */
export function proxy(req: NextRequest) {
  const expectedPassword = process.env.ADMIN_PASSWORD;

  if (!expectedPassword) {
    return new NextResponse(
      "Admin dashboard is not configured. Set ADMIN_USER and ADMIN_PASSWORD in your environment.",
      { status: 503 },
    );
  }

  const expectedUser = process.env.ADMIN_USER || "admin";
  const header = req.headers.get("authorization");

  if (header?.startsWith("Basic ")) {
    const decoded = Buffer.from(header.slice(6), "base64").toString("utf8");
    const separatorIndex = decoded.indexOf(":");
    const user = decoded.slice(0, separatorIndex);
    const pass = decoded.slice(separatorIndex + 1);
    if (user === expectedUser && pass === expectedPassword) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Admin", charset="UTF-8"' },
  });
}

export const config = {
  matcher: ["/admin/:path*"],
};
