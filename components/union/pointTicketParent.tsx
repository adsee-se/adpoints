"use client";

import React from "react";
import PointTicket from "./pointTicket";
import { styled } from "@mui/material/styles";
import { Point } from "@/types/point";

interface Props {
  points: Point[];
}

function PointTicketParent(props: Props) {
  return (
    <OuterDiv>
      {props.points.map((point, index) => (
        <PointTicket
          id={point.id}
          value={point.value}
          price={point.price}
          createdAt={point.createdAt}
          updatedAt={point.updatedAt}
          key={index}
        ></PointTicket>
      ))}
      {props.points.length % 2 === 1 && <SpacerDiv />}
    </OuterDiv>
  );
}

const OuterDiv = styled("div")({
  width: "100%",
  // margin: `0 auto`,
  display: `flex`,
  flexWrap: `wrap`,
  justifyContent: `space-evenly`,
});

const SpacerDiv = styled("div")({
  width: "40%",
});

export default PointTicketParent;
