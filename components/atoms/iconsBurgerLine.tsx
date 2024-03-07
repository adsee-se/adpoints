"use client";

import React from "react";
import Image from "next/image";

const IconsBurgerLine = ({
  onBurgerIconClick,
}: {
  onBurgerIconClick: () => void;
}) => (
  <button
    style={{
      borderRadius: "0px",
      display: "flex",
      position: "relative",
      isolation: "isolate",
      flexDirection: "row",
      width: "32px",
      height: "32px",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      padding: "0px",
      boxSizing: "border-box",
    }}
    onClick={onBurgerIconClick}
  >
    <Image
      style={{
        height: "10.67px",
        width: "21.33px",
        position: "absolute",
        left: "5px",
        top: "11px",
      }}
      src="/assets/images/iconsBurgerLine_burger_icon.png"
      loading="lazy"
      alt="burger icon"
    />
  </button>
);

export default IconsBurgerLine;
