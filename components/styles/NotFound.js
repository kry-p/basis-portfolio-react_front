import styled from "styled-components";
import palette from "../../modules/palette";

export const PageNotFound = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;

  background: url(/resources/404.jpg);
  background-size: cover;
  background-position: center;

  width: 100%;
`;

export const PageTypoNotFound = styled.span`
  font-family: "MinSans-Thin";
  font-size: 8rem;
  user-select: none;
  color: ${palette.gray[3]};

  @media (min-width: 512px) {
    font-size: 12rem;
  }
`;

export const MenuNotFound = styled.div`
  display: grid;
  padding-top: 1rem;
  grid-gap: 0.5rem;
  grid-template-rows: 1fr;
  @media (min-width: 512px) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const PageStyleNotFound = styled.div`
  font-family: "MinSans-Medium";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  backdrop-filter: brightness(50%);
  -webkit-backdrop-filter: brightness(50%);

  width: 100%;
  height: 100%;
`;

export const PageDescriptionNotFound = styled.span`
  user-select: none;
  color: ${palette.gray[3]};
`;
