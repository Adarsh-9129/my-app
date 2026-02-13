import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/auth";

export async function middleware(request: NextRequest) {
    const session = request.cookies.get("session")?.value;

    if (request.nextUrl.pathname.startsWith("/Admin-Dashboard")) {
        if (!session) {
            return NextResponse.redirect(new URL("/Admin-login", request.url));
        }

        try {
            await decrypt(session);
            return NextResponse.next();
        } catch (error) {
            return NextResponse.redirect(new URL("/Admin-login", request.url));
        }
    }

    // Redirect to dashboard if already logged in and hitting login page
    if (request.nextUrl.pathname === "/Admin-login") {
        if (session) {
            try {
                await decrypt(session);
                return NextResponse.redirect(new URL("/Admin-Dashboard", request.url));
            } catch {
                return NextResponse.next();
            }
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/Admin-Dashboard/:path*", "/Admin-login"],
};
