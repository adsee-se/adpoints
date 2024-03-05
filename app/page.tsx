import QuestionSticParent from "@/components/union/questionSticParent";
import EstimateLink from "@/components/union/estimateLink";
import Link from "next/link";

const Home = async () => {
  return (
    <main>
      <Link href={"/estimate"}>
        <EstimateLink />
      </Link>
      <QuestionSticParent />
    </main>
  );
};

export default Home;
