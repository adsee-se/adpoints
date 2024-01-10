"use client";

import { useState, useEffect } from "react";
import Button from "@/components/atoms/button";
import Input from "@/components/atoms/input";
import { styled } from "@mui/material/styles";
import { signIn } from 'next-auth/react';

const LoginForm = async () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // ログイン処理を実行
    const result = await signIn('credentials', {
      username,
      password,
      redirect: false, // リダイレクトを無効化して、APIの結果を取得
    });
    if (result?.error) {
      console.error('認証エラー:', result.error);
    } else {
      console.log('認証成功:', result);
      // ログイン成功後のリダイレクトなどの処理を行う
    }
  };

  useEffect(() => {
    console.log("test");
  }, []);

  return (
    <>
      <LoginDiv>
        <h2>ログイン</h2>
        <Input type={"text"} value={username} onChange={(e) => setUsername(e)} placeholder="ID or メールアドレス" className="" />
        <Input type={"password"} value={password} onChange={(e) => setPassword(e)} placeholder="パスワード" className="" />

        <ForgotPasswordLink href="#">
          ID・パスワードを忘れた方はこちら
        </ForgotPasswordLink>
        <div>
          <Button onClick={handleLogin}>ログイン</Button>
        </div>
        <SignupText>はじめてご利用の方はこちら</SignupText>
        <Text>はじめてのご利用には会員登録が必要です。</Text>
        <Button>新規登録</Button>
      </LoginDiv>
    </>
  );
};

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

export default LoginForm;
