import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/oswald/700.css';
import '@fontsource/oswald/400.css';
import '@fontsource/poppins/400.css';
import React from 'react';
import theme from './styles/theme';
import MainPage from './pages/MainPage';

export function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <MainPage />
    </ChakraProvider>
  );
}
