import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const requestedPath = request.nextUrl.pathname;
  const isLoggedIn = request.cookies.get("useremail");

  if (requestedPath === "/dashboard" && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: "/dashboard",
};

