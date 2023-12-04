import { createTheme } from '@vanilla-extract/css';

import { vars } from './contract.css';

export const lightTheme = createTheme(vars, {
  header: {
    primary: {
      text: 'black',
      bg: 'white',
    },
  },
  main: {
    primary: {
      text: 'black',
      bg: 'white',
    },
  },
  footer: {
    primary: {
      text: 'black',
      bg: 'white',
    },
  },
} as const);

export default lightTheme
