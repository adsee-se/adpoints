import QuestionCardParent from "@/components/union/questionCardParent";
import Title from "@/components/atoms/title";

const Questions = async () => {

  return (
    <main>
      <Title title={"返信BOX"} fontWeight={'900'} size={'24px'}></Title>
      <QuestionCardParent />
    </main>
  );
};

export default Questions;
