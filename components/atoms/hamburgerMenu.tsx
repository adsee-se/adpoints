'use client';
import React from 'react';
import { styled } from '@mui/material/styles';

const HamburgerMenu1: any = styled('div')(() => ({
  backgroundColor: 'rgba(246, 161, 83, 1)',
  alignSelf: 'stretch',
  width: '100%',
  position: 'absolute',
  top: '100%',
  borderRadius: '0px',
  display: 'flex',
  isolation: 'isolate',
  flexDirection: 'row',
  height: '590px', // コンテンツ部分がハンバーガーメニューで隠れる高さに指定
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  visibility: 'visible',
  opacity: 1,
}));

const Q: any = styled('div')({
  textAlign: 'center',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(0, 0, 0, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: '24px',
  letterSpacing: '0px',
  textDecoration: 'none',
  lineHeight: '32px',
  textTransform: 'none',
  position: 'absolute',
  left: '135px',
  top: '75px',
});

const Home: any = styled('div')({
  textAlign: 'center',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(0, 0, 0, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: '24px',
  letterSpacing: '0px',
  textDecoration: 'none',
  lineHeight: '32px',
  textTransform: 'none',
  position: 'absolute',
  left: '159px',
  top: '159px',
});

const Q1: any = styled('div')({
  textAlign: 'center',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(0, 0, 0, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: '24px',
  letterSpacing: '0px',
  textDecoration: 'none',
  lineHeight: '32px',
  textTransform: 'none',
  position: 'absolute',
  left: '99px',
  top: '220px',
});

const Q2: any = styled('div')({
  textAlign: 'center',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(0, 0, 0, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: '24px',
  letterSpacing: '0px',
  textDecoration: 'none',
  lineHeight: '32px',
  textTransform: 'none',
  position: 'absolute',
  left: '147px',
  top: '282px',
});

const Box1: any = styled('div')({
  textAlign: 'center',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(0, 0, 0, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: '24px',
  letterSpacing: '0px',
  textDecoration: 'none',
  lineHeight: '32px',
  textTransform: 'none',
  position: 'absolute',
  left: '146px',
  top: '346px',
});

const Line4: any = styled('div')({
  border: '3px solid rgba(255, 255, 255, 1)',
  width: '390px',
  height: '0px',
  position: 'absolute',
  left: '0px',
  top: '134px',
});

const Line5: any = styled('img')({
  height: 'auto',
  width: '183px',
  position: 'absolute',
  left: '103px',
  top: '206px',
});

const Line6: any = styled('img')({
  height: 'auto',
  width: '183px',
  position: 'absolute',
  left: '103px',
  top: '268px',
});

const Q3: any = styled('div')({
  textAlign: 'center',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(0, 0, 0, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: '24px',
  letterSpacing: '0px',
  textDecoration: 'none',
  lineHeight: '32px',
  textTransform: 'none',
  position: 'absolute',
  left: '171px',
  top: '410px',
});


const Line7: any = styled('img')({
  height: 'auto',
  width: '183px',
  position: 'absolute',
  left: '103px',
  top: '330px',
});

const Line8: any = styled('img')({
  height: 'auto',
  width: '183px',
  position: 'absolute',
  left: '103px',
  top: '394px',
});

const Line9: any = styled('img')({
  height: 'auto',
  width: '183px',
  position: 'absolute',
  left: '103px',
  top: '458px',
});

export interface HamburgerMenuProps {
  isOpen: boolean;
};

const  HamburgerMenu = () => {
  return (
    <HamburgerMenu1>
      {/* TODO 以下はログインしているユーザーの名前を表示するように修正 */}
      <Q>{'タローさん'}</Q>
      <Line4 />
      <Line5
        src={'assets/images/HamburgerMenu/Line_5.png'}
        loading="lazy"
        alt={'Line 5'}
      />
      {/* 全てのリンクを仮でルートに設定 */}
      <a href="/">
        <Home>{'HOME'}</Home>
      </a>
      <Line6
        src={'assets/images/HamburgerMenu/Line_6.png'}
        loading="lazy"
        alt={'Line 6'}
      />
      <a href="/">
        <Q1>{'ポイントチャージ'}</Q1>
      </a>
      <Line7
        src={'assets/images/HamburgerMenu/Line_7.png'}
        loading="lazy"
        alt={'Line 7'}
      />
      <a href="/">
        <Q2>{'質問する'}</Q2>
      </a>
      <Line8
        src={'assets/images/HamburgerMenu/Line_8.png'}
        loading="lazy"
        alt={'Line 8'}
      />
      <a href="/">
        <Box1>{'返信BOX'}</Box1>
      </a>
      <Line9
        src={'assets/images/HamburgerMenu/Line_9.png'}
        loading="lazy"
        alt={'Line 9'}
      />
      <a href="/">
        <Q3>{'設定'}</Q3>
      </a>
    </HamburgerMenu1>
  );
}

export default HamburgerMenu;
