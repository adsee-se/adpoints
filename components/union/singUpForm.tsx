"use client";
import React from "react";
import { FormEvent } from "react";
import { styled } from "@mui/material/styles";
import Input from "../atoms/input";
import Button from "../atoms/button";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const handelSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    const response = await fetch(`/api/auth/register`, {
      method: "POST",
      body: JSON.stringify({
        lastName: formData.get("lastName"),
        firstName: formData.get("firstName"),
        lastNameKana: formData.get("lastNameKana"),
        firstNameKana: formData.get("firstNameKana"),
        nickName: formData.get("nickName"),
        email: formData.get("email"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
      }),
    });
    if (response.statusText === "OK") {
      router.push("/login");
    }
    console.log({ response });

  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <FormDiv>
          <Q>{`新規登録`}</Q>
          <div>
            <Q11>{`*必須項目`}</Q11>
          </div>
          <FrameTwoInput>
            <Frame>
              <Title>
                <Span1>{`姓`}</Span1>
                <Span2>{`*`}</Span2>
              </Title>
              <Input
                name="lastName"
                type="text"
                placeholder="例）山田"
                width={"142px"}
                height={"48"}
                margin="0"
              />
            </Frame>
            <Frame>
              <Title>
                <Span1>{`名`}</Span1>
                <Span2>{`*`}</Span2>
              </Title>
              <Input
                name="firstName"
                type="text"
                placeholder="例）太郎"
                width={"142px"}
                height={"48"}
                margin="0"
              />
            </Frame>
          </FrameTwoInput>
          <FrameTwoInput>
            <Frame>
              <Title>
                <Span1>{`セイ`}</Span1>
                <Span2>{`*`}</Span2>
              </Title>
              <Input
                name="lastNameKana"
                type="text"
                placeholder="例）ヤマダ"
                width={"142px"}
                height={"48"}
                margin="0"
              />
            </Frame>
            <Frame>
              <Q4>
                <Span1>{`メイ`}</Span1>
                <Span2>{`*`}</Span2>
              </Q4>
              <Input
                name="firstNameKana"
                type="text"
                placeholder="例）タロウ"
                width={"142px"}
                height={"48"}
                margin="0"
              />
            </Frame>
          </FrameTwoInput>
          <FrameInput>
            <Title>{`ニックネーム`} </Title>
            <Input
              name="nickName"
              type="text"
              placeholder="例）タロー"
              width={"311px"}
              height={"48"}
              margin="0"
            />
          </FrameInput>
          <FrameInput>
            <Title>
              <Span1>{`メールアドレス`}</Span1>
              <Span2>{`*`}</Span2>
            </Title>
            <Input
              name="email"
              type="email"
              placeholder="例）taro.yamada@test.com"
              width={"311px"}
              height={"48"}
              margin="0"
            />
          </FrameInput>
          <FrameInput>
            <Title>
              <Span1>{`パスワード`}</Span1>
              <Span2>{`*`}</Span2>
            </Title>
            <Input
              name="password"
              type="password"
              placeholder="半角英数字で8〜16文字以内"
              width={"311px"}
              height={"48"}
              margin="0"
            />
          </FrameInput>
          <FrameInput>
            <Title>
              <Span1>{`パスワード確認用`}</Span1>
              <Span2>{`*`}</Span2>
            </Title>
            <Input
              name="confirmPassword"
              type="password"
              placeholder="パスワードを再入力"
              width={"311px"}
              height={"48"}
              margin="0"
            />
          </FrameInput>
          <FormDiv>
            <Q>{`利用規約`}</Q>
            <Rectangle612></Rectangle612>
          </FormDiv>
          <Group377>
            <CheckboxOff1 />
            <Q10>{`利用規約に同意します`}</Q10>
          </Group377>
          <Button>次へ</Button>
        </FormDiv>
      </form>
    </>
  );
}

const FormDiv: any = styled("div")({
  borderRadius: `0px`,
  display: `flex`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  padding: `0px`,
  boxSizing: `border-box`,
  marginTop: 100,
});

const Q: any = styled("div")(({ theme }: any) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `32px`,
  textTransform: `none`,
}));

const FrameTwoInput: any = styled("div")({
  borderRadius: `0px`,
  display: `flex`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-around`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `311px`,
  height: `80px`,
});

const Frame: any = styled("div")({
  borderRadius: `0px`,
  display: `flex`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `space-around`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `80px`,
});

const Span1: any = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `32px`,
  textTransform: `none`,
});

const Span2: any = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `32px`,
  textTransform: `none`,
});

const Title: any = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `32px`,
  textTransform: `none`,
});

const Q4: any = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `32px`,
  textTransform: `none`,
});

const FrameInput: any = styled("div")({
  borderRadius: `0px`,
  display: `flex`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `311px`,
  height: `80px`,
});

const Rectangle612: any = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(217, 207, 207, 1)`,
  boxSizing: `border-box`,
  borderRadius: `0px`,
  width: `311px`,
  height: `360px`,
});

const Group377: any = styled("div")({
  display: `flex`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `225px`,
  height: `32px`,
});

const CheckboxOff1: any = styled("input")(({ theme }: any) => ({
  width: `24px`,
  height: `24px`,
  position: `absolute`,
  left: `0px`,
  top: `4px`,
}));

const Q10: any = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `32px`,
  textTransform: `none`,
});

const Q11: any = styled("div")(({ theme }: any) => ({
  textAlign: `start`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 1, 1, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
}));
