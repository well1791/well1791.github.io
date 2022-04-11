import { css, stl } from 'src/shared/theme'

export const title = css({
  ...stl.titleShadow.stl({ shadow: 'left' }),

  m: 0,
  ml: 'auto',
  mr: 'calc(-$1 - 3px)',
  py: '$1',
  px: '$2',

  fontFamily: '$quattroB',
  color: '$headerAccent2',
  fontSize: '$2xl',

  '@supports (scroll-margin-top: 8rem)': {
    scrollMarginTop: '$32',
  },
})

export const titleContainer = css({
  display: 'flex',

  mb: '$8',
})

export const companyCards = css({
  spaceY: 'clamp($20, 20vh, $20)',

  '@md': {
    spaceY: 'clamp($28, 30vh, $28)',
  },
})

export const content = css({})

export const container = css({})
