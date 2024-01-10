"use client";

import React from 'react';
import { styled } from '@mui/material/styles';

const OuterDiv = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '80%',
  height: `165.93px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin:`30px auto`
});

const OrangeBack = styled('img')({
  height: `165.93px`,
  width: `322px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const GuideText = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Noto Sans JP`,
  fontWeight: `500`,
  fontSize: `14px`,
  letterSpacing: `0.7px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  width: `311px`,
  height: `24.58px`,
  position: `absolute`,
  left: `6px`,
  top: `94px`,
});

const CenterDiv = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `140px`,
  height: `32.78px`,
  left: `85px`,
  top: `56px`,
});

const Faq = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `24px`,
  letterSpacing: `1.2px`,
  textDecoration: `none`,
  lineHeight: `32px`,
  textTransform: `none`,
  width: `120px`,
  height: `32.78px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const IconDiv = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `24px`,
  height: `24.58px`,
  left: `116px`,
  top: `3px`,
});

const CircleIcon = styled('img')({
  height: `24.58px`,
  width: `24px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const RightArrowIcon = styled('img')({
  height: `7px`,
  width: `7px`,
  position: `absolute`,
  left: `9px`,
  top: `10px`,
});

function EstimateLink() {
  return (
    <OuterDiv>
      <OrangeBack
        src={'assets/images/orangeBackGround.png'}
        loading="lazy"
        alt={'Rectangle 613'}
      />
      <GuideText>{`質問およびお見積もりはこちら`}</GuideText>
      <CenterDiv>
        <Faq>{`質問する`}</Faq>
        <IconDiv>
          <CircleIcon
            src={'assets/images/circleIcon.png'}
            loading="lazy"
            alt={'Rectangle 624'}
          />
          <RightArrowIcon
            src={'assets/images/rightArrowIcon.png'}
            loading="lazy"
            alt={'Rectangle 625'}
          />
        </IconDiv>
      </CenterDiv>
    </OuterDiv>
  );
}

export default EstimateLink;
