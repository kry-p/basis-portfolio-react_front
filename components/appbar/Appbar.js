/*
 * Appbar
 * note: menu button does not implemented
 */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { LogoButton, Burger } from '../common/Button';
import palette from '../../modules/palette';

const DRAWER_WIDTH = 270;
const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  z-index: 2;
`;

const AppBar = styled.div`
  width: 100%;
  height: 4rem;
  position: absolute;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
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

  @media (min-width: 1024px) {
    .left {
      padding-left: calc((100vw - 1024px) / 2 + 2rem);
    }

    .right {
      padding-right: calc((100vw - 1024px) / 2 + 2rem);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Drawer = styled.div`
  position: fixed;
  overflow: hidden;
  top: 0rem;
  right: -270px;

  width: 270px;
  height: 100vh;

  transition: 0.3s ease-in-out;

  background-color: black;
  z-index: 1;
`;

const MainMenu = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  padding-top: 4rem;

  .item {
    padding: 1rem;
  }
`;

const MenuItem = styled.button`
  border: 0px solid black;
  font-family: 'XTypewriter-Regular';
  color: white;
  letter-spacing: 0.2rem;
  background: rgba(0, 0, 0, 1);

  transition: color 0.25s;
  user-select: none;

  &:hover {
    color: ${palette.gray[4]};
  }
`;

const AppbarMain = () => {
  const [xPosition, setXPosition] = useState(0);
  const toggleMenuOpen = () => {
    if (open) setXPosition(0);
    else setXPosition(-DRAWER_WIDTH);
  };
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
    toggleMenuOpen();
  };

  return (
    <HeaderBlock>
      <AppBar>
        <div className="left">
          <LogoButton />
        </div>
        <div className="right">
          <Burger open={open} setOpen={toggleOpen} />
          <Drawer
            style={{
              transform: `translatex(${xPosition}px)`,
            }}
          >
            <MainMenu>
              <MenuItem>
                <h3>Home</h3>
              </MenuItem>
            </MainMenu>
          </Drawer>
        </div>
      </AppBar>
    </HeaderBlock>
  );
};

export default AppbarMain;
