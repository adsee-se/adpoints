import React from "react";
import CompleteUnion from "@/components/union/completeUnion";
import { indention } from "@/helpers/indention";

const Complete = () => {
  const questionSentence =
    "回答希望日が設定可能です。返信BOXよりご確認の上、回答してほしい日時を設定してください。";
    const formattedSentence: string = indention(questionSentence);
  return (
    <>
      <CompleteUnion
        title={"注文が完了しました"}
        sentence={formattedSentence}
        buttonColor="white"
        buttonText="返信BOXを見る"
        href={`/questions`}
        isSecondButton
        secondButtonColor="orange"
        secondButtonText="HOMEに戻る"
        secondHref={`/`}
      />
    </>
  );
};

export default Complete;
