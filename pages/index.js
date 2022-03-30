import { useState, Fragment } from 'react';

import AppbarWithoutSSR from '../components/appbar/withoutSSR';
import Image from '../components/image';
import Typewriter from '../components/typewriter';
import { Arrow, ArrowButton } from '../components/button/Arrow';

const featuredImageUrl = [
  '/resources/test1.jpg',
  '/resources/test2.jpg',
  '/resources/test3.jpg',
];

const Index = () => {
  const [index, setIndex] = useState(0);
  const changeCurrentIndex = (isNext) => {
    if (isNext) {
      index >= featuredImageUrl.length - 1 ? setIndex(0) : setIndex(index + 1);
    } else {
      index <= 0 ? setIndex(featuredImageUrl.length - 1) : setIndex(index - 1);
    }
  };

  return (
    <>
      <AppbarWithoutSSR title="BASIS" />
      <Typewriter />
      {featuredImageUrl.map((url) => (
        <Fragment key={url}>{Image(url, featuredImageUrl[index])}</Fragment>
      ))}
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
    </>
  );
};

export default Index;
