import styled, { css } from 'styled-components';
import palette from '../../modules/palette';

export const PageAbout = styled.div`
  font-family: MinSans-Thin;
  background: rgb(255, 255, 255);
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.oddPage &&
    css`
      background: rgb(0, 0, 0);
    `}
`;

export const Grid = styled.div`
  height: 200vh;
  display: grid;
  align-items: center;
  overflow: hidden;

  ${(props) =>
    props.single &&
    css`
      height: 100vh;
      grid-template-columns: 1fr;
      width: calc(0.5 * (100vw - 1024px) + 1024px);
    `}

  ${(props) =>
    props.double &&
    css`
      @media (min-width: 1024px) {
        height: 100vh;
        grid-template-columns: 1fr 1fr;
        width: 1024px;
      }
    `}
`;

const Half = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;

export const Left = styled(Half)`
  align-items: flex-start;
  padding-left: 1rem;
  @media (min-width: 384px) {
    padding-left: 1.5rem;
  }
  @media (min-width: 512px) {
    padding-left: 2rem;
  }
`;

export const Right = styled(Half)`
  align-items: flex-end;
  padding-right: 1rem;
  @media (min-width: 384px) {
    padding-right: 1.5rem;
  }
  @media (min-width: 512px) {
    padding-right: 2rem;
  }
`;

export const Typo = styled.span`
  font-size: 3rem;

  @media (min-width: 384px) {
    font-size: 4rem;
  }
  @media (min-width: 512px) {
    font-size: 6rem;
  }

  ${(props) =>
    props.ownName &&
    css`
      line-height: 80%;

      @media (min-width: 768px) {
        font-size: 10rem;
      }
    `}
  ${(props) =>
    props.oddPage &&
    css`
      color: white;
    `}
    ${(props) =>
    props.small &&
    css`
      color: white;
    `}
`;

export const AboutArticle = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  width: 220px;
  @media (min-width: 512px) {
    width: 384px;
  }
`;

export const AboutArticleTitle = styled.h2`
  line-height: 0%;
  @media (max-width: 512px) {
    font-size: 1.1rem;
  }
`;

export const AboutArticleDescription = styled.article`
  text-align: end;
  padding-bottom: 1rem;
  @media (max-width: 512px) {
    font-size: 0.85rem;
    padding-bottom: 0.2rem;
  }
`;

export const TechStackArticle = styled.div`
  display: grid;
  justify-content: center;
  transition: all 0.5s ease-in-out;

  gap: 20px;

  @media (max-width: 511px) {
    grid-template-rows: repeat(2, minmax(12rem, auto));
  }

  @media (min-width: 512px) {
    grid-template-columns: repeat(2, minmax(12rem, auto));
  }

  @media (min-width: 768px) {
    gap: 4rem;
  }

  @media (min-width: 1024px) {
    gap: 6rem;
  }
`;

export const CommonArticleTitle = styled.div`
  border-bottom: 1px solid black;
  transition: all 0.5s ease-in-out;
  font-size: 1.2rem;

  @media (min-width: 384px) {
    font-size: 1.4rem;
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }

  ${(props) =>
    props.small &&
    css`
      width: 8rem;

      @media (min-width: 384px) {
        width: 10rem;
      }

      @media (min-width: 512px) {
        width: 12rem;
      }

      @media (min-width: 768px) {
        width: 14rem;
      }
    `}

  ${(props) =>
    props.big &&
    css`
      width: 12rem;

      @media (min-width: 384px) {
        width: 15rem;
      }

      @media (min-width: 512px) {
        width: 18rem;
      }

      @media (min-width: 768px) {
        width: 24rem;
      }
    `}
`;
export const TechStackArticleDescription = styled.div`
  font-size: 2rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;
