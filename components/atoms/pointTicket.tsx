import React from "react";
import { styled } from "@mui/material/styles";
import { Point } from "@/types/point";

function Group391(props: Point) {
  return (
    <PointTicketFrame>
      <PointLine>
        <PointValue>{props.value}</PointValue>
        <PointUnit>{`p`}</PointUnit>
      </PointLine>
      <PriceLine>{`¥${props.price?.toLocaleString()}`}</PriceLine>
    </PointTicketFrame>
  );
}

const PointTicketFrame = styled("div")({
  borderRadius: `20px`,
  border: `1px solid rgba(172, 172, 179, 1)`,
  position: `relative`,
  width: "40%",
  height: `101px`,
  margin: `10px 0`,
});

const PointLine = styled("div")({
  color: `rgba(0, 0, 0, 1)`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  lineHeight: `24px`,
  position: `absolute`,
  top: `43%`,
  left: `50%`,
  transform: `translate(-50%, -50%)`,
});

const PointValue = styled("span")({
  color: `rgba(0, 0, 0, 1)`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `30px`,
  lineHeight: `24px`,
});

const PointUnit = styled("span")({
  color: `rgba(0, 0, 0, 1)`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `14px`,
  lineHeight: `24px`,
});

const PriceLine = styled("div")(({ theme }) => ({
  color: `rgba(84, 84, 84, 1)`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `14px`,
  lineHeight: `24px`,
  position: `absolute`,
  top: `68%`,
  left: `50%`,
  transform: `translate(-50%, -50%)`,
}));

export default Group391;
