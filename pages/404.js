import { useState, useEffect } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import useWindowSize from '../modules/hooks/useWindowSize';
import { NotFoundMenuStyle } from '../components/Styles';
import { BorderedButton, BorderlessButton } from '../components/common/Button';

const AppbarWithoutSSR = dynamic(() => import('../components/appbar/Appbar'), {
  ssr: false,
});

const PageTypo404 = styled.span`
  font-family: 'MinSans-Thin';
  font-size: 4rem;
  user-select: none;

  @media (min-width: 512px) {
    font-size: 6rem;
  }
`;

const PageDescription404 = styled.span`
  user-select: none;
`;

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
          <PageTypo404>몰?루</PageTypo404>
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
      </div>
    </>
  );
};
export default NotFound;
