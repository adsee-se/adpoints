"use client";

import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "../atoms/button";
import "src/css/modal-styling.css";
import Title from "@/components/atoms/title";
import Text from "@/components/atoms/text";

export interface Props {
  title: string;
  sentence: string;
  buttonColor: "orange" | "white" | "gray";
  buttonText: string;
  href: string;
  isSecondButton?: boolean;
  secondButtonColor?: "orange" | "white" | "gray";
  secondButtonText?: string;
  secondHref?: string;
}

export default function CompleteUnion(props: Props) {
  return (
    <LoginDiv>
      <Title title={props.title} fontWeight={"900"} size={"24px"} />
      <Text padding={"10px 5px"} margin={" 5px"} size={"12px"}>
        {props.sentence}
      </Text>
      <Button href={props.href} color={props.buttonColor}>
        {props.buttonText}
      </Button>
      {props.isSecondButton ? (
        <Button href={props.secondHref} color={props.secondButtonColor}>
          {props.secondButtonText}
        </Button>
      ) : undefined}
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
});
