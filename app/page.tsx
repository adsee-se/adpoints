import { getServerSession } from "next-auth";
import { fetchQuestions } from "@/fetchers/fetchQuestions";
import { authOptions } from "@/libs/next-auth/authOptions";
import EstimateLink from "@/components/union/estimateLink";
import Link from "next/link";
import ChargeLink from "@/components/union/chargeLink";
import RightOrangeBackGround from "@/components/atoms/RightOrangeBackGround";

const Home = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  const questions = await fetchQuestions(user?.id);

  const sliceQuestions = questions.slice(0, 3);

  return (
    <>
      <main>
        <ChargeLink />
        <Link href={"/estimate"}>
          <EstimateLink />
        </Link>
        <RightOrangeBackGround questions={sliceQuestions} userId={user?.id} />
      </main>
    </>
  );
};

export default Home;
