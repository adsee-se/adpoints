"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

type Props = {
  children?: React.ReactNode;
  session: any;
};

export const NextAuthProvider = ({ children, session }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};
