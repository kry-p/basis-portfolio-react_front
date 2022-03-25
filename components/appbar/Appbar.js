/*
 * Appbar
 * note: menu button does not implemented
 */
import router from 'next/router';
import React, { useState } from 'react';
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
  height: 6rem;
  position: absolute;

  background: linear-gradient(rgba(50, 50, 50, 0.5), rgba(0, 0, 0, 0));
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

  transition: 0.5s cubic-bezier(0.8, 0, 0.2, 1);

  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 4;
`;

const MainMenu = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  padding-top: 6rem;
`;

const MenuItem = styled.button`
  border: 0px solid black;
  font-family: 'XTypewriter-Regular';
  color: ${palette.gray[5]};
  letter-spacing: 0.1rem;
  background: rgba(0, 0, 0, 0);

  font-size: medium;

  transition: color 0.25s;
  user-select: none;

  padding-bottom: 1rem;

  &:hover {
    color: white;
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
              <MenuItem item onClick={() => router.push('/')}>
                Home
              </MenuItem>
              <MenuItem item onClick={() => router.push('#')}>
                About me
              </MenuItem>
              <MenuItem item onClick={() => router.push('#')}>
                Gallery
              </MenuItem>
              <MenuItem item onClick={() => router.push('#')}>
                Contact
              </MenuItem>
            </MainMenu>
          </Drawer>
        </div>
      </AppBar>
    </HeaderBlock>
  );
};

export default AppbarMain;
