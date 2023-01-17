import { NextResponse, NextRequest } from "next/server";
import * as jwt from "jose";

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/checkout")) {
    const token = req.cookies.get("token");

    try {
      await jwt.jwtVerify(
        token || "",
        new TextEncoder().encode(process.env.JWT_SECRET || "")
      );
      return NextResponse.next();
    } catch (error) {
      console.error(`JWT Invalid or not signed in`, { error });
      const { protocol, host, pathname } = req.nextUrl;
      return NextResponse.redirect(
        `${protocol}//${host}/auth/login?page=${pathname}`
      );
    }
  }
}

export const config = {
  matcher: ["/checkout/:path*"],
};
