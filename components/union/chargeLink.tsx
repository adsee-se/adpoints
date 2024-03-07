"use client";

import React from "react";
import Link from "next/link";
import { styled } from "@mui/material/styles";

interface Group387Props {
  className?: any;
}

function ChargeLink(props: Group387Props): JSX.Element {
  return (
    <Link href={"/charge"}>
      <div>
        <ChargeImg src={"assets/images/chargeIcon.png"} />
      </div>
    </Link>
  );
}

const ChargeImg = styled("img")({
  margin: `30px auto`,
});

export default ChargeLink;
