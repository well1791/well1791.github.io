import { css, stl } from 'src/shared/theme'

export const title = css({
  ...stl.titleShadow.stl({ shadow: 'left' }),

  fontFamily: '$quattroB',
  color: '$headerAccent2',
  fontSize: '$2xl',

  mb: '$8',
})

export const contactLink = css({
  color: '$text',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  size: '$10',
  rounded: '$sm',

  transition: 'color 350ms ease',

  '@hover': {
    '&:hover': {
      color: '$headerAccent1',
    },
  },
})

export const contactItem = css({
  listStyle: 'none',
})

export const contactList = css({
  display: 'flex',
  alignItems: 'center',
  gap: '$5',
})

export const upBtn = css({
  all: 'unset',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  size: '$9',
  rounded: '$full',
  border: '3px solid $colors$text',

  transition: ['color 350ms ease', 'border-color 350ms ease'].join(','),

  cursor: 'pointer',

  position: 'fixed',
  insetR: '$10',
  insetB: '$10',
  zIndex: '$max',

  '@hover': {
    '&:hover': {
      color: '$headerAccent1',
      borderColor: '$headerAccent2',
    },
  },
})

export const content = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  maxW: '$prose',
  mx: 'auto',
  px: '$5',

  '@md': {
    px: '$7',
  },
})

export const container = css({
  display: 'flex',
  alignItems: 'center',

  py: '$10',
  bgClr: '$footerBg',
})

export const backdrop = css({
  h: 'calc($$height - $sizes$5)',
})
