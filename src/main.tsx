import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';

import theme from './styles/theme';
import MainPage from './pages/MainPage';

import '@fontsource/oswald/700.css';
import '@fontsource/oswald/400.css';
import '@fontsource/poppins/400.css';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme}>
      <MainPage />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
