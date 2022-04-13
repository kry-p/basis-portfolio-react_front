import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import useWindow from "../modules/hooks/useWindow";

import { BorderedButton, BorderlessButton } from "../components/button";
import { PageNotFound, PageTypoNotFound, PageDescriptionNotFound, MenuNotFound, PageStyleNotFound } from "../components/styles/NotFound";
import AppbarWithoutSSR from "../components/appbar/withoutSSR";

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
      <PageNotFound
        style={{
          height: `${height}px`,
        }}
      >
        <PageStyleNotFound>
          <PageTypoNotFound>404</PageTypoNotFound>
          <PageDescriptionNotFound>요청하신 페이지를 찾을 수 없습니다.</PageDescriptionNotFound>
          <MenuNotFound>
            <BorderlessButton
              onClick={() => {
                router.back();
              }}
            >
              이전 페이지로 돌아가기
            </BorderlessButton>
            <BorderedButton
              onClick={() => {
                router.push("/");
              }}
            >
              홈으로
            </BorderedButton>
          </MenuNotFound>
        </PageStyleNotFound>
      </PageNotFound>
    </>
  );
};
export default NotFound;
