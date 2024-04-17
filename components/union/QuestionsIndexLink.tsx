"use client";

import React from "react";
import { styled } from "@mui/material/styles";
import Link from "next/link";

function QuestionsIndexLink() {
  return (
    <Link href={`/questions`}>
      <Div>
        <Div2>返信BOX一覧</Div2>
        <Div3>
          <Img loading="lazy" src={"assets/images/linkIcon.png"} />
        </Div3>
      </Div>
    </Link>
  );
}

const Div = styled("div")(() => ({
  width: `160px`,
  height: `40px`,
  justifyContent: `center`,
  borderRadius: `90px`,
  backgroundColor: `#f6a153`,
  display: `flex`,
  gap: `5px`,
  padding: `0 10px 0 13px`,
  margin: `0 auto`,
}));

const Div2 = styled("div")(() => ({
  color: `#fff`,
  letterSpacing: `0.28px`,
  font: `500 14px/24px Noto Sans JP, sans-serif`,
  margin: `auto`,
}));

const Div3 = styled("div")(() => ({
  alignItems: `center`,
  display: `flex`,
  justifyContent: `center`,
  margin: `auto 0`,
}));

const Img = styled("img")({
  objectPosition: `center`,
  width: `24px`,
  fill: `#fff`,
  strokeWidth: `1px`,
  stroke: `#f6a153`,
  borderColor: `rgba(246, 161, 83, 1)`,
  borderStyle: `solid`,
  borderWidth: `1px`,
});

export default QuestionsIndexLink;
