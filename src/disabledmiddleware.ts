import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";


export function middleware(req: NextRequest) {
    console.log("Middleware is running!");


        const token = req.headers.get('login')
        console.log("Token:", token);

        if (token !== 'sudah') {
            // If there's no token, redirect to the login page
            console.log("Redirecting to login page!");
            return NextResponse.redirect(new URL("/login", req.url));
        } else {
            // If a token exists, continue to the next middleware
            
            console.log("Redirecting to path!");
            return NextResponse.next();
        }
}

export const config = {
    matcher: ['/about', '/product/:path*', '/admin/:path*'],
};
