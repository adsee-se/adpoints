import QuestionSticParent from "@/components/union/questionSticParent";
import { fetchQuestions } from "@/fetchers/fetchQuestions";
import EstimateLink from "@/components/union/estimateLink";
import Link from "next/link";

const Home = async () => {
  const questions = await fetchQuestions();

  return (
    <main>
      <Link href={"/estimate"}>
        <EstimateLink />
      </Link>
      <QuestionSticParent questions={questions} />
    </main>
  );
};

export default Home;
