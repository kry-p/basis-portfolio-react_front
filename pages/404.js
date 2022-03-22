import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { Typography as MuiTypography, Button } from '@mui/material';
import dynamic from 'next/dynamic';

import { styled as muiStyled } from '@mui/material/styles';

import useWindowSize from '../modules/hooks/useWindowSize';

import { NotFoundMenuStyle } from '../components/Styles';

const AppbarWithoutSSR = dynamic(() => import('../components/appbar/Appbar'), {
  ssr: false,
});

const Typo404 = muiStyled(
  MuiTypography,
  {},
)(() => ({
  fontFamily: 'MinSans-Thin',
  fontSize: '4rem',
  '@media (min-width:512px)': {
    // eslint-disable-line no-useless-computed-key
    fontSize: '6rem',
  },
}));
const NotFound = () => {
  const router = useRouter();
  const [height, setHeight] = useState(undefined);
  const windowSize = useWindowSize();

  // For Server-side Rendering
  useEffect(() => {
    setHeight(window.innerHeight);
  }, [windowSize]);

  return (
    <>
      <AppbarWithoutSSR />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          overflow: 'hidden',
          position: 'relative',

          width: '100%',
          height: `${height}px`,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Typo404>몰?루</Typo404>
          <MuiTypography>요청하신 페이지를 찾을 수 없습니다.</MuiTypography>
          <NotFoundMenuStyle>
            <Button
              variant="contained"
              onClick={() => {
                router.back();
              }}
            >
              이전 페이지로 돌아가기
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                router.push('/');
              }}
            >
              홈으로
            </Button>
          </NotFoundMenuStyle>
        </div>
      </div>
    </>
  );
};
export default NotFound;
