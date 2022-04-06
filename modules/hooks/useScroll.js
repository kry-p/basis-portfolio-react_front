import { useState, useEffect } from 'react';

export default function useScroll() {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (typeof window !== 'undefined') {
      handleScroll();
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return scroll;
}
