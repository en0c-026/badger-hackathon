import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { startRouter } from 'mobx-router';
import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import routes from './config/routes';
import store, { RootStore } from './mobx/store';

export const StoreContext = createContext({} as RootStore);
export const StoreProvider = StoreContext.Provider;

startRouter(routes, store, {
  html5history: true,
});

const theme = createTheme({
  typography: {
    fontFamily: '"IBM Plex Mono", "IBM Plex Sans", mono space, sans-serif',
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
