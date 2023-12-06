import AnswerCardParent from "@/components/union/answerCardParent";

interface Question {
  id: number;
  user_id: number;
  title?: string;
  question_text?: string;
  point?: number;
  category?: string;
  status?: number;
  created_at?: Date;
  created_by?: string;
  updated_at?: Date;
  updated_by?: string;
}

const Answer = async () => {
  const fetchItems = async (): Promise<Question[]> => {
    //3のところをログインユーザーIDに変える
    const response = await fetch("http://127.0.0.1:3000/questions/3", {
      cache: "no-store",
    });
    const data = await response.json();
    return data;
  };
  const questions = await fetchItems();
  return (
    <main>
      <AnswerCardParent questions={questions} />
    </main>
  );
};

export default Answer;
