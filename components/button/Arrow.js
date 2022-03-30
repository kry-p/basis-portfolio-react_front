import styled, { css } from 'styled-components';
import palette from '../../modules/palette';

export const Arrow = styled.div`
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

  ${(props) =>
    props.left &&
    css`
      transform: rotate(45deg);
    `}

  ${(props) =>
    props.right &&
    css`
      transform: rotate(-135deg);
    `}
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: calc(50vh - 0.75rem);
  z-index: 1;
  background-color: rgba(0, 0, 0, 0);
  border: rgba(0, 0, 0, 0);
  padding: 0.5rem 0.5rem;

  @media (min-width: 512px) {
    top: calc(50vh - 1rem);
  }

  ${(props) =>
    props.left &&
    css`
      left: 1rem;

      @media (min-width: 1024px) {
        top: calc(50vh - 1.25rem);
        left: calc((100vw - 1024px) / 3 + 0.5rem);
      }
    `}

  ${(props) =>
    props.right &&
    css`
      right: 1rem;

      @media (min-width: 1024px) {
        top: calc(50vh - 1.25rem);
        right: calc((100vw - 1024px) / 3 + 0.5rem);
      }
    `}
`;
