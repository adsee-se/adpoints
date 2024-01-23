import QuestionCardParent from "@/components/union/questionCardParent";
import { fetchQuestions } from "@/fetchers/fetchQuestions";
import Title from "@/components/atoms/title";

const Question = async () => {
  const questions = await fetchQuestions();

  return (
    <main>
      <Title title={"返信BOX"} fontWeight={'900'} size={'24px'}></Title>
      <QuestionCardParent questions={questions} />
    </main>
  );
};

export default Question;
