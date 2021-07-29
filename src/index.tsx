import React from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { startRouter } from 'mobx-router';
import ReactDOM from 'react-dom';
import App from './App';
import { theme } from './config/constants';
import { store, StoreProvider } from './config/context';
import routes from './config/routes';

startRouter(routes, store, {
  html5history: true,
});

ReactDOM.render(
  <StoreProvider value={store}>
    <ThemeProvider theme={createTheme(theme)}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StoreProvider>,
  document.getElementById('root'),
);
