import { css } from 'src/shared/theme'

export const headerContainer = css({
  position: 'fixed',
  insetInline: '0',
  insetBlock: '0 auto',
  zIndex: '$zIndices$3',
  bg: '$mainHeaderBg',
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
