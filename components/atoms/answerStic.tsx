import React from "react";
import { styled } from "@mui/material/styles";
import { YET_REPLY, ALREDY_REPLY, OTHER } from "@/helpers/const";
import { renderTimeWithinText } from "@/helpers/renderTimeWithinText";
import { Question } from "@/types/Question";

function AnswerStic(props: Question) {
  const timeWithinText = renderTimeWithinText(
    props.updated_at,
    props.created_at
  );

  return (
    <Frame6250391>
      <Frame6250392>
        <Rectangle606></Rectangle606>
        <Information>
          <Text>{`ここにはユーザーのタイトルが入りますああああ...`}</Text>
          <Text1>{`1分以内`}</Text1>
        </Information>
      </Frame6250392>
    </Frame6250391>
  );
}

const Frame6250391 = styled("div")({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: "100%",
  height: `52.24px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Frame6250392 = styled("div")({
  borderRadius: `0px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `321px`,
  height: `52.24px`,
  left: `0px`,
  top: `0px`,
});

const Rectangle606 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(246, 161, 83, 1)`,
  boxSizing: `border-box`,
  borderRadius: `10px`,
  width: `321px`,
  height: `52.24px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Information = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `289px`,
  height: `16.39px`,
  left: `16px`,
  top: `15px`,
});

const Text = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(24, 33, 53, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `10px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  width: `233px`,
  height: `16.39px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Text1 = styled("div")({
  textAlign: `right`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(172, 172, 179, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `10px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `12px`,
  textTransform: `none`,
  width: `34px`,
  height: `12.29px`,
  position: `absolute`,
  left: `255px`,
  top: `4px`,
});

export default AnswerStic;
