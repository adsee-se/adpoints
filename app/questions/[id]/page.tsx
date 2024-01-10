"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@/components/atoms/button";
import ConfirmFrame from "@/components/atoms/confirmFrame";

const Frame1241 = async () => {
  return (
    <Frame12411>
      <Button size="middle">依頼する</Button>
      <Button size="middle">戻る</Button>
      <TheHarderYouWork>{`注文期限○/○まで`}</TheHarderYouWork>
      <Group388>
        <Q88888P>
          <Q88888PSpan1>{`88,888`}</Q88888PSpan1>
          <Q88888PSpan2>{`p`}</Q88888PSpan2>
        </Q88888P>
        <Q>{`消費ポイント`}</Q>
      </Group388>
      <ConfirmFrame />
      <ConfirmFrame />
      <ConfirmFrame />
      <TheHarderYouWork1>
        {`質問内容と消費ポイントをご確認の上、ご依頼ください。`}
      </TheHarderYouWork1>
      <Faq>{`注文内容を確認する`}</Faq>
    </Frame12411>
  );
};

const Frame12411 = styled("div")({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: "100%",
  height: `656px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const TheHarderYouWork = styled("div")(({ theme }) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(149, 161, 187, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  width: `311px`,
  height: `45px`,
  position: `absolute`,
  left: `0px`,
  top: `472px`,
}));

const Group388 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `233px`,
  height: `26.63px`,
  left: `38px`,
  top: `431px`,
});

const Q88888PSpan1 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `30px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
});

const Q88888PSpan2 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
});

const Q88888P = styled("div")({
  textAlign: `right`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `nullpx`,
  letterSpacing: `NaNpx`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  width: `111px`,
  height: `24.58px`,
  position: `absolute`,
  left: `122px`,
  top: `0px`,
});

const Q = styled("div")(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  width: `84px`,
  height: `24.58px`,
  position: `absolute`,
  left: `0px`,
  top: `2px`,
}));

const TheHarderYouWork1 = styled("div")(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(149, 161, 187, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  width: `311px`,
  position: `absolute`,
  left: `0px`,
  top: `58px`,
}));

const Faq = styled("div")(({ theme }) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(54, 57, 64, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `32px`,
  textTransform: `none`,
  width: `311px`,
  height: `31px`,
  position: `absolute`,
  left: `-1px`,
  top: `8px`,
}));

export default Frame1241;
