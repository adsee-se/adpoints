import React from "react";
import { styled } from "@mui/material/styles";

interface Props {
  text?: string | null;
  height?: string;
}
interface Div {
  height?: string;
}

const ConfirmFrame = (props: Props) => {
  return (
    <Frame1 height={props.height}>
      <Q>{props.text}</Q>
    </Frame1>
  );
};

const Frame1 = styled("div")<Div>(({ height }) => ({
  backgroundColor: `rgba(238, 238, 238, 1)`,
  borderRadius: `5px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: "85%",
  height: `${height ? height : "46px"}`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  margin: `10px auto`,
  boxSizing: `border-box`,
}));

const Q = styled("div")(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  position: `absolute`,
  left: `28px`,
  top: `11px`,
}));

export default ConfirmFrame;
