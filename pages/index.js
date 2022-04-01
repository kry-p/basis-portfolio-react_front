import { useState, Fragment, useEffect } from 'react';

import AppbarWithoutSSR from '../components/appbar/withoutSSR';
import Image from '../components/image';
import Typewriter from '../components/typewriter';
import {
  Arrow,
  ArrowButtonMobile,
  ArrowButton,
} from '../components/button/Arrow';
import useWindow from '../modules/hooks/useWindow';

const featuredImageUrl = ['/resources/test2.jpg'];

const Index = () => {
  const [index, setIndex] = useState(0);
  const windowInfo = useWindow();
  const [scroll, setScroll] = useState(0);
  const [height, setHeight] = useState(undefined);

  const changeCurrentIndex = (isNext) => {
    if (isNext) {
      index >= featuredImageUrl.length - 1 ? setIndex(0) : setIndex(index + 1);
    } else {
      index <= 0 ? setIndex(featuredImageUrl.length - 1) : setIndex(index - 1);
    }
  };

  // Get current scroll value
  useEffect(() => {
    setHeight(window.innerHeight);
    setScroll(window.scrollY);
  }, [windowInfo]);

  return (
    <>
      <AppbarWithoutSSR title="BASIS" />
      <Typewriter />

      {featuredImageUrl.map((url) => (
        <Fragment key={url}>{Image(url, featuredImageUrl[index])}</Fragment>
      ))}
      <div
        style={{
          opacity: scroll > 0.2 * height ? '0' : '1',
          transition: '0.5s cubic-bezier(0.8, 0, 0.2, 1)',
        }}
      >
        <ArrowButtonMobile>
          <ArrowButton left>
            <Arrow left onClick={() => changeCurrentIndex(false)}>
              <div />
              <div />
            </Arrow>
          </ArrowButton>
          <ArrowButton right>
            <Arrow right onClick={() => changeCurrentIndex(true)}>
              <div />
              <div />
            </Arrow>
          </ArrowButton>
        </ArrowButtonMobile>
        {/* <Guide /> */}
      </div>
      {/* <MainBlock /> */}
      {/* About me */}
      {/* <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'flex-start',
          paddingLeft: '4rem',
        }}
      >
        <Fade right>
          <span
            style={{ color: 'white', fontSize: '6rem', fontFamily: 'D2Coding' }}
          >
            I am
          </span>
        </Fade>
        <Fade right>
          <span
            style={{
              color: 'red',
              fontSize: '8rem',
              fontFamily: 'D2Coding',
            }}
          >
            Front-end
          </span>
        </Fade>
        <Fade right>
          <span
            style={{ color: 'white', fontSize: '8rem', fontFamily: 'D2Coding' }}
          >
            Developer
          </span>
        </Fade>
      </div> */}
    </>
  );
};

export default Index;
