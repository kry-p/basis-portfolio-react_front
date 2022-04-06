import React from 'react';
import { AppStyle } from '../components/styles';

import '../styles/global.css';

const App = ({ Component }) => (
  <AppStyle>
    <Component />
  </AppStyle>
);

export default App;
