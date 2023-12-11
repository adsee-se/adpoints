"use client";

import React from "react";
import AnswerStic from "../atoms/answerStic";
import { styled } from "@mui/material/styles";
import { Question } from "@/types/Question";

interface Props {
  questions: Question[];
}

function AnswerCardParent(props: Props) {
  return (
    <OuterDiv>
      {props.questions.map((question) => (
        <AnswerStic
          key={question.id}
          id={question.id}
          title={question.title}
          point={question.point}
          category={question.category}
          status={question.status}
          created_at={question.created_at}
          updated_at={question.updated_at}
        ></AnswerStic>
      ))}
    </OuterDiv>
  );
}

const OuterDiv = styled("div")({});

export default AnswerCardParent;
