"use client";
import React, { useState } from "react";
import { FormEvent } from "react";
import { styled } from "@mui/material/styles";
import Input from "../atoms/input";
import Button from "../atoms/button";
import { useRouter } from "next/navigation";
import { Modal } from "react-responsive-modal";
import Title from "@/components/atoms/title";

export default function SignUpForm() {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastName, setLastName] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastNameKana, setLastNameKana] = useState<string>("");
  const [firstNameKana, setFirstNameKana] = useState<string>("");
  const [nickName, setNickName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const onOpenModal = () => {
    if (password === confirmPassword) {
      setOpen(true);
      setError(false);
    } else {
      setError(true);
    }
  };
  const onCloseModal = () => {
    setOpen(false);
  };

  const handelSubmit = async (e: FormEvent<HTMLFormElement>) => {
    if (nickName === null) {
      setNickName(lastName + firstName);
    }
    e.preventDefault();
    const response = await fetch(`/api/auth/register`, {
      method: "POST",
      body: JSON.stringify({
        lastName: lastName,
        firstName: firstName,
        lastNameKana: lastNameKana,
        firstNameKana: firstNameKana,
        nickName: nickName,
        email: email,
        password: password,
      }),
    });
    if (response.statusText === "OK") {
      router.push("/register/complete");
    }
  };

  return (
    <>
      <FormDiv>
        <Title title={"新規登録"} fontWeight={"900"} size={"24px"}></Title>
        <div>
          <Q11>{`*必須項目`}</Q11>
        </div>
        <FrameTwoInput>
          <Frame>
            <SmalTitle>
              <Span1>{`姓`}</Span1>
              <Span2>{`*`}</Span2>
            </SmalTitle>
            <Input
              // name="lastName"
              type="text"
              placeholder="例）山田"
              width={"142px"}
              height={"48"}
              margin="0"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Frame>
          <Frame>
            <SmalTitle>
              <Span1>{`名`}</Span1>
              <Span2>{`*`}</Span2>
            </SmalTitle>
            <Input
              // name="firstName"
              type="text"
              placeholder="例）太郎"
              width={"142px"}
              height={"48"}
              margin="0"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Frame>
        </FrameTwoInput>
        <FrameTwoInput>
          <Frame>
            <SmalTitle>
              <Span1>{`セイ`}</Span1>
              <Span2>{`*`}</Span2>
            </SmalTitle>
            <Input
              // name="lastNameKana"
              type="text"
              placeholder="例）ヤマダ"
              width={"142px"}
              height={"48"}
              margin="0"
              onChange={(e) => setLastNameKana(e.target.value)}
            />
          </Frame>
          <Frame>
            <Q4>
              <Span1>{`メイ`}</Span1>
              <Span2>{`*`}</Span2>
            </Q4>
            <Input
              // name="firstNameKana"
              type="text"
              placeholder="例）タロウ"
              width={"142px"}
              height={"48"}
              margin="0"
              onChange={(e) => setFirstNameKana(e.target.value)}
            />
          </Frame>
        </FrameTwoInput>
        <FrameInput>
          <SmalTitle>{`ニックネーム`} </SmalTitle>
          <Input
            // name="nickName"
            type="text"
            placeholder="例）タロー"
            width={"311px"}
            height={"48"}
            margin="0"
            onChange={(e) => setNickName(e.target.value)}
          />
        </FrameInput>
        <FrameInput>
          <SmalTitle>
            <Span1>{`メールアドレス`}</Span1>
            <Span2>{`*`}</Span2>
          </SmalTitle>
          <Input
            // name="email"
            type="email"
            placeholder="例）taro.yamada@test.com"
            width={"311px"}
            height={"48"}
            margin="0"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FrameInput>
        <FrameInput>
          <SmalTitle>
            <Span1>{`パスワード`}</Span1>
            <Span2>{`*`}</Span2>
          </SmalTitle>
          <Input
            // name="password"
            type="password"
            placeholder="半角英数字で8〜16文字以内"
            width={"311px"}
            height={"48"}
            margin="0"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FrameInput>
        <FrameInput>
          <SmalTitle>
            <Span1>{`パスワード確認用`}</Span1>
            <Span2>{`*`}</Span2>
          </SmalTitle>
          <Input
            // name="confirmPassword"
            type="password"
            placeholder="パスワード再入力"
            width={"311px"}
            height={"48"}
            margin="0"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FrameInput>
        <FormDiv2>
          <Q>{`利用規約`}</Q>
          <Rectangle612></Rectangle612>
        </FormDiv2>
        <Group377>
          <CheckboxOff1 />
          <Q10>{`利用規約に同意します`}</Q10>
        </Group377>
        {error ? (
          <ErrorDiv>
            <p>パスワードを確認してください。</p>
          </ErrorDiv>
        ) : undefined}
        <Button color="orange" onClick={onOpenModal}>次へ</Button>
      </FormDiv>
      <Modal open={open} onClose={onCloseModal} center>
        <ModalContainer>
          <ModalFormDiv>
            <Q11>{`下記の内容を登録します。よろしいですか？`}</Q11>
            <form onSubmit={handelSubmit}>
              <FrameTwoInput>
                <Frame>
                  <SmalTitle>
                    <Span1>{`姓`}</Span1>
                  </SmalTitle>
                  <Input
                    name="lastName"
                    type="text"
                    width={"142px"}
                    height={"48"}
                    margin="0"
                    value={lastName}
                    disabled={true}
                  />
                </Frame>
                <Frame>
                  <SmalTitle>
                    <Span1>{`名`}</Span1>
                  </SmalTitle>
                  <Input
                    name="firstName"
                    type="text"
                    width={"142px"}
                    height={"48"}
                    margin="0"
                    disabled={true}
                    value={firstName}
                  />
                </Frame>
              </FrameTwoInput>
              <FrameTwoInput>
                <Frame>
                  <SmalTitle>
                    <Span1>{`セイ`}</Span1>
                  </SmalTitle>
                  <Input
                    name="lastNameKana"
                    type="text"
                    width={"142px"}
                    height={"48"}
                    margin="0"
                    disabled={true}
                    value={lastNameKana}
                  />
                </Frame>
                <Frame>
                  <Q4>
                    <Span1>{`メイ`}</Span1>
                  </Q4>
                  <Input
                    name="firstNameKana"
                    type="text"
                    width={"142px"}
                    height={"48"}
                    margin="0"
                    disabled={true}
                    value={firstNameKana}
                  />
                </Frame>
              </FrameTwoInput>
              <FrameInput>
                <SmalTitle>{`ニックネーム`} </SmalTitle>
                <Input
                  name="nickName"
                  type="text"
                  width={"311px"}
                  height={"48"}
                  margin="0"
                  disabled={true}
                  value={nickName ? nickName : lastName + firstName}
                  placeholder={nickName ? "" : lastName + firstName + "さん"}
                />
              </FrameInput>
              <FrameInput>
                <SmalTitle>
                  <Span1>{`メールアドレス`}</Span1>
                </SmalTitle>
                <Input
                  name="email"
                  type="email"
                  width={"311px"}
                  height={"48"}
                  margin="0"
                  disabled={true}
                  value={email}
                />
              </FrameInput>
              <FrameInput>
                <SmalTitle>
                  <Span1>{`パスワード`}</Span1>
                </SmalTitle>
                <Input
                  name="password"
                  type="password"
                  width={"311px"}
                  height={"48"}
                  margin="0"
                  disabled={true}
                  value={password}
                />
              </FrameInput>
              <Button color="orange">新規登録する</Button>
            </form>
            <Button color="gray" onClick={onCloseModal}>
              戻る
            </Button>
          </ModalFormDiv>
        </ModalContainer>
      </Modal>
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
});

const ModalFormDiv: any = styled("div")({
  borderRadius: `0px`,
  display: `flex`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  padding: `0px`,
  boxSizing: `border-box`,
});

const FormDiv2: any = styled("div")({
  borderRadius: `0px`,
  display: `flex`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  padding: `0px`,
  boxSizing: `border-box`,
  marginTop: 30,
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

const SmalTitle: any = styled("div")({
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

const ModalContainer: any = styled("div")({
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  height: `66vh`,
});

const ErrorDiv = styled("div")({
  textAlign: "center",
  marginTop: 20,
  marginBottom: 20,
  color: "red",
  textDecoration: "none",
  fontSize: 12,
});
