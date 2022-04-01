import styled from 'styled-components';
import palette from '../../modules/palette';

export const DRAWER_WIDTH = 270;

export const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  z-index: 2;
`;

export const AppBar = styled.div`
  width: 100%;
  height: 6rem;
  position: absolute;

  z-index: 1;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .left {
    padding-left: 2rem;
  }

  .right {
    padding-right: 2rem;
  }

  @media (min-width: 512px) {
    .left {
      padding-left: 2rem;
    }

    .right {
      padding-right: 2rem;
    }
  }

  // 로고 및 메뉴 버튼 위치 조정
  @media (min-width: 1024px) {
    .left {
      padding-left: calc((100vw - 1024px) / 3 + 2rem);
    }

    .right {
      padding-right: calc((100vw - 1024px) / 3 + 2rem);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Drawer = styled.div`
  position: fixed;
  overflow: hidden;
  top: 0rem;
  right: -270px;

  width: 270px;
  height: 100vh;

  transition: 0.5s cubic-bezier(0.8, 0, 0.2, 1);

  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 4;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  padding-top: 6.5rem;
`;

export const MenuItem = styled.button`
  border: 0px solid black;
  font-family: 'XTypewriter-Bold';
  color: ${palette.gray[5]};
  letter-spacing: 0.1rem;
  background: rgba(0, 0, 0, 0);

  font-size: large;

  transition: color 0.25s;
  user-select: none;

  padding-bottom: 3rem;

  &:hover {
    color: white;
  }
`;
