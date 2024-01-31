"use client";

import QuestionCard from "../atoms/questionCard";
import { styled } from "@mui/material/styles";
import { Question } from "@/types/question";

interface Props {
  questions: Question[];
}

function QuestionCardParent(props: Props) {
  return (
    <OuterDiv>
      {props.questions.map((question) => (
        <QuestionCard
          key={question.id}
          id={question.id}
          title={question.title}
          point={question.point}
          category={question.category}
          status={question.status}
          createdAt={question.createdAt}
          updatedAt={question.updatedAt}
        ></QuestionCard>
      ))}
    </OuterDiv>
  );
}

const OuterDiv = styled("div")({});

export default QuestionCardParent;
