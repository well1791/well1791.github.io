import { createThemeContract } from '@vanilla-extract/css';

export const vars = createThemeContract({
  header: {
    primary: {
      text: '',
      bg: '',
    },
  },
  main: {
    primary: {
      text: '',
      bg: '',
    },
  },
  footer: {
    primary: {
      text: '',
      bg: '',
    },
  },
} as const);

export default vars
