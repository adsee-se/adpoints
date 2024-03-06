import React from "react";
import CompleteUnion from "@/components/union/completeUnion";
import { indention } from "@/helpers/indention";

const Complete = () => {
  const singUpSentence =
    "確認メールにて仮パスワードを発行しました。ログイン画面に戻りログインをしてください。";
    const formattedSentence: string = indention(singUpSentence);
  return (
    <>
      <CompleteUnion
        title={"登録が完了しました"}
        sentence={formattedSentence}
        buttonColor="orange"
        buttonText="ログイン画面に戻る"
        href={`/login`}
      />
    </>
  );
};

export default Complete;
