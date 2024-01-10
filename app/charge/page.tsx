import PointTicketParent from "@/components/union/pointTicketParent";
import { fetchPoints } from "@/fetchers/fetchPoints";

const Point = async () => {
  const points = await fetchPoints();

  console.log(points, "points");
  return (
    <main>
      <PointTicketParent points={points} />
    </main>
  );
};

export default Point;
