import AnswerSticParent from "@/components/union/answerSticParent";
import { fetchQuestions } from "@/fetchers/fetchQuestions";

const Home = async () => {
  const questions = await fetchQuestions();

  return (
    <main>
      <AnswerSticParent questions={questions} />
    </main>
  );
};

export default Home;
