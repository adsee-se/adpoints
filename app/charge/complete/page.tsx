import React from "react";
import CompleteUnion from "@/components/union/completeUnion";

const Complete = () => {
  const chargeSentence =
    "ポイントが反映されるまでにお時間がかかる場合がございます。時間をおいて所有ポイントをご確認ください。";
  return (
    <>
      <CompleteUnion
        title={"チャージが完了しました"}
        sentence={chargeSentence}
        buttonColor="orange"
        buttonText="HOMEに戻る"
        href={`/`}
      />
    </>
  );
};

export default Complete;
