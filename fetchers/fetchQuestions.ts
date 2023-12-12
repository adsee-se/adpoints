import { Question } from "@/types/Question";

export const fetchQuestions = async (
  user_id: number = 3
): Promise<Question[]> => {
  //3のところをログインユーザーIDに変える
  const response = await fetch(`http://127.0.0.1:3000/questions/${user_id}`, {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
};
