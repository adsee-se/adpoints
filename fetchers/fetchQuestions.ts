import { Question } from "@/types/Question";

export const fetchQuestions = async (): Promise<Question[]> => {
  //3のところをログインユーザーIDに変える
  const response = await fetch("http://127.0.0.1:3000/questions/3", {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
};
