"use client";

import React from "react";
import PointTicket from "../atoms/pointTicket";
import { styled } from "@mui/material/styles";
import { Point } from "@/types/point";

interface Props {
  points: Point[];
}

function QuestionCardParent(props: Props) {
  return (
    <OuterDiv>
      {props.points.map((point) => (
        <PointTicket
          id={point.id}
          value={point.value}
          price={point.price}
          created_at={point.created_at}
          updated_at={point.updated_at}
        ></PointTicket>
      ))}
    </OuterDiv>
  );
}

const OuterDiv = styled("div")({
  width: "100%",
  // margin: `0 auto`,
  display: `flex`,
  justifyContent: `space-evenly`,
});

export default QuestionCardParent;
