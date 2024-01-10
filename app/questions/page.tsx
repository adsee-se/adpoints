import QuestionCardParent from "@/components/union/questionCardParent";
import { fetchQuestions } from "@/fetchers/fetchQuestions";

const Question = async () => {
  const questions = await fetchQuestions();

  return (
    <main>
      <QuestionCardParent questions={questions} />
    </main>
  );
};

export default Question;
