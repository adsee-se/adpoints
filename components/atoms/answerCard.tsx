"use client";

import React from "react";
import { styled } from "@mui/material/styles";

interface Props {
  id?: number;
  title?: string;
  point?: number;
  status?: number;
  category?: string;
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
}

const YET_REPLY = 0;
const ALREDY_REPLY = 1;
const OTHER = 2;

function AnswerCard(props: Props) {
  const returnTimeSecond =
    new Date(
      props.updatedAt ? props.updatedAt : props.createdAt ? props.createdAt : ""
    ).getTime() / 1000;
  const nowTimeSecond = Date.now() / 1000;
  const timeDiff = nowTimeSecond - returnTimeSecond;
  const timeWithinText =
    timeDiff < 60
      ? "1分以内"
      : timeDiff < 60 * 5
      ? "5分以内"
      : timeDiff < 60 * 15
      ? "15分以内"
      : timeDiff < 60 * 30
      ? "30分以内"
      : timeDiff < 60 * 60
      ? "１時間以内"
      : timeDiff < 60 * 60 * 3
      ? "３時間以内"
      : timeDiff < 60 * 60 * 5
      ? "５時間以内"
      : timeDiff < 60 * 60 * 10
      ? "10時間以内"
      : timeDiff < 60 * 60 * 20
      ? "20時間以内"
      : timeDiff > 60 * 60 * 24
      ? "1日以上前"
      : "";

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
        <AnswerLink status={props.status}>
          {props.point && props.point > 0 ? "回答を確認する" : "質問を確認する"}
        </AnswerLink>
      </FlexFrame>
    </OuterFrame>
  );
}

const OuterFrame = styled("div")<Props>(({ status }) => ({
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
  width: `315px`,
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

const AnswerLink = styled("a")<Props>(({ status }) => ({
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

const RequiredPoint = styled("p")<Props>(({ status }) => ({
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

export default AnswerCard;
