import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStiles } from 'components/GlobalStiles';
import { Layout } from 'components/Layout.styled';

const theme = {
  colors: {
    red: 'red',
    green: 'green',
    yellow: 'yellow',
    blue: 'blue',
    grey: '#212121',
    white: 'white',
  },

  spacing: values => `${values * 4}px`,

  radii: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStiles />
      </ThemeProvider>
    </Layout>
  </React.StrictMode>
);
