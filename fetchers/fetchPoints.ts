import { Point } from "@/types/point";

export const fetchPoints = async (): Promise<Point[]> => {
  const response = await fetch(`http://127.0.0.1:3000/points`, {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
};
