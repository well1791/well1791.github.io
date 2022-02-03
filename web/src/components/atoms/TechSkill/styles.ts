import { css } from 'src/shared/theme'

export const name = css({
  transition: 'color 0.8s ease',
  fontWeight: 'bold',
})

export const category = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderStartEndRadius: 'inherit',
  borderEndEndRadius: 'inherit',
  minInlineSize: 50,
  inlineSize: 'fit-content',
  blockSize: '100%',
  pr: '.35rem',

  fontWeight: 'bold',
  fontSize: '$md',

  transition: 'color 350ms ease',
})

export const bg = css({
  position: 'absolute',
  zIndex: -1,
  insetBlock: 0,
  insetInline: '-50%',
  br: 'inherit',
  transform: 'translateX(25%)',
  boxShadow: 'inset 0px 0px 20px -10px black',

  transition: 'transform 0.5s ease',
})

export const container = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  pl: '.875rem',
  blockSize: 40,
  br: '$md',
  boxShadow: '$md',

  transition: ['color 350ms ease', 'transform 350ms ease'].join(','),
  overflowX: 'hidden',

  position: 'relative',
  zIndex: '$4',

  [`.${bg()}`]: {
    backgroundImage:
      'linear-gradient(to right, $$color 38%, $$bg 40%, $$bg 88%, $$color 90%)',
  },
  [`.${category()}`]: { color: '$$color' },
  [`.${name()}`]: { color: '$$bg' },

  '&:hover, &:focus': {
    transform: 'translateY(-10%) scale(1.05)',
    [`.${name()}`]: { color: '$$color' },
    [`.${category()}`]: { color: '$$bg' },
    [`.${bg()}`]: { transform: 'translateX(-25%)' },
  },

  variants: {
    category: {
      none: {
        $$bg: 'black',
        $$color: 'white',
      },

      php: {
        $$bg: 'white',
        $$color: '#474A8A',
      },

      js: {
        $$bg: '#323330',
        $$color: '#F0DB4F',
      },

      hs: {
        $$bg: '#f4f1e2',
        $$color: '#453a62',
      },

      py: {
        $$bg: '#fff1c3',
        $$color: '#2B5B7B',
      },

      rb: {
        $$bg: 'white',
        $$color: '#820C02',
      },

      sql: {
        $$bg: 'white',
        $$color: '#006d9a',
      },

      liquid: {
        $$bg: 'white',
        $$color: '#95bf47',
      },

      linux: {
        $$bg: 'white',
        $$color: '#003366',
      },
    },
  },
})
