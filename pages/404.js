import { useState, useEffect } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import useWindowSize from '../modules/hooks/useWindowSize';
import { NotFoundMenuStyle } from '../components/Styles';
import { BorderedButton, BorderlessButton } from '../components/common/Button';

import { Page404, PageTypo404, PageDescription404 } from '../components/Styles';

const AppbarWithoutSSR = dynamic(() => import('../components/appbar/Appbar'), {
  ssr: false,
});

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
      <Page404
        style={{
          height: `${height}px`,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backdropFilter: 'brightness(50%)',
            WebkitBackdropFilter: 'brightness(50%)',
            width: '100%',
            height: '100%',
          }}
        >
          <PageTypo404>404</PageTypo404>
          <PageDescription404>
            요청하신 페이지를 찾을 수 없습니다.
          </PageDescription404>
          <NotFoundMenuStyle>
            <BorderlessButton
              onClick={() => {
                router.back();
              }}
            >
              이전 페이지로 돌아가기
            </BorderlessButton>
            <BorderedButton
              onClick={() => {
                router.push('/');
              }}
            >
              홈으로
            </BorderedButton>
          </NotFoundMenuStyle>
        </div>
      </Page404>
    </>
  );
};
export default NotFound;
