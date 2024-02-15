import { LambdaApiResponse } from "@/types/LambdaApiResponse";
import { Question } from "@/types/question";

export const putQuestions = async (
  question: Question
): Promise<LambdaApiResponse> => {
  const response = await fetch(`http://127.0.0.1:3000/question`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(question),
    cache: "no-store",
    mode: "no-cors",
  });

  const data = await response.json();

  return {
    statusCode: response.status,
    body: data,
  };
};
