"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { fetchQuestions } from "@/fetchers/fetchQuestions";
import QuestionStic from "../atoms/questionStic";
import { styled } from "@mui/material/styles";
import { Question } from "../../types/question";
import { User, ExtendedSession } from "@/types/user";

interface Props {
  questions?: Question[];
}

function QuestionCardParent(props: Props) {
  const { data: session } = useSession();
  console.log(session, "session");
  const user = session?.user as User;
  const [questions, setQuestions] = useState<Question[]>();

  const getData = async (id: string) => {
    const data = await fetchQuestions(id);
    await setQuestions(data);
  };

  useEffect(() => {
    if (user) {
      console.log(user, "userEffect");
      getData(user?.id);
    }
  }, [user]);

  return (
    <OuterDiv>
      {questions?.map((question) => (
        <QuestionStic
          key={question.id}
          id={question.id}
          title={question.title}
          point={question.point}
          category={question.category}
          status={question.status}
          createdAt={question.createdAt}
          updatedAt={question.updatedAt}
          userId={user?.id}
        ></QuestionStic>
      ))}
    </OuterDiv>
  );
}

const OuterDiv = styled("div")({});

export default QuestionCardParent;
