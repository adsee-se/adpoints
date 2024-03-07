import { DefaultSession, NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

declare module "next-auth" {
  interface User {
    id?: string | null;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    lastName?: string | null;
    firstName?: string | null;
    lastNameKana?: string | null;
    firstNameKana?: string | null;
    nickName?: string | null;
    role?: string | null;
  }

  interface Session extends DefaultSession {
    user: {
      id?: string | null;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      lastName?: string | null;
      firstName?: string | null;
      lastNameKana?: string | null;
      firstNameKana?: string | null;
      nickName?: string | null;
      role?: string | null;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string | null;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    lastName?: string | null;
    firstName?: string | null;
    lastNameKana?: string | null;
    firstNameKana?: string | null;
    nickName?: string | null;
    role?: string | null;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.lastName = user.lastName;
        token.firstName = user.firstName;
        token.lastNameKana = user.lastNameKana;
        token.firstNameKana = user.firstNameKana;
        token.nickName = user.nickName;
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.lastName = token.lastName;
        session.user.firstName = token.firstName;
        session.user.lastNameKana = token.lastNameKana;
        session.user.firstNameKana = token.firstNameKana;
        session.user.nickName = token.nickName;
        session.user.email = token.email;
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "login",
  },
};
