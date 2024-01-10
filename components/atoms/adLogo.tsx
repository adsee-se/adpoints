import React from 'react';
import { styled } from '@mui/material/styles';

const AdLogo1: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: 'auto',
  width: 'fit-content',
});

const Adseed011: any = styled('img')({
  height: `40px`,
  width: `40px`,
  objectFit: `cover`,
  margin: `0px`,
});

const Q: any = styled('div')( ({
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
  margin: `0px 0px 0px 8px`,
}));

export interface AdLogoProps {
  className?: any;
};

function AdLogo(props: AdLogoProps): JSX.Element {
  return (
    <AdLogo1 className={props.className}>
        <Adseed011
          src={`/assets/images/adlogo_adseed_01_1.png`}
          loading="lazy"
          alt={'adseed_01 1'}
        />
        <Q>{`adpoints`}</Q>
    </AdLogo1>
  );
}

export default AdLogo;
