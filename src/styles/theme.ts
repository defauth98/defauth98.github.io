import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '1024px',
  xl: '1200px',
  '2xl': '1366px',
  '3xl': '1920px',
  '4xl': '2520px',
});

const theme = extendTheme({
  fonts: {
    heading: 'Oswald',
    body: 'Poppins',
  },
  colors: {
    white: {
      200: '#fafaff',
    },
    black: {
      800: '#1e1e24',
      900: '#000000',
    },
    blue: {
      400: '#00a8e8',
      600: '#574ae2',
    },
  },
  breakpoints,
});

export default theme;
