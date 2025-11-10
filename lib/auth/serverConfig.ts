import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

/**
 * Authentication options
 */
export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        return credentials?.password === process.env.ADMIN_PASSWORD
          ? { id: "admin", name: "Admin", email: "owner@example.com" }
          : null;
      }
    }),
  ],
  jwt: {
    maxAge: 2 * 60 * 60, // 2 hours
  },
  pages: {
    signIn: "/",
  },
};
