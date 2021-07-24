import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { startRouter } from 'mobx-router';
import React, { createContext, useContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import routes from './config/routes';
import store, { RootStore } from './mobx/store';

const StoreContext = createContext({} as RootStore);
export const StoreProvider = StoreContext.Provider;
export const useStore = (): RootStore => useContext(StoreContext);

startRouter(routes, store, {
  html5history: true,
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#747474',
    },
    text: {
      primary: '#747474',
      secondary: '#F2A627',
    },
    divider: '#111111',
  },
  typography: {
    fontFamily: '"IBM Plex Sans", sans-serif',
    h1: {
      fontFamily: '"IBM Plex Mono", mono space',
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '32px',
      lineHeight: '40px',
    },
    h2: {
      fontFamily: '"IBM Plex Sans", sans-serif',
      fontWeight: 700,
      fontStyle: 'normal',
      fontSize: '20px',
      lineHeight: '28px',
    },
    h3: {
      fontFamily: '"IBM Plex Sans", sans-serif',
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '20px',
      lineHeight: '28px',
    },
    h4: {
      fontFamily: '"IBM Plex Sans", sans-serif',
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '16px',
      lineHeight: '24px',
    },
    h5: {
      fontFamily: '"IBM Plex Sans", sans-serif',
      fontWeight: 700,
      fontStyle: 'normal',
      fontSize: '16px',
      lineHeight: '24px',
    },
    h6: {
      fontFamily: '"IBM Plex Mono", mono space',
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '16px',
      lineHeight: '24px',
    },
    subtitle1: {
      fontFamily: '"IBM Plex Sans", sans-serif',
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '13px',
      lineHeight: '21px',
    },
    subtitle2: {
      fontFamily: '"IBM Plex Sans", sans-serif',
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '13px',
      lineHeight: '16.9px',
    },
    body1: {
      fontFamily: '"IBM Plex Mono", mono space',
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '16px',
      lineHeight: '21px',
    },
    body2: {
      fontFamily: '"IBM Plex Mono", mono space',
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '13px',
      lineHeight: '21px',
    },
    caption: {
      fontFamily: '"IBM Plex Mono", mono space',
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '24px',
      lineHeight: '40px',
    },
    overline: {
      fontFamily: '"IBM Plex Sans", sans-serif',
      fontWeight: 700,
      fontStyle: 'normal',
      fontSize: '9px',
      letterSpacing: '1px',
    },
  },
});

ReactDOM.render(
  <StoreProvider value={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StoreProvider>,
  document.getElementById('root'),
);
