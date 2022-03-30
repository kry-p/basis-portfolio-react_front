/*
 * Stylesheets with styled-components
 */
import styled from 'styled-components';
import palette from '../modules/palette';

export const AppStyle = styled.div`
  width: 100vw;
`;

export const PageMain = styled.div`
  width: 100%;
`;

export const Page404 = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;

  background: url(/resources/404.jpg);
  background-size: cover;
  background-position: center;

  width: 100%;
`;

export const PageTypo404 = styled.span`
  font-family: 'XTypewriter-Regular';
  font-size: 8rem;
  user-select: none;
  color: ${palette.gray[3]};

  @media (min-width: 512px) {
    font-size: 12rem;
  }
`;

export const PageStyle404 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  backdrop-filter: brightness(50%);
  -webkit-backdrop-filter: brightness(50%);

  width: 100%;
  height: 100%;
`;

export const PageDescription404 = styled.span`
  user-select: none;
  color: ${palette.gray[3]};
`;

export const NotFoundMenu = styled.div`
  display: grid;
  padding-top: 1rem;
  grid-gap: 0.5rem;
  grid-template-rows: 1fr;
  @media (min-width: 512px) {
    grid-template-columns: 2fr 1fr;
  }
`;
