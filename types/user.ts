import { Session as NextAuthSession } from "next-auth";

export interface ExtendedSession extends NextAuthSession {
  user?: {
    id?: string | null | undefined;
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
}

export interface User {
  id: string;
  lastName: string;
  firstName: string;
  nickName: string;
  email: string;
}
