// middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// This function can be marked `async` if using `await` inside

export const middleware = withAuth(
  async function mid(req) {
    const {token} = req.nextauth;
    const isAuth = !!token;
    const isAuthPage = req.nextUrl.pathname.startsWith("/login");

    console.log({ token, isAuth, isAuthPage });

    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL("/client-area", req.url));
      }

      return null;
    }

    if (!isAuth) {
      let from = req.nextUrl.pathname;
      if (req.nextUrl.search) {
        from += req.nextUrl.search;
      }

      return NextResponse.redirect(
        new URL(`/login?from=${encodeURIComponent(from)}`, req.url)
      );
    }
  },
  {
    callbacks: {
      async authorized({ req, token }) {
        // This is a work-around for handling redirect on auth pages.
        // We return true here so that the middleware function above
        // is always called.
          return true;
      },
    },
  }
);

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/client-area"],
};
