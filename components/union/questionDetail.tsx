"use client";

import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Button from "@/components/atoms/button";
import ConfirmFrame from "@/components/atoms/confirmFrame";
import { Question } from "@/types/question";

interface Props {
  question: Question;
}

const QuestionDetail = (props: Props) => {
  return (
    <OuterDiv>
      <SubText>
        {`質問内容と消費ポイントをご確認の上、ご依頼ください。`}
      </SubText>
      <ConfirmFrame text={props.question.category} />
      <ConfirmFrame text={props.question.title} />
      <ConfirmFrame text={props.question.questionText} />
      <ConfirmFrame text={props.question.answer} height="160px" />
      <Group388>
        <Q>{`消費ポイント`}</Q>
        <Q88888P>
          <Q88888PSpan1>{props.question.point}</Q88888PSpan1>
          <Q88888PSpan2>{`p`}</Q88888PSpan2>
        </Q88888P>
      </Group388>
      <TheHarderYouWork>{`注文期限○/○まで`}</TheHarderYouWork>
      <ButtonDiv>
        <Button size="middle" color="orange">
          依頼する
        </Button>
        <Button size="middle" color="gray">
          戻る
        </Button>
      </ButtonDiv>
    </OuterDiv>
  );
};

const OuterDiv = styled("div")({
  borderRadius: `0px`,
  width: "100%",
  height: `656px`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const TheHarderYouWork = styled("div")(({ theme }) => ({
  textAlign: `center`,
  fontSynthesis: `none`,
  color: `rgba(149, 161, 187, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  height: `45px`,
}));

const Group388 = styled("div")({
  display: `flex`,
  margin: `30px 0`,
});

const Q88888PSpan1 = styled("span")({
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `30px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
});

const Q88888PSpan2 = styled("span")({
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
});

const Q88888P = styled("div")({
  textAlign: `right`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `nullpx`,
  letterSpacing: `NaNpx`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  width: `111px`,
  height: `24.58px`,
});

const Q = styled("p")(({ theme }) => ({
  textAlign: `left`,
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
  margin: `0 0 0 70px `,
  height: `24.58px`,
}));

const SubText = styled("div")(({ theme }) => ({
  fontSynthesis: `none`,
  color: `rgba(149, 161, 187, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  width: `85%`,
  margin: `0 auto`,
}));

const ButtonDiv = styled("div")(({ theme }) => ({
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
}));

export default QuestionDetail;
