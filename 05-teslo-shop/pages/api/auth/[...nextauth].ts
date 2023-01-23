import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    Credentials({
      id: "custom-login",
      name: "Email",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Write your email example@example.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Write your password ",
        },
      },
      async authorize(credentials): Promise<any> {
        // TODO: validate user
        const user = {
          name: "jose",
          email: "jose@jose.com",
          role: "admin",
        };
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
        switch (account.type) {
          case "oauth":
            // TODO: verify if exist in my database
            break;

          case "credentials":
            token.user = user;
            break;
        }
      }

      return token;
    },
    async session({ session, token, user }) {
      session.accessToken = session.accessToken as any;
      session.user = token.user as any;
      return session;
    },
  },
};

export default NextAuth(authOptions);
