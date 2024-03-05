"use client";
import React, { ReactNode } from "react";
import { styled } from "@mui/material/styles";
import Link from "next/link";

interface Props {
  children?: ReactNode;
  disabled?: boolean;
  width?: string;
  height?: string;
  margin?: string;
  size?: "large" | "middle" | "small" | "tiny";
  type?: "button" | "submit" | "reset";
  color?: "orange" | "white" | "gray";
  onClick?: () => void;
  onMouseDown?: () => void;
  href?: string;
}

function Button(props: Props) {
  return (
    <>
      {props.href && !props.disabled ? (
        <>
          <Link href={props.href}>
            <Button2
              onClick={() => props.onClick && props.onClick()}
              type={props.type}
              className={`button ${props.size} ${props.color}`}
              color={props.color}
              width={props.width}
              height={props.height}
              margin={props.margin}
            >
              <ButtonDiv color={props.color}>
                {props.children ? props.children : null}
              </ButtonDiv>
            </Button2>
          </Link>
        </>
      ) : (
        <Button2
          onClick={() => props.onClick && props.onClick()}
          type={props.type}
          className={`button ${props.size} ${props.color}`}
          color={props.color}
          width={props.width}
          height={props.height}
          margin={props.margin}
        >
          <ButtonDiv color={props.color}>
            {props.children ? props.children : null}
          </ButtonDiv>
        </Button2>
      )}
    </>
  );
}

const Button2 = styled("button")<Props>(({ color, width, height, margin }) => ({
  borderRadius: `23px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `${width ? width : "310px"}`,
  height: `${height ? height : "45px"}`,
  margin: `${margin ? margin : "10px"}`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  cursor: "pointer",
  backgroundColor: `${
    color === "gray"
      ? "rgba(204, 204, 204, 1)"
      : color === "orange"
      ? "rgba(246, 161, 83, 1)"
      : "rgba(255, 255, 255, 1)"
  }`,
  boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `${
    color === "white" ? "rgba(246, 161, 83, 1)" : "rgba(255, 255, 255, 1)"
  }`,
  border: `${
    color === "white" ? "solid 3px rgba(246, 161, 83, 1)" : "transparent"
  }`,
  fontStyle: `normal`,
  fontFamily: `Rubik`,
  fontWeight: `500`,
  fontSize: `12px`,
  letterSpacing: `2px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `uppercase`,
  "&:hover": {
    backgroundColor: `rgba(200, 130, 50, 1)`,
  },
  "&:active": {
    backgroundColor: `rgba(150, 100, 30, 1)`,
  },
  "&:focus": {
    outline: "none",
    boxShadow: `0px 0px 8px rgba(0, 0, 0, 0.5)`,
  },
  "&:disabled": {
    backgroundColor: `rgba(150, 150, 150, 1)`,
    cursor: "not-allowed",
  },
}));

const ButtonDiv = styled("div")(({ color }) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `${
    color === "white" ? "rgba(246, 161, 83, 1)" : "rgba(255, 255, 255, 1)"
  }`,
  fontStyle: `normal`,
  fontFamily: `Rubik`,
  fontWeight: `500`,
  fontSize: `12px`,
  letterSpacing: `2px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `uppercase`,
  position: `absolute`,
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
}));

export default Button;
