import React from "react";
import { fetchQuestion } from "@/fetchers/fetchQuestion";
import Title from "@/components/atoms/title";
import QuestionDetail from "@/components/union/questionDetail";

const Question = async (props: any) => {
  const question = await fetchQuestion(props.params.id, props.searchParams.userId);

  return (
    <main>
      <Title
        title={`注文内容を確認する`}
        fontWeight={"900"}
        size={"24px"}
      ></Title>
      <QuestionDetail question={question} />
    </main>
  );
};

export default Question;
