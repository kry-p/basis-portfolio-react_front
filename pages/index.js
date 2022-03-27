import { useState, Fragment } from 'react';
import styled from 'styled-components';

import { PageMain } from '../components/Styles';
import { IconButton } from '../components/button';
import palette from '../modules/palette';
import AppbarWithoutSSR from '../components/appbar/withoutSSR';

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  filter: brightness(80%);
  background-size: cover;
  background-position: center;

  transition: opacity 0.5s ease-out;
`;

const Image = (url, currentUrl) => {
  return url === currentUrl ? (
    <ImageContainer
      style={{
        background: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  ) : (
    <ImageContainer
      style={{
        background: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: '0',
      }}
    />
  );
};

const featuredImageUrl = [
  '/resources/test1.jpg',
  '/resources/test2.jpg',
  '/resources/test3.jpg',
];

const IconButtonLeftContainer = styled.div`
  position: absolute;
  top: calc(50vh - 1.5rem);
  left: 2rem;

  @media (min-width: 1024px) {
    left: calc((100vw - 1024px) / 3 + 2rem);
  }
`;
const IconButtonRightContainer = styled.div`
  position: absolute;
  top: calc(50vh - 1.5rem);
  right: 2rem;

  @media (min-width: 1024px) {
    right: calc((100vw - 1024px) / 3 + 2rem);
  }
`;

const Arrow = styled.div`
  div {
    background: ${palette.gray[3]};
  }

  div:first-child {
    height: 1.35rem;
    width: 0.15rem;
  }
  div:nth-child(2) {
    height: 0.15rem;
    width: 1.5rem;
  }

  @media (min-width: 512px) {
    div:first-child {
      height: 1.85rem;
      width: 0.15rem;
    }
    div:nth-child(2) {
      height: 0.15rem;
      width: 2rem;
    }
  }

  @media (min-width: 1024px) {
    div:first-child {
      height: 2.35rem;
      width: 0.15rem;
    }
    div:nth-child(2) {
      height: 0.15rem;
      width: 2.5rem;
    }
  }
`;

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
      <PageMain />
      {featuredImageUrl.map((url) => (
        <Fragment key={url}>{Image(url, featuredImageUrl[index])}</Fragment>
      ))}
      <IconButtonLeftContainer>
        <IconButton>
          <Arrow
            style={{ transform: 'rotate(45deg)' }}
            onClick={() => changeCurrentIndex(false)}
          >
            <div />
            <div />
          </Arrow>
        </IconButton>
      </IconButtonLeftContainer>
      <IconButtonRightContainer>
        <IconButton>
          <Arrow
            style={{ transform: 'rotate(-135deg)' }}
            onClick={() => changeCurrentIndex(true)}
          >
            <div />
            <div />
          </Arrow>
        </IconButton>
      </IconButtonRightContainer>
    </>
  );
};
export default Index;
