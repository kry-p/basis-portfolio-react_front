import { useState, useEffect } from 'react';

import useWindowSize from '../../modules/hooks/useWindowSize';
import AppbarWithoutSSR from '../../components/appbar/withoutSSR';

const Management = () => {
  const [height, setHeight] = useState(undefined);
  const windowSize = useWindowSize();

  // For Server-side Rendering
  useEffect(() => {
    setHeight(window.innerHeight);
  }, [windowSize]);

  return (
    <>
      <AppbarWithoutSSR title="관리자 콘솔" type="management" />
    </>
  );
};
export default Management;
