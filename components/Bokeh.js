import { useEffect, useRef } from "react";

// bokeh types
const TYPE_DARK_COLORFUL = 0;
const TYPE_DARK_GREEN = 1;
const TYPE_DARK_YELLOW = 2;
const TYPE_DARK_ORANGE = 3;
const TYPE_DARK_RED = 4;
const TYPE_DARK_PURPLE = 5;
const TYPE_DARK_SKYBLUE = 6;
const TYPE_BRIGHT_COLORFUL = 7;
const TYPE_BRIGHT_YELLOW = 8;
const TYPE_BRIGHT_GREEN = 9;
const TYPE_BRIGHT_RED = 10;
const TYPE_BRIGHT_SKYBLUE = 11;
const TYPE_GRAYSCALE = 12;

// parallax reaction speed
// 0(stop) ~ 1(immediate)
const SPEED = 0.1;
// Bokeh count
const DEFAULT_BOKEH_COUNT = 48;

let x = 0;
let y = 0;
let mx = 0;
let my = 0;
const bokehs = [];
const colors = {
  colorful: ["springgreen", "yellow", "orange", "red", "purple", "deepskyblue"],
  brightColorful: ["rgb(255, 214, 214)", "rgb(230, 230, 214)", "rgb(214, 255, 214)", "rgb(214, 230, 230)", "rgb(214, 214, 255)"],
  bright: ["white"],
};

const reactMouseMovement = (e) => {
  x = e.clientX - window.innerWidth / 2;
  y = e.clientY - window.innerHeight / 2;
  bokehs.map((bokeh) => {
    const translation = (1 / bokeh.size) * 50;
    bokeh.bokeh.current.style.transform = `translate(${-(mx / translation)}px, ${-(my / translation)}px)`;
  });
};

const getColor = (type) => {
  switch (type) {
    case TYPE_DARK_COLORFUL:
      return colors.colorful[Math.round(Math.random() * 6 - 0.5)];
    case TYPE_BRIGHT_COLORFUL:
      return colors.brightColorful[Math.round(Math.random() * 5 - 0.5)];
    case TYPE_DARK_GREEN:
      return colors.colorful[0];
    case TYPE_DARK_YELLOW:
      return colors.colorful[1];
    case TYPE_DARK_ORANGE:
      return colors.colorful[2];
    case TYPE_DARK_RED:
      return colors.colorful[3];
    case TYPE_DARK_PURPLE:
      return colors.colorful[4];
    case TYPE_DARK_SKYBLUE:
      return colors.colorful[5];
    default:
      return colors.bright[0];
  }
};

const loop = () => {
  mx += (x - mx) * SPEED;
  my += (y - my) * SPEED;
  window.requestAnimationFrame(loop);
};

const getBackground = (type) => {
  switch (type) {
    case TYPE_BRIGHT_COLORFUL:
      return "linear-gradient(180deg, rgba(66,113,145,1) 0%, rgba(116,177,194,1) 35%, rgba(142,155,210,1) 73%, rgba(43,66,118,1) 100%)";
    case TYPE_BRIGHT_YELLOW:
      return "linear-gradient(180deg, rgba(240,195,52,1) 0%, rgba(221,168,5,1) 30%, rgba(251,200,54,1) 50%, rgba(251,189,34,1) 100%)";
    case TYPE_BRIGHT_GREEN:
      return "linear-gradient(180deg, rgba(142,198,57,1) 0%, rgba(109,174,24,1) 30%, rgba(128,189,59,1) 50%, rgba(100,165,40,1) 100%)";
    case TYPE_BRIGHT_RED:
      return "linear-gradient(180deg, rgba(253,85,90,1) 0%, rgba(245,66,73,1) 30%, rgba(239,73,82,1) 50%, rgba(223,57,66,1) 100%)";
    case TYPE_BRIGHT_SKYBLUE:
      return "linear-gradient(180deg, rgba(88,187,232,1) 0%, rgba(54,157,207,1) 30%, rgba(73,164,214,1) 50%, rgba(46,130,186,1) 100%)";
    case TYPE_GRAYSCALE:
      return "linear-gradient(180deg, rgba(156,155,151,1) 0%, rgba(129,128,122,1) 30%, rgba(132,131,125,1) 50%, rgba(96,95,89,1) 100%)";
    default:
      return "rgb(0, 0, 0)";
  }
};

const Bokeh = ({ index, type }) => {
  const bokeh = useRef();
  const size = Math.floor(Math.random() * 10 + 2);
  const zIndex = Math.floor(size * 10 - 15);
  const color = getColor(type);
  const opacity = type == 7 ? Math.random() * 0.7 + 0.15 : Math.random() * 0.4 + 0.3;

  useEffect(() => {
    bokeh.current.style.filter =
      type == 7 ? `saturate(1.25) blur(${Math.floor((1 / zIndex) * 160)}px)` : `blur(${Math.floor((1 / zIndex) * 160)}px)`;
    bokehs.push({ bokeh, size });
  });

  return (
    <div
      style={{
        id: `bokeh-${index}`,
        background: `${color}`,
        filter: type == 7 ? `saturate(1.25) blur(${Math.floor((1 / zIndex) * 160)}px)` : `blur(${Math.floor((1 / zIndex) * 160)}px)}`,
        opacity: opacity,
        position: "absolute",
        width: `${size}rem`,
        height: `${size}rem`,
        borderRadius: `${size / 2}rem`,
        overflow: "hidden",
        zIndex: zIndex,
        top: `${Math.floor(Math.random() * 120 - 20)}vh`,
        left: `${Math.floor(Math.random() * 120 - 20)}vw`,
        willChange: "filter", // trick for Safari
      }}
      ref={bokeh}
    />
  );
};

const Bokehs = () => {
  const type = Math.round(Math.random() * 12);
  const array = Array.from({ length: DEFAULT_BOKEH_COUNT }, (value, index) => index);
  useEffect(() => {
    loop();
    window.addEventListener("mousemove", reactMouseMovement);
  }, []);
  console.log(type);

  return (
    <div style={{ zIndex: 0, background: getBackground(type), position: "absolute", width: "100vw", height: "100vh", overflow: "hidden" }}>
      {array.map((value) => (
        <Bokeh type={type} key={value} index={value} />
      ))}
    </div>
  );
};

export default Bokehs;
