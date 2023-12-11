'use client';
import Input from "../../components/atoms/input";
import TextArea from "../../components/atoms/textArea";
import Button from "../../components/atoms/button"
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import InputPullDown from "@/components/atoms/InputPullDown";

const Estimate = () => {
  return (
    <EstimateArea>
      <b>質問内容を見積もる</b>
      <Annotation>疑問点を解消するための消費ポイントについてお見積もりを行うことができます。お見積もりは、無料で行うことができます。</Annotation>
      <form>
        <InputPullDown/>
        <Input type="text" placeholder="⚪︎⚪︎⚪︎について" />
        <TextArea placeholder="詳細" />
        <Link href="/estimate/confirm">
          <Button>確認画面に進む</Button>
        </Link>
      </form>
    </EstimateArea>
  );
};

const EstimateArea = styled('div')({
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: 'center', // 中央揃え
  margin: `35px`,
});

const Annotation = styled('div')({
  color: `gray`,
  wordBreak: `normal`,
});

export default Estimate;
