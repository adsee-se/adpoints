import { getServerSession } from "next-auth";
import { fetchQuestions } from "@/fetchers/fetchQuestions";
import { authOptions } from '@/libs/next-auth/authOptions'
import QuestionSticParent from "@/components/union/questionSticParent";
import EstimateLink from "@/components/union/estimateLink";
import Link from "next/link";
import ChargeLink from "@/components/union/chargeLink";

const Home = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  const questions = await fetchQuestions(user?.id);

  return (
    <main>
      <Link href={"/estimate"}>
        <EstimateLink />
      </Link>
      <ChargeLink />
      <QuestionSticParent questions={questions} userId={user?.id} />
    </main>
  );
};

export default Home;
