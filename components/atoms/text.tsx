"use client";
import React,{ ReactNode } from "react";
import { styled } from "@mui/material/styles";

interface Text {
  children?: ReactNode;
  size?: string;
  fontWeight?: string;
  margin?: string;
  padding?: string;
}

function Text(props: Text) {
  return (
    <TextContainer margin={props.margin} padding={props.padding}>
      <TextStyle size={props.size} fontWeight={props.fontWeight}>
        {props.children}
      </TextStyle>
    </TextContainer>
  );
}

const TextContainer = styled("div")<Text>(({ margin,padding }) => ({
  padding: `${padding}`,
  margin: `${margin}`,
}));

const TextStyle = styled("div")<Text>(({ size,fontWeight }) => ({
  textAlign: "center",
  color: `rgba(149, 161, 187, 1)`,
  textDecoration: "none",
  fontSize: `${size}`,
  fontWeight: `${fontWeight}`,
}));


export default Text;
