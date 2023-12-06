import AnswerCardParent from "@/components/union/answerCardParent";
import { fetchQuestions } from "@/fetchers/fetchQuestions";

const Answer = async () => {
  const questions = await fetchQuestions();
  
  return (
    <main>
      <AnswerCardParent questions={questions} />
    </main>
  );
};

export default Answer;
