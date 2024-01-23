"use client";

import React from "react";
import Button from "../atoms/button";
import Input from "../atoms/input";
import { styled } from "@mui/material/styles";
import { signIn } from "next-auth/react";
import { FormEvent } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const handelSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData);
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    if (status ===  "authenticated" ){
      router.push("/");
    }
  };


  return (
    <>
      <LoginDiv>
        <h2>ログイン</h2>
        <form onSubmit={handelSubmit}>
          <Input
            name="email"
            type="email"
            placeholder="ID or メールアドレス"
          />
          <Input
            name="password"
            type="password"
            placeholder="パスワード"
          />

          <ForgotPasswordLink href="#">
            ID・パスワードを忘れた方はこちら
          </ForgotPasswordLink>
          <div>
            <Button>ログイン</Button>
          </div>
        </form>
        <SignupText>はじめてご利用の方はこちら</SignupText>
        <Text>はじめてのご利用には会員登録が必要です。</Text>
        <Button href={`/register`}>新規登録</Button>
      </LoginDiv>
    </>
  );
}

const LoginDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  whiteSpace: "pre-wrap",
  fontSynthesis: "none",
  color: "black",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: 30,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 100,
});
const ForgotPasswordLink = styled("a")({
  textAlign: "center",
  marginTop: 20,
  marginBottom: 20,
  color: `rgba(149, 161, 187, 1)`,
  textDecoration: "none",
  fontSize: 12,
});
const Text = styled("p")({
  textAlign: "center",
  marginTop: 20,
  marginBottom: 20,
  color: `rgba(149, 161, 187, 1)`,
  textDecoration: "none",
  fontSize: 12,
});
const SignupText = styled("p")({
  textAlign: "center",
  marginTop: 100,
  fontSize: 23,
});
