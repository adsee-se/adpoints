import React from "react";
import CompleteUnion from "@/components/union/completeUnion";

const Complete = () => {
  const singUpSentence =
    "確認メールにて仮パスワードを発行しました。ログイン画面に戻りログインをしてください。";
  return (
    <>
      <CompleteUnion
        title={"登録が完了しました"}
        sentence={singUpSentence}
        buttonColor="orange"
        buttonText="ログイン画面に戻る"
        href={`/login`}
      />
    </>
  );
};

export default Complete;
