"use client";

import React from "react";
import AnswerCard from "../atoms/answerCard";
import { styled } from "@mui/material/styles";

type Question = {
  id: number;
  user_id: number;
  title?: string;
  question_text?: string;
  point?: number;
  category?: string;
  status?: number;
  created_at?: string;
  created_by?: string;
};

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
        ></AnswerCard>
      ))}
    </OuterDiv>
  );
}

const OuterDiv = styled("div")({});

export default AnswerCardParent;
