"use client";
import Input from "../../components/atoms/input";
import TextArea from "../../components/atoms/textArea";
import Button from "../../components/atoms/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { styled } from "@mui/material/styles";
import InputPullDown from "@/components/atoms/inputPullDown";
import Title from "@/components/atoms/title";

const Estimate = () => {
  const router = useRouter();

  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [questionText, setQuestionText] = useState("");

  useEffect(() => {
    const storedCategory = localStorage.getItem("category") || "";
    setCategory(storedCategory);
    const storedTitle = localStorage.getItem("title") || "";
    setTitle(storedTitle);
    const storedQuestionText = localStorage.getItem("questionText") || "";
    setQuestionText(storedQuestionText);
  }, []);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategory(event.target.value);
  };

  const handleConfirm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // フォームのデフォルト送信を防止

    // FormDataを使用してフォームの値を取得
    const formData = new FormData(event.currentTarget);
    const category = formData.get("category")?.toString();
    const title = formData.get("title")?.toString();
    const questionText = formData.get("questionText")?.toString();

    if (category && title && questionText) {
      // localStorageに値を保存
      localStorage.setItem("category", category);
      localStorage.setItem("title", title);
      localStorage.setItem("questionText", questionText);

      router.push("/estimate/confirm");
    }
  };

  return (
    <EstimateArea>
      <Title
        title={"質問内容を見積もる"}
        fontWeight={"900"}
        size={"24px"}
      ></Title>
      <Annotation>
        疑問点を解消するための消費ポイントについてお見積もりを行うことができます。お見積もりは、無料で行うことができます。
      </Annotation>
      <form onSubmit={handleConfirm}>
        <InputPullDown
          name="category"
          value={category}
          onChange={handleCategoryChange}
        />
        {/* TODO widthを直接指定しているが問題ないか確認 */}
        <Input
          type="text"
          name="title"
          placeholder="⚪︎⚪︎⚪︎について"
          width="311px"
          defaultValue={title}
        />
        <TextArea
          name="questionText"
          placeholder="詳細"
          defaultValue={questionText}
        />
        <Button color="orange">確認画面に進む</Button>
        <Button color="white" type="button" href="/">
          トップに戻る
        </Button>
      </form>
    </EstimateArea>
  );
};

const EstimateArea = styled("div")({
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: "center",
  margin: `35px`,
});

const Annotation = styled("div")({
  color: `gray`,
  wordBreak: `normal`,
});

export default Estimate;
