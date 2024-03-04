"use client";
import Input from "../../../components/atoms/input";
import TextArea from "../../../components/atoms/textArea";
import Button from "../../../components/atoms/button";
import React, { useState, useEffect } from 'react';
import { putQuestions } from "../../../fetchers/putQuestions";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation"; // TODO 一時追加したが不要な可能性あり
import { useSession } from "next-auth/react";
import { User } from "@/types/user";
import { getCurrentDateTimeFormatted } from '../../utils/date_utils';

const Confirm = () => {
  const router = useRouter(); // TODO 一時追加したが不要な可能性あり
  const { data: session } = useSession();
  const user = session?.user ? (session.user as User) : null;
  const userId = user?.id ?? null;

  // 状態を追加してlocalStorageからの値を保持
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [questionText, setQuestionText] = useState('');

  // コンポーネントがマウントされた後にlocalStorageから値を読み込む
  useEffect(() => {
    setCategory(localStorage.getItem("category") ?? '');
    setTitle(localStorage.getItem("title") ?? '');
    setQuestionText(localStorage.getItem("questionText") ?? '');
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // FormDataオブジェクトを使用してフォームデータを取得
    const formData = new FormData(event.currentTarget);
    const formattedCurrentDateTime = getCurrentDateTimeFormatted();
    const questionId = formattedCurrentDateTime + '_' + userId;

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
    if (response.statusCode === 200) {

      router.push("/estimate/complete");
    } else {
      // TODO エラーハンドリング
    }
  };

  return (
    <ConfirmArea>
      <b>質問内容のご確認</b>
      <Annotation>
        下記質問内容をご確認頂き、よろしければ送信ボタンを押してください。
      </Annotation>
      <form onSubmit={handleSubmit}>
        {/* TODO widthを直接指定しているが問題ないか確認 */}
        <Input name="category" value={category} width='311px' readOnly />
        <Input name="title" value={title} width='311px' readOnly />
        <TextArea name="questionText" value={questionText} readOnly />
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
