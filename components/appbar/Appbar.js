/*
 * Appbar
 */
import React, { useEffect, useState } from "react";
import { LogoButton, Burger } from "../button";
import { DRAWER_WIDTH, HeaderBlock, AppBar, Drawer, Menu, MenuItem } from "./AppbarStyle";

import useScroll from "../../modules/hooks/useScroll";
import useWindow from "../../modules/hooks/useWindow";

// name, scrollPos
const mainRouteData = [
  ["Home", 0, 0],
  ["About me", 1, 1],
  ["Portfolio", 3, 4],
  ["Contact", 3.8, 4.8],
];

const Appbar = ({ title }) => {
  const [colorInverted, setColorInverted] = useState(false);
  const windowInfo = useWindow();
  const scroll = useScroll();
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

  useEffect(() => {
    if (scroll > windowInfo.height) setColorInverted(true);
    else setColorInverted(false);
  }, [scroll, windowInfo]);

  return (
    <HeaderBlock>
      <AppBar>
        <div className="left">
          <LogoButton title={title} cali={true} colorInverted={colorInverted} />
        </div>
        <div className="right">
          <Burger open={open} setOpen={toggleOpen} colorInverted={colorInverted && !open} />
          <Drawer
            style={{
              transform: `translatex(${xPosition}px)`,
            }}
          >
            <Menu>
              {mainRouteData.map((item) => {
                return (
                  <MenuItem
                    key={item}
                    item
                    onClick={() =>
                      window.scrollTo(0, window.innerWidth >= 1024 ? window.innerHeight * item[1] : window.innerHeight * item[2])
                    }
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
