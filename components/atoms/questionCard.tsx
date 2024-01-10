"use client";

import React from "react";
import { styled } from "@mui/material/styles";
import { YET_REPLY, ALREDY_REPLY, OTHER } from "@/helpers/const";
import { renderTimeWithinText } from "@/helpers/renderTimeWithinText";
import { Question } from "@/types/question";

function QuestionCard(props: Question) {
  const timeWithinText = renderTimeWithinText(
    props.updated_at,
    props.created_at
  );

  return (
    <OuterFrame status={props.status} key={props.id}>
      <TimeCounter>{timeWithinText}</TimeCounter>
      <QuestionTitle>{props.title}</QuestionTitle>
      <FlexFrame>
        <RequiredPoint status={props.status}>
          {props.point && props.point > 0
            ? String(props.point) + "p"
            : "お見積もり中"}
        </RequiredPoint>
        <CategoryTitle>{props.category}</CategoryTitle>
        <QuestionLink status={props.status}>
          {props.point && props.point > 0 ? "回答を確認する" : "質問を確認する"}
        </QuestionLink>
      </FlexFrame>
    </OuterFrame>
  );
}

const OuterFrame = styled("div")<Question>(({ status }) => ({
  boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid ${
    status === ALREDY_REPLY
      ? "rgba(246, 161, 83, 1)"
      : YET_REPLY
      ? "rgba(172, 172, 179, 1)"
      : "rgba(172, 172, 179, 1)"
  }`,
  boxSizing: `border-box`,
  borderRadius: `10px`,
  width: `85%`,
  height: `85px`,
  margin: `20px auto`,
}));

const FlexFrame = styled("div")({
  display: `flex`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
});

const QuestionTitle = styled("p")({
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
  width: `260.16px`,
  height: `27.09px`,
  margin: `5px 0 10px 20px`,
});

const QuestionLink = styled("a")<Question>(({ status }) => ({
  textAlign: `end`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `${
    status === ALREDY_REPLY
      ? "rgba(246, 161, 83, 1)"
      : YET_REPLY
      ? "rgba(172, 172, 179, 1)"
      : "rgba(172, 172, 179, 1)"
  }`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `10px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  width: `140px`,
  height: `20px`,
  marginRight: `14px`,
}));

const CategoryTitle = styled("p")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(172, 172, 179, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `500`,
  fontSize: `10px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `12px`,
  textTransform: `none`,
  width: `80px`,
  height: `15px`,
});

const TimeCounter = styled("p")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(172, 172, 179, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `500`,
  fontSize: `10px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `12px`,
  textTransform: `none`,
  width: `80px`,
  height: `15px`,
  marginTop: `5px`,
  marginLeft: `12px`,
});

const RequiredPoint = styled("p")<Question>(({ status }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `${
    status === ALREDY_REPLY
      ? "rgba(246, 161, 83, 1)"
      : status === YET_REPLY
      ? "rgba(172, 172, 179, 1)"
      : "rgba(172, 172, 179, 1)"
  }`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `500`,
  fontSize: `${
    status === ALREDY_REPLY ? "14px" : status === YET_REPLY ? "10px" : "10px"
  }`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `12px`,
  textTransform: `none`,
  width: `70px`,
  height: `15px`,
  margin: `0 14px`,
}));

export default QuestionCard;
