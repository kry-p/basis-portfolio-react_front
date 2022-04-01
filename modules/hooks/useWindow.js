import { useState, useEffect } from 'react';

export default function useWindow() {
  const [windowInfo, setWindowInfo] = useState({
    width: undefined,
    height: undefined,
    scroll: 0,
  });

  const handleResize = () => {
    setWindowInfo({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const handleScroll = () => {
    setWindowInfo({ ...windowInfo, scroll: window.scrollY });
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (typeof window !== 'undefined') {
      handleScroll();
      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return windowInfo;
}
