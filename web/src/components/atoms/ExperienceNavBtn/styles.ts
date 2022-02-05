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
  background: 'white',

  color: '$sectionExpCardHeaderBg',
  fontSize: '$md',
  fontWeight: 'bold',

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
    size: '1rem',
    transition: 'transform 300ms ease',
    transform: 'translateX($$iconBaseX)',
    '@laptop': {
      size: '1.75rem',
    },
  },

  [`.${bg()}`]: {
    transform: 'translateX($$bgBaseX)',
    backgroundImage:
      'linear-gradient($$bgDir, white 35%, transparent, white 65%)',
  },

  '&:hover, &:focus': {
    [`.${bg()}`]: { transform: 'translateX($$bgHoverX)' },
    svg: { transform: 'translateX($$iconHoverX)' },
  },

  variants: {
    nav: {
      prev: {
        $$iconBaseX: '3px',
        $$iconHoverX: '-2px',
        $$bgBaseX: '33%',
        $$bgHoverX: '-33%',
        $$bgDir: 'to right',
      },

      next: {
        $$iconBaseX: '-3px',
        $$iconHoverX: '2px',
        $$bgBaseX: '-33%',
        $$bgHoverX: '33%',
        $$bgDir: 'to left',
      },
    },
  },
})
