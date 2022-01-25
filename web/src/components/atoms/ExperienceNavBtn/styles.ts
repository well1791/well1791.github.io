import { css } from 'src/shared/theme'

export const bg = css({
  position: 'absolute',
  insetInline: '-100%',
  insetBlock: 0,

  br: 'inherit',

  transition: 'transform .8s ease',
})

export const content = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.125rem',

  br: 'inherit',
  py: '.2rem',
  px: '1.5rem',

  color: 'black',
  background: 'white',

  position: 'relative',
})

export const container = css({
  br: '$full',
  py: 2,

  overflow: 'hidden',
  position: 'relative',

  '.sr-only': {
    srOnly: true,
  },

  svg: {
    size: '1.5rem',
    transition: 'transform 300ms ease',
  },

  variants: {
    nav: {
      prev: {
        [`.${bg()}`]: {
          transform: 'translateX(33%)',
          backgroundImage:
            'linear-gradient(to right, white 35%, black, white 65%)',
        },

        svg: { transform: 'scale(0.8) translateX(3px)' },

        '&:hover, &:focus': {
          [`.${bg()}`]: { transform: 'translateX(-33%)' },
          svg: { transform: 'translateX(-2px)' },
        },
      },

      next: {
        [`.${bg()}`]: {
          transform: 'translateX(-33%)',
          backgroundImage:
            'linear-gradient(to left, white 35%, black, white 65%)',
        },

        svg: { transform: 'scale(0.8) translateX(-3px)' },

        '&:hover, &:focus': {
          [`.${bg()}`]: { transform: 'translateX(33%)' },
          svg: { transform: 'translateX(2px)' },
        },
      },
    },
  },
})
