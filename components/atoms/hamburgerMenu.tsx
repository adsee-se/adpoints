"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import { signOut } from "next-auth/react";

export interface HamburgerMenuProps {
  isOpen: boolean;
}

const HamburgerMenu = () => {
  return (
    <HamburgerMenu1>
      {/* TODO 以下はログインしているユーザーの名前を表示するように修正 */}
      <Q>{"タローさん"}</Q>
      <Line1
        src={"/assets/images/HamburgerMenu/Line.png"}
        loading="lazy"
        alt={"Line 1"}
      />
      {/* 全てのリンクを仮でルートに設定 */}
      <a href="/">
        <Home>{"HOME"}</Home>
      </a>
      <Line2
        src={"/assets/images/HamburgerMenu/Line.png"}
        loading="lazy"
        alt={"Line 2"}
      />
      <a href="/">
        <Q1>{"ポイントチャージ"}</Q1>
      </a>
      <Line3
        src={"/assets/images/HamburgerMenu/Line.png"}
        loading="lazy"
        alt={"Line 3"}
      />
      <a href="/">
        <Q2>{"質問する"}</Q2>
      </a>
      <Line4
        src={"/assets/images/HamburgerMenu/Line.png"}
        loading="lazy"
        alt={"Line 4"}
      />
      <a href="/">
        <Box1>{"返信BOX"}</Box1>
      </a>
      <Line5
        src={"/assets/images/HamburgerMenu/Line.png"}
        loading="lazy"
        alt={"Line 5"}
      />
      <a href="/">
        <Q3>{"設定"}</Q3>
      </a>
      <Line6
        src={"/assets/images/HamburgerMenu/Line.png"}
        loading="lazy"
        alt={"Line 6"}
      />
      <button
        onClick={() => {
          signOut();
        }}
      >
        <Q3>{"ログアウト"}</Q3>
      </button>
    </HamburgerMenu1>
  );
};

const HamburgerMenu1: any = styled("div")(() => ({
  backgroundColor: "rgba(246, 161, 83, 1)",
  alignSelf: "stretch",
  width: "100%",
  paddingBottom: "30px",
  position: "absolute",
  top: "100%",
  borderRadius: "0px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  height: "400px",
  boxSizing: "border-box",
  visibility: "visible",
  opacity: 1,
}));

const Q: any = styled("div")({
  textAlign: "center",
  whiteSpace: "pre-wrap",
  fontSynthesis: "none",
  color: "rgba(0, 0, 0, 1)",
  fontStyle: "normal",
  fontFamily: "Poppins",
  fontWeight: "600",
  fontSize: "24px",
  letterSpacing: "0px",
  textDecoration: "none",
  lineHeight: "32px",
  textTransform: "none",
  position: "relative",
});

const Home: any = styled("div")({
  textAlign: "center",
  whiteSpace: "pre-wrap",
  fontSynthesis: "none",
  color: "rgba(0, 0, 0, 1)",
  fontStyle: "normal",
  fontFamily: "Poppins",
  fontWeight: "600",
  fontSize: "24px",
  letterSpacing: "0px",
  textDecoration: "none",
  lineHeight: "32px",
  textTransform: "none",
  position: "relative",
});

const Q1: any = styled("div")({
  textAlign: "center",
  whiteSpace: "pre-wrap",
  fontSynthesis: "none",
  color: "rgba(0, 0, 0, 1)",
  fontStyle: "normal",
  fontFamily: "Poppins",
  fontWeight: "600",
  fontSize: "24px",
  letterSpacing: "0px",
  textDecoration: "none",
  lineHeight: "32px",
  textTransform: "none",
  position: "relative",
});

const Q2: any = styled("div")({
  textAlign: "center",
  whiteSpace: "pre-wrap",
  fontSynthesis: "none",
  color: "rgba(0, 0, 0, 1)",
  fontStyle: "normal",
  fontFamily: "Poppins",
  fontWeight: "600",
  fontSize: "24px",
  letterSpacing: "0px",
  textDecoration: "none",
  lineHeight: "32px",
  textTransform: "none",
  position: "relative",
});

const Box1: any = styled("div")({
  textAlign: "center",
  whiteSpace: "pre-wrap",
  fontSynthesis: "none",
  color: "rgba(0, 0, 0, 1)",
  fontStyle: "normal",
  fontFamily: "Poppins",
  fontWeight: "600",
  fontSize: "24px",
  letterSpacing: "0px",
  textDecoration: "none",
  lineHeight: "32px",
  textTransform: "none",
  position: "relative",
});

const Line1: any = styled("img")({
  height: "auto",
  width: "100%",
  position: "relative",
});

const Line2: any = styled("img")({
  height: "auto",
  width: "50%",
  position: "relative",
});

const Q3: any = styled("div")({
  textAlign: "center",
  whiteSpace: "pre-wrap",
  fontSynthesis: "none",
  color: "rgba(0, 0, 0, 1)",
  fontStyle: "normal",
  fontFamily: "Poppins",
  fontWeight: "600",
  fontSize: "24px",
  letterSpacing: "0px",
  textDecoration: "none",
  lineHeight: "32px",
  textTransform: "none",
  position: "relative",
});

const Line3: any = styled("img")({
  height: "auto",
  width: "50%",
  position: "relative",
});

const Line4: any = styled("img")({
  height: "auto",
  width: "50%",
  position: "relative",
});

const Line5: any = styled("img")({
  height: "auto",
  width: "50%",
  position: "relative",
});

const Line6: any = styled("img")({
  height: "auto",
  width: "50%",
  position: "relative",
});

export default HamburgerMenu;
