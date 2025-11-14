import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../utils/mongodb";
import bcrypt from "bcryptjs";

// NextAuth configuration
export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: process.env.DB_NAME,
  }),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        name: { label: "Name", type: "text" },
        email: { label: "Gmail", type: "email" },
        password: { label: "Password", type: "password" },
        role: { label: "Role", type: "text" },
      },
      async authorize(credentials) {
        const client = await clientPromise;
        const db = client.db(process.env.DB_NAME);
        const usersCollection = db.collection("users");

        // Case-insensitive search for username or email
        const user = await usersCollection.findOne({
          $or: [
            {
              username: {
                $regex: new RegExp(`^${credentials?.username}$`, "i"),
              },
            },
            { email: { $regex: new RegExp(`^${credentials?.email}$`, "i") } },
          ],
        });
        if (!user) return null;
        if (!credentials?.password) return null;

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        console.log({ isValid });
        if (!isValid) return null;

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          username: user.username,
          role: user.role,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username ?? null;
        token.name = user.name ?? null;
        token.email = user.email ?? null;
        token.role = user.role ?? null;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username ?? null;
        session.user.name = token.name ?? null;
        session.user.email = token.email ?? null;
        session.user.role = token.role ?? null;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
    error: "/auth/error",
  },
};

// Named export for all HTTP methods
export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
