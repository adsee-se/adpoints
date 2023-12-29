'use client';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import AdLogo from '../atoms/adLogo';
import IconsBurgerLine from '../atoms/iconsBurgerLine';
import HamburgerMenu from '../atoms/hamburgerMenu';

const Header1: any = styled('div')({
  borderRadius: '0px',
  display: 'flex',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  height: 'auto',
  width: '100%',
  zIndex: 100, // ハンバーガーメニューが開いた際に一番上に来るよう100を指定
});

const Header11: any = styled('div')({
  backgroundColor: 'rgba(246, 161, 83, 1)',
  borderRadius: '0px',
  display: 'flex',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: '12px 24px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  width: '100%',
  margin: '0px',
  overflow: 'hidden',
});

const Container: any = styled('div')({
  borderRadius: '0px',
  display: 'flex',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  width: '100%',
  height: '68px',
  margin: '0px',
});

const Content: any = styled('div')({
  borderRadius: '0px',
  display: 'flex',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  flex: '1',
  margin: '0px',
});

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleBurgerMenuClick = () => {
    // ハンバーガーメニューを表示する処理を追加する
    setIsOpen(!isOpen);
  };

  return (
    <Header1>
      <Header11>
        <Container>
          <Content>
            <AdLogo/>
            <IconsBurgerLine onBurgerIconClick={handleBurgerMenuClick} />
          </Content>
        </Container>
      </Header11>
      { /* isOpenがtrueの場合にハンバーガーメニューを表示 */ }
      {isOpen && (<HamburgerMenu/>) }
    </Header1>
  );
}

export default Header;
