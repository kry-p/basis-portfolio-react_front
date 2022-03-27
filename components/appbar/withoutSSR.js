import dynamic from 'next/dynamic';

const AppbarWithoutSSR = dynamic(() => import('./Appbar'), {
  ssr: false,
});

export default AppbarWithoutSSR;
