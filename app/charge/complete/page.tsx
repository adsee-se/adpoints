import React from "react";
import CompleteUnion from "@/components/union/completeUnion";
import { indention } from "@/helpers/indention";

const Complete = () => {
  const chargeSentence =
    "ポイントが反映されるまでにお時間がかかる場合がございます。時間をおいて所有ポイントをご確認ください。";
  const formattedSentence: string = indention(chargeSentence);
  return (
    <>
      <CompleteUnion
        title={"チャージが完了しました"}
        sentence={formattedSentence}
        buttonColor="orange"
        buttonText="HOMEに戻る"
        href={`/`}
      />
    </>
  );
};

export default Complete;
