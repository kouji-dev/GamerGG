import NextAuth, {NextAuthOptions} from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import {prisma} from "@prisma";


const DISCORD_SCOPES = ["identify", "email"].join(" ");

export const AUTH_OPTIONS: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // CredentialsProvider({
    //   name: SIMPLE_AUTH,
    //   credentials: CREDENTIALS_DEFINITION,
    //   async authorize(
    //     credentials,
    //     req: Pick<RequestInternal, "body" | "query" | "headers" | "method">
    //   ) {
    //     if (!(credentials?.username && credentials?.password))
    //       throw new Error("Please enter your credentials");
    //
    //     try {
    //       const response = await fetch(
    //         `${req?.headers?.origin}/api/auth/user?email=${credentials?.username}`,
    //         {
    //           method: "GET",
    //           headers: {
    //             "Content-Type": "application/json",
    //           },
    //         }
    //       );
    //       const { password, image, ...userDetails }: User =
    //         await response.json();
    //       const hasSamePassword = await comparePassword(
    //         credentials.password,
    //         password
    //       );
    //       if (!hasSamePassword) {
    //         throw new Error("Password is wrong");
    //       }
    //
    //       return userDetails as any;
    //     } catch (e) {
    //       return null;
    //     }
    //   },
    // }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: DISCORD_SCOPES,
        },
      },
    }),
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.userId = user.id;
        token.email = user.email;
        token.username = user.name;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        const { sub, ...accountDetails } = token;
        if (!session.user) session.user = {};
        session.user = {
          ...session.user,
          ...accountDetails,
        };
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth",
    signOut: "/",
  },
  debug: true,
  useSecureCookies:
    process.env.NODE_ENV && process.env.NODE_ENV === "production",
  secret: process.env.AUTH_SECRET,
};

export default NextAuth(AUTH_OPTIONS);
