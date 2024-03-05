import React from "react";
import CompleteUnion from "@/components/union/completeUnion";

const Complete = () => {
  const estimateSentence =
    "返信までに数日かかる場合がございます。返信が来ているかは、返信BOXをご覧ください。";
  return (
    <>
      <CompleteUnion
        title={"お見積り依頼ありがとうございました。"}
        sentence={estimateSentence}
        buttonColor="white"
        buttonText="返信BOXを見る"
        href={`/login`}
        isSecondButton
        secondButtonColor="orange"
        secondButtonText="再度見積もる"
        secondHref={`/estimate`}
      />
    </>
  );
};

export default Complete;
