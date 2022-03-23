import React from 'react';
import { AppStyle } from '../components/Styles';

import '../styles/global.css';

const App = ({ Component }) => (
  <AppStyle>
    <Component />
  </AppStyle>
);

export default App;
