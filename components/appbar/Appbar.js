/*
 * Appbar
 * note: menu button does not implemented
 */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Material UI components
import { MdDragHandle as DragHandle, MdClose } from 'react-icons/md';

import { IconButton, LogoButton } from '../common/Button';

const DRAWER_WIDTH = 270;
const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  z-index: 2;
`;

const AppBar = styled.div`
  width: 100%;
  height: 3.5rem;
  position: absolute;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  z-index: 1;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .left {
    padding-left: 1.5rem;
  }

  .right {
    padding-right: 1.5rem;
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
      padding-left: calc((100vw - 1024px) / 2 + 2.5rem);
    }

    .right {
      padding-right: calc((100vw - 1024px) / 2 + 2.5rem);
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

const AppbarMain = (props) => {
  const [xPosition, setXPosition] = useState();
  const toggleMenuOpen = () => {
    if (xPosition != 0) setXPosition(0);
    else setXPosition(-DRAWER_WIDTH);
  };

  return (
    <HeaderBlock>
      <AppBar>
        <div className="left">
          <LogoButton />
        </div>
        <div className="right">
          <div className="portrait">
            <IconButton
              onClick={() => {
                toggleMenuOpen();
              }}
            >
              <DragHandle size="32" />
            </IconButton>
            <Drawer
              style={{
                transform: `translatex(${xPosition}px)`,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <IconButton
                  onClick={() => {
                    toggleMenuOpen();
                  }}
                >
                  <MdClose size="32" color="white" />
                </IconButton>
              </div>
            </Drawer>
          </div>
        </div>
      </AppBar>
    </HeaderBlock>
  );
};

export default AppbarMain;
