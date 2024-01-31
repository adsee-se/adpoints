import { Question } from "@/types/question";

export const fetchQuestions = async (
  userId: number = 3
): Promise<Question[]> => {
  //3のところをログインユーザーIDに変える
  const response = await fetch(`http://127.0.0.1:3000/questions/${userId}`, {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
};
