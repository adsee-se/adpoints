'use client';
import Input from "../../components/atoms/input";
import TextArea from "../../components/atoms/textArea";
import Button from "../../components/atoms/button"
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router'; // TODO 一時追加したが不要な可能性あり

const Estimate = () => {
  const router = useRouter(); // TODO 一時追加したが不要な可能性あり
  // const { category, title, detail } = router.state; // TODO 一時追加したが不要な可能性あり
  return (
    <EstimateArea>
      <b>質問内容のご確認</b>
      <Annotation>下記質問内容をご確認頂き、よろしければ送信ボタンを押してください。</Annotation>
      <form>
        <Input type="text" value={'カテゴリーテスト'} readOnly/>
        <Input type="text" value={'titleテスト'} readOnly/>
        <TextArea value={'質問内容詳細テスト'} readOnly/>
        <Link href="/estimate/complete">
          <Button>送信</Button>
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
