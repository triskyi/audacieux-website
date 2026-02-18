import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // Allow access to login page
  if (req.nextUrl.pathname === "/admin/login") {
    return NextResponse.next();
  }
  // Check for auth token in localStorage (client) or cookie (server)
  const isAuthed = req.cookies.get("admin-auth")?.value === "true";
  if (!isAuthed) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
