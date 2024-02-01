import { Question } from "@/types/question";

export const fetchQuestion = async (
  id: number,
  userId: number
): Promise<Question> => {
  const response = await fetch(
    `http://127.0.0.1:3000/question/${id}/${userId}`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data;
};
