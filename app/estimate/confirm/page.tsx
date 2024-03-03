"use client";
import Input from "../../../components/atoms/input";
import TextArea from "../../../components/atoms/textArea";
import Button from "../../../components/atoms/button";
import { hashEmailTo10Digits } from "../../utils/user_id_utils.mjs";
import { putQuestions } from "../../../fetchers/putQuestions";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation"; // TODO 一時追加したが不要な可能性あり
import { useSession } from "next-auth/react";

const Confirm = () => {
  const router = useRouter(); // TODO 一時追加したが不要な可能性あり
  const { data: session } = useSession();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // FormDataオブジェクトを使用してフォームデータを取得
    const formData = new FormData(event.currentTarget);
    console.log('session：', session);
    // TODO questionsテーブルのrangeキーは現在日時+userIdとする。
    const userId = session?.user?.id ? session.user.id : null;
    const currentTime = Math.floor(Date.now() / 1000).toString();
    const questionId = currentTime + userId;

    const category = formData.get("category")?.toString();
    const title = formData.get("title")?.toString();
    const questionText = formData.get("questionText")?.toString();

    const question = {
      id: questionId,
      userId: userId,
      category: category,
      title: title,
      questionText: questionText,
    };

    const response = await putQuestions(question);
    console.log("putQuestionsのレスポンス:", response);
    if (response.statusCode === 200) {
      console.log('完了あああ');

      router.push("/estimate/complete");
    } else {
      // エラーハンドリング
    }
  };

  return (
    <ConfirmArea>
      <b>質問内容のご確認</b>
      <Annotation>
        下記質問内容をご確認頂き、よろしければ送信ボタンを押してください。
      </Annotation>
      <form onSubmit={handleSubmit}>
        <Input name="category" type="text" value={localStorage.getItem("category") ?? ''} readOnly />
        <Input name="title" type="text" value={localStorage.getItem("title") ?? ''} readOnly />
        <TextArea name="questionText" value={localStorage.getItem("questionText") ?? ''} readOnly />
        <Button type="submit">送信</Button>
      </form>
    </ConfirmArea>
  );
};

const ConfirmArea = styled("div")({
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: "center", // 中央揃え
  margin: `35px`,
});

const Annotation = styled("div")({
  color: `gray`,
  wordBreak: `normal`,
});

export default Confirm;
