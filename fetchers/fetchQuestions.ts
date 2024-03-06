import { Question } from "@/types/question";

export const fetchQuestions = async (userId: string): Promise<Question[]> => {
  const response = await fetch(`http://127.0.0.1:3000/questions/${userId}`, {
    method: "GET",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  const data = await response.json();
  return data;
};
