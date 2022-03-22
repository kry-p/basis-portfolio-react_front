/*
 * Stylesheets with styled-components
 */
import styled, { css } from 'styled-components';
import { red } from '@mui/material/colors';

export const AppStyle = styled.div`
  width: 100vw;
`;

export const TypoStyle = styled.div`
  text-align: center;
  padding: 0.5rem;
  font-size: 1rem;

  ${(props) =>
    props.description &&
    css`
      font-size: 0.75rem;
    `}

  ${(props) =>
    props.error &&
    css`
      color: ${red[500]};
      font-size: 0.875rem;
    `}
`;

export const ButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

export const FormStyle = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  width: 256px;

  @media (min-width: 512px) {
    width: 512px;
    grid-template-columns: repeat(2, 1fr);
  }

  .item {
    padding: 1rem;
  }
`;

export const MenuStyle = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: center;

  .item {
    margin: 0 auto;
  }
`;

export const MainStyle = styled.div`
  display: flex;
  justify-content: center;

  overflow: hidden;
  position: relative;

  width: 100%;
  height: 100%;
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
