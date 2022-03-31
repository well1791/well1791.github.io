import type { BgGrdDir } from './types'

export const bgGrdDir: { [k in BgGrdDir]: string } = {
  t: 'top',
  tr: 'top right',
  r: 'right',
  br: 'bottom right',
  b: 'bottom',
  bl: 'bottom left',
  l: 'left',
  tl: 'top left',
}

export const bp = {
  xs: '320px',
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}

export const length = {
  '0_5': '0.125rem',
  1: '0.25rem', // 4px
  '1_5': '0.375rem',
  2: '0.5rem', // 8px
  '2_5': '0.625rem',
  3: '0.75rem',
  '3_5': '0.875rem',
  4: '1rem', // 16px
  '4_5': '1.125rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem', // 32px
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem', // 64px
  18: '4.5rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
}
