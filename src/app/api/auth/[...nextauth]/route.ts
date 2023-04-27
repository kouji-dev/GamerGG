import NextAuth, {NextAuthOptions} from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import {prisma} from "@prisma";

const DISCORD_SCOPES = ["identify", "email"].join(" ");
export const AUTH_OPTIONS: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: process.env.AUTH_DISCORD_CLIENT_ID!,
      clientSecret: process.env.AUTH_DISCORD_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: DISCORD_SCOPES,
        },
      },
    }),
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      console.log('session')
      console.log({session, token})
      if (token) {
        if (session && session.user) {
          (session.user as any).id = token.id;
          session.user.name = token.name;
          session.user.email = token.email;
          session.user.image = token.picture;
        }
      }

      return session;
    },
    async jwt({ token, user }) {
      console.log('jwt')
      console.log({token, user});
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  debug: true
};

const handler =  NextAuth(AUTH_OPTIONS);

export { handler as GET, handler as POST };
