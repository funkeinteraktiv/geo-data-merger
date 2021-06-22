import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unistore/react';
import { ThemeProvider } from 'styled-components';

import Store from '~/state/Store';
import App from '~/pages/App';
import GlobalStyles from '~/styles/Global';
import theme from '~/styles/theme';

const root = document.createElement('div');
root.id = 'root';

ReactDOM.render(
  <Provider store={Store}>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <App />
      </>
    </ThemeProvider>
  </Provider>,
  root
);

document.body.appendChild(root);
