"use client";

import { useEffect } from "react";

const Sample = async () => {
  useEffect(() => {
    console.log("test");
  }, []);

  return (
    <>
      <div>ブラウザで /sample にアクセスしたら、このページ</div>
    </>
  );
};

export default Sample;
