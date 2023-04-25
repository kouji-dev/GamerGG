// middleware.ts
import { withAuth } from "next-auth/middleware"

// This function can be marked `async` if using `await` inside

export default withAuth(
    function middleware(req) {
        console.log(req.nextauth.token)
    },
    {
        callbacks: {
            authorized: ({ token }) => token?.role === "admin",
        },
    },
)

// See "Matching Paths" below to learn more
export const config = {
    matcher: "/api(/paypal|/boosting):function*",
}
