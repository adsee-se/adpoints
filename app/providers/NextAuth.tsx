"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";

type Props = {
  children?: React.ReactNode;
  session: any;
};

export const NextAuthProvider = ({ children, session }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  if (session === null && pathname !== "/register") {
    router.push("/login");
  }
  return <SessionProvider>{children}</SessionProvider>;
};
