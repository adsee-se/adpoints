import { getServerSession } from "next-auth";
import { fetchQuestions } from "@/fetchers/fetchQuestions";
import { authOptions } from "@/libs/next-auth/authOptions";
import QuestionCardParent from "@/components/union/questionCardParent";
import Title from "@/components/atoms/title";
import BackArrowLink from "@/components/union/BackArrowLink";

const Questions = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  const questions = await fetchQuestions(user.id);

  return (
    <main>
      <BackArrowLink backToHref={`/`} />
      <Title title={"返信BOX"} fontWeight={"900"} size={"24px"}></Title>
      <QuestionCardParent questions={questions} userId={user.id} />
    </main>
  );
};

export default Questions;
