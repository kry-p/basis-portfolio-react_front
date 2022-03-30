/*
 * Appbar
 * note: menu button does not implemented
 */
import router from 'next/router';
import React, { useState } from 'react';

import { LogoButton, Burger } from '../button';

import {
  DRAWER_WIDTH,
  HeaderBlock,
  AppBar,
  Drawer,
  Menu,
  MenuItem,
} from './AppbarStyle';

const mainRouteData = [
  ['Home', '/'],
  ['About me', '/about'],
  ['Gallery', '#'],
  ['Contact', '#'],
];

const managementRouteData = [
  ['Dashboard', '/management'],
  ['Upload Photos', '/management'],
  ['Featured Photos', '/management'],
  ['Manage Users', '/management'],
];

const Appbar = ({ title, type }) => {
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
          {type === 'management' ? (
            <LogoButton title={title} cali={false} />
          ) : (
            <LogoButton title={title} cali={true} />
          )}
        </div>
        <div className="right">
          <Burger open={open} setOpen={toggleOpen} />
          <Drawer
            style={{
              transform: `translatex(${xPosition}px)`,
            }}
          >
            <Menu>
              {type === 'management'
                ? managementRouteData.map((item) => {
                    return (
                      <MenuItem
                        key={item}
                        item
                        onClick={() => router.push(item[1])}
                      >
                        {item[0]}
                      </MenuItem>
                    );
                  })
                : mainRouteData.map((item) => {
                    return (
                      <MenuItem
                        key={item}
                        item
                        onClick={() => router.push(item[1])}
                      >
                        {item[0]}
                      </MenuItem>
                    );
                  })}
            </Menu>
          </Drawer>
        </div>
      </AppBar>
    </HeaderBlock>
  );
};

export default Appbar;
