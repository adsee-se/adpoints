import { Session as NextAuthSession } from "next-auth";

export interface ExtendedSession extends NextAuthSession {
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

export interface User {
  id: string;
  lastName: string;
  firstName: string;
  nickName: string;
  email: string;
}
