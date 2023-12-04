import { createTheme } from '@vanilla-extract/css';

import { vars } from './contract.css';

export const lightTheme = createTheme(vars, {
  header: {
    primary: {
      text: 'white',
      bg: 'black',
    },
  },
  main: {
    primary: {
      text: 'white',
      bg: 'black',
    },
  },
  footer: {
    primary: {
      text: 'white',
      bg: 'black',
    },
  },
} as const);

export default lightTheme
