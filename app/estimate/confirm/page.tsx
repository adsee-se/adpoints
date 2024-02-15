"use client";
import Input from "../../../components/atoms/input";
import TextArea from "../../../components/atoms/textArea";
import Button from "../../../components/atoms/button";
import { putQuestions } from "../../../fetchers/putQuestions";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation"; // TODO 一時追加したが不要な可能性あり

const Confirm = () => {
  const router = useRouter(); // TODO 一時追加したが不要な可能性あり
  // const { category, title, question_text } = router.state; // TODO 一時追加したが不要な可能性あり

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(event, "event");

    const question = {
      userId: 3, //ログインユーザーIDに変える
      category: "カテゴリーテスト",
      title: "titleテスト",
      questioText: "質問内容詳細テスト",
    };

    const response = await putQuestions(question);
    console.log("putQuestionsのレスポンス:", response); // 修正
    if (response.statusCode === 200) {
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
        <Input type="text" value={"カテゴリーテスト"} readOnly />
        <Input type="text" value={"titleテスト"} readOnly />
        <TextArea value={"質問内容詳細テスト"} readOnly />
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
