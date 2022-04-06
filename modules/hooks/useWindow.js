import { useState, useEffect } from 'react';

export default function useWindow() {
  const [windowInfo, setWindowInfo] = useState({
    width: undefined,
    height: undefined,
  });

  const handleResize = () => {
    setWindowInfo({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return windowInfo;
}
