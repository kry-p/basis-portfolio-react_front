import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import useWindow from '../modules/hooks/useWindow';

import { BorderedButton, BorderlessButton } from '../components/button';
import {
  Page404,
  PageStyle404,
  PageTypo404,
  PageDescription404,
  NotFoundMenu,
} from '../components/Styles';
import AppbarWithoutSSR from '../components/appbar/withoutSSR';

const NotFound = () => {
  const router = useRouter();
  const [height, setHeight] = useState(undefined);
  const windowInfo = useWindow();

  // For Server-side Rendering
  useEffect(() => {
    setHeight(window.innerHeight);
  }, [windowInfo]);

  return (
    <>
      <AppbarWithoutSSR title="BASIS" />
      <Page404
        style={{
          height: `${height}px`,
        }}
      >
        <PageStyle404>
          <PageTypo404>404</PageTypo404>
          <PageDescription404>
            요청하신 페이지를 찾을 수 없습니다.
          </PageDescription404>
          <NotFoundMenu>
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
          </NotFoundMenu>
        </PageStyle404>
      </Page404>
    </>
  );
};
export default NotFound;
