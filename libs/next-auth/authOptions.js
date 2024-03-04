import CredentialsProvider from "next-auth/providers/credentials";
import { randomUUID, randomBytes } from "crypto";
import { VerifyUser } from "@/app/database/dynamoDBConnection.mjs";

export const authOptions = {
  /* providers */
  providers: [
    // ユーザ用認証
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials, req) {
        let user = await VerifyUser(credentials?.email, credentials?.password);
        if (user) {
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;
        }
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      },
    }),
  ],

  pages: {
    signIn: "/login",
    // error: "/auth/error",
    // signPut: "/auth/signout",
  },

  /* callbacks */
  callbacks: {
    async jwt({ token, user, session }) {
      if (user) {
        return {
          ...token,
          id: user.id,
          lastName: user.lastName,
          firstName: user.firstName,
          lastNameKana: user.lastNameKana,
          firstNameKana: user.firstNameKana,
          nickName: user.nickName,
          email: user.email,
          role: user.role,
        };
      }
      return token;
    },
    async session({ session, token, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          lastName: token.lastName,
          firstName: token.firstName,
          lastNameKana: token.lastNameKana,
          firstNameKana: token.firstNameKana,
          nickName: token.nickName,
          email: token.email,
          role: token.role,
        },
      };
    },
  },

  /* secret */
  secret: process.env.NEXTAUTH_SECRET,

  /* jwt */
  jwt: {
    maxAge: 1 * 24 * 60 * 60, // 1 days
  },

  /* session */
  session: {
    maxAge: 2 * 24 * 60 * 60, // 2 days
    updateAge: 24 * 60 * 60, // 24 hours
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex");
    },
  },
};
