"use client";

import React, { useEffect, useState } from "react";
import QuestionCard from "../atoms/questionCard";
import { useSession } from "next-auth/react";
import { styled } from "@mui/material/styles";
import { Question } from "@/types/question";
import { fetchQuestions } from "@/fetchers/fetchQuestions";
import { User, ExtendedSession } from "@/types/user";

interface Props {
  questions?: Question[];
  userId?: string;
}

function QuestionCardParent(props: Props) {

  return (
    <OuterDiv>
      {props.questions?.map((question) => (
        <QuestionCard
          key={question.id}
          id={question.id}
          title={question.title}
          point={question.point}
          category={question.category}
          status={question.status}
          createdAt={question.createdAt}
          updatedAt={question.updatedAt}
          userId={props.userId}
        ></QuestionCard>
      ))}
    </OuterDiv>
  );
}

const OuterDiv = styled("div")({});

export default QuestionCardParent;
