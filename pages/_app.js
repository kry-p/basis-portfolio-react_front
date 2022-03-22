import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppStyle } from '../components/Styles';

import '../styles/global.css';

// global theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#474747',
      light: '#727272',
      dark: '#202020',
    },
  },
  typography: {
    fontFamily: '"MinSans-Medium", serif',
  },
});

const App = ({ Component }) => (
  <ThemeProvider theme={theme}>
    <AppStyle>
      <Component />
    </AppStyle>
  </ThemeProvider>
);

export default App;
