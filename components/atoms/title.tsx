"use client";
import React from "react";
import { styled } from "@mui/material/styles";

interface Title {
  title?: string;
  size?: string;
  fontWeight?: string;
}

function Faq(props: Title) {
  return (
    <Faq1>
      <Faq2 size={props.size} fontWeight={props.fontWeight}>
        {props.title}
      </Faq2>
    </Faq1>
  );
}

const Faq1 = styled("div")({
  height: `32px`,
  padding: `0px`,
  margin: "80px 20px 30px 20px",
});

const Faq2 = styled("div")<Title>(({ size,fontWeight }) => ({
  color: `rgba(54, 57, 64, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `${fontWeight}`,
  fontSize: `${size}`,
  letterSpacing: `0px`,
  lineHeight: `32px`,
  textAlign: "center",
}));

export default Faq;
