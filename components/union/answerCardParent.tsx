"use client";

import React from "react";
import AnswerCard from "../atoms/answerCard";
import { styled } from "@mui/material/styles";
import { Question } from "@/types/question";

interface Props {
  questions: Question[];
}

function AnswerCardParent(props: Props) {
  return (
    <OuterDiv>
      {props.questions.map((question) => (
        <AnswerCard
          key={question.id}
          id={question.id}
          title={question.title}
          point={question.point}
          category={question.category}
          status={question.status}
          created_at={question.created_at}
          updated_at={question.updated_at}
        ></AnswerCard>
      ))}
    </OuterDiv>
  );
}

const OuterDiv = styled("div")({});

export default AnswerCardParent;
