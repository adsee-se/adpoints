"use client";

import React, { ReactNode } from "react";
import { Question } from "../../types/question";
import { styled } from "@mui/material/styles";
import QuestionSticParent from "@/components/union/questionSticParent";
import QuestionsIndexLink from "../union/QuestionsIndexLink";

interface Props {
  questions?: Question[];
  userId?: string | null;
}

function RightOrangeBackGround(props: Props) {
  return (
    <>
      <OrangeDiv>
        <SubTitle>返信BOX</SubTitle>
        <QuestionSticParent questions={props.questions} userId={props.userId} />
        <QuestionsIndexLink />
      </OrangeDiv>
    </>
  );
}

const OrangeDiv = styled("div")(() => ({
  backgroundColor: "rgba(252, 238, 225, 1)",
  width: `100%`,
  height: `100%`,
  paddingBottom: `30px`,
  borderTopLeftRadius: `20px`,
  borderTopRightRadius: `20px`,
}));

const SubTitle = styled("p")(() => ({
  color: `363940`,
  fontSize: `22px`,
  fontWeight: `500`,
  textAlign: `center`,
  padding: `30px 0 10px 0`,
}));

export default RightOrangeBackGround;
