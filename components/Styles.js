/*
 * Stylesheets with styled-components
 */
import styled from 'styled-components';

export const AppStyle = styled.div`
  width: 100vw;
`;

export const MainStyle = styled.div`
  display: flex;
  justify-content: center;

  overflow: hidden;
  position: relative;

  background-image: url(//source.unsplash.com/1920x1080);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  filter: brightness(0.7);

  width: 100%;
  height: 100vh;
`;

export const NotFoundMenuStyle = styled.div`
  display: grid;
  padding-top: 1rem;
  grid-gap: 0.5rem;
  grid-template-rows: 1fr;
  @media (min-width: 512px) {
    grid-template-columns: 2fr 1fr;
  }
`;
