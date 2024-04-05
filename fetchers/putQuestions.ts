import { LambdaApiResponse } from "@/types/LambdaApiResponse";
import { Question } from "@/types/question";

export const putQuestions = async (
  question: Question
): Promise<LambdaApiResponse> => {
  const response = await fetch(`http://127.0.0.1:3000/question`, {
    method: "POST",
    body: JSON.stringify(question),
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  return {
    statusCode: response.status,
  };
};
