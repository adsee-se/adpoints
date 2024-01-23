import PointTicketParent from "@/components/union/pointTicketParent";
import { fetchPoints } from "@/fetchers/fetchPoints";
import Title from "@/components/atoms/title";

const Point = async () => {
  const points = await fetchPoints();

  console.log(points, "points");
  return (
    <main>
      <Title title={"ポイントチャージ"} fontWeight={'900'} size={'24px'}></Title>
      <PointTicketParent points={points} /> 
    </main>
  );
};

export default Point;
