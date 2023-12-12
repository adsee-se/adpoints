import QuestionSticParent from "@/components/union/questionSticParent";
import { fetchQuestions } from "@/fetchers/fetchQuestions";

const Home = async () => {
  const questions = await fetchQuestions();

  return (
    <main>
      <QuestionSticParent questions={questions} />
    </main>
  );
};

export default Home;
