"use client";

import React from "react";
import Link from "next/link";
import { styled } from "@mui/material/styles";

interface Props {
  backToHref?: any;
}

function BackArrowLink(props: Props): JSX.Element {
  return (
    <Link href={`${props.backToHref}`}>
      <div>
        <BackArrowImg src={"assets/images/backLink.png"} />
      </div>
    </Link>
  );
}

const BackArrowImg = styled("img")({
    position:`absolute`,
    top: `140px`,
    left:`28px`,
});

export default BackArrowLink;
