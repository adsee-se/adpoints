import PointTicketParent from "@/components/union/pointTicketParent";
import { fetchPoints } from "@/fetchers/fetchPoints";
import Title from "@/components/atoms/title";
import BackArrowLink from "@/components/union/BackArrowLink";

const Point = async () => {
  const points = await fetchPoints();

  return (
    <main>
      <BackArrowLink backToHref={`/`}/>
      <Title
        title={"ポイントチャージ"}
        fontWeight={"900"}
        size={"24px"}
      ></Title>
      <PointTicketParent points={points} />
    </main>
  );
};

export default Point;
