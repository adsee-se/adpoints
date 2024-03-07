"use client";

import React from "react";
import QuestionStic from "../atoms/questionStic";
import { styled } from "@mui/material/styles";
import { Question } from "../../types/question";

interface Props {
  questions?: Question[];
  userId?: string | null;
}

function QuestionCardParent(props: Props) {
  return (
    <OuterDiv>
      {props?.questions?.map((question) => (
        <QuestionStic
          key={question.id}
          id={question.id}
          title={question.title}
          point={question.point}
          category={question.category}
          status={question.status}
          createdAt={question.createdAt}
          updatedAt={question.updatedAt}
          userId={props.userId}
        ></QuestionStic>
      ))}
    </OuterDiv>
  );
}

const OuterDiv = styled("div")({});

export default QuestionCardParent;
