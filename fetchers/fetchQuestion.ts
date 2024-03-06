import { Question } from "@/types/question";

export const fetchQuestion = async (
  id: string,
  userId: string
): Promise<Question> => {
  const response = await fetch(
    `http://127.0.0.1:3000/question/${id}/${userId}`,
    {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  const data = await response.json();
  return data;
};
