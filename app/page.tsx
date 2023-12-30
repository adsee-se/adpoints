import QuestionSticParent from "@/components/union/questionSticParent";
import { fetchQuestions } from "@/fetchers/fetchQuestions";
import EstimateLink from "@/components/union/estimateLink";

const Home = async () => {
  const questions = await fetchQuestions();

  return (
    <main>
      <EstimateLink />
      <QuestionSticParent questions={questions} />
    </main>
  );
};

export default Home;
