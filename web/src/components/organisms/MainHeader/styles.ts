import { css } from 'src/shared/theme'

export const headerContainer = css({
  position: 'fixed',
  insetInline: '0',
  insetBlock: '0 auto',
  zIndex: '$zIndices$3',
  bg: '$mainHeaderBg',

  '&::before': {
    content: '',
    position: 'absolute',
    inset: 0,
    bg: '$blackA9',
    zIndex: -1,
  },

  '@supports (backdrop-filter: blur(5px))': {
    bg: '$mainHeaderBgBlur',
    backdropFilter: 'blur(5px)',

    '&::before': {
      bg: 'transparent',
    },
  },
})

export const headerContent = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',

  maxInlineSize: '$sizes$wide',
  blockSize: 'inherit',
  mx: 'auto',
  px: '1rem',

  '@mobile': {
    px: '1.5rem',
  },

  '@tablet': {
    px: '2rem',
  },
})

export const navsContainer = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.5rem',
})

export const divider = css({
  borderBlockStart: '1.5px solid $colors$mainHeaderBorderStart',
  borderBlockEnd: '1.5px solid $colors$mainHeaderBorderEnd',
})
