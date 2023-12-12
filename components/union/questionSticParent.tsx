"use client";

import React from "react";
import QuestionStic from "../atoms/questionStic";
import { styled } from "@mui/material/styles";
import { Question } from "@/types/question";

interface Props {
  questions: Question[];
}

function QuestionCardParent(props: Props) {
  return (
    <OuterDiv>
      {props.questions.map((question) => (
        <QuestionStic
          key={question.id}
          id={question.id}
          title={question.title}
          point={question.point}
          category={question.category}
          status={question.status}
          created_at={question.created_at}
          updated_at={question.updated_at}
        ></QuestionStic>
      ))}
    </OuterDiv>
  );
}

const OuterDiv = styled("div")({});

export default QuestionCardParent;
