import dynamic from 'next/dynamic';

import { MainStyle } from '../components/Styles';

const AppbarWithoutSSR = dynamic(() => import('../components/appbar/Appbar'), {
  ssr: false,
});

const Index = () => (
  <>
    <AppbarWithoutSSR />
    <MainStyle />
  </>
);
export default Index;
