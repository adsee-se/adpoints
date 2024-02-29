"use client";

import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "../atoms/button";
import "src/css/modal-styling.css";
import Title from "@/components/atoms/title";
import Text from "@/components/atoms/text";

export default function SignUpComplete() {
  return (
    <LoginDiv>
      <Title title={"登録が完了しました"} fontWeight={"900"} size={"24px"} />
      <Text padding={"10px 5px"} margin={" 5px"} size={'12px'}>
        確認メールにて仮パスワードを発行しました。
        ログイン画面に戻りログインをしてください。
      </Text>
      <Button href={`/login`}>ログイン画面に戻る</Button>
    </LoginDiv>
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
