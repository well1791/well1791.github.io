import { css, stl } from 'src/shared/theme'

export const linkUnderline = stl.linkUnderline.css

export const link = css({
  p: '$1',
  rounded: '$md',

  color: '$colors$text',
  textDecoration: 'none',

  position: 'relative',

  '@motion': {
    transition: 'color 350ms ease',
  },

  '@hover': {
    '&:hover': {
      color: '$headerAccent1',
    },
  },
})

export const listItem = css({
  listStyle: 'none',
  display: 'inline-block',
})

export const content = css({
  p: 0,
  m: 0,
  spaceX: '$$headerActionsGap', // TODO: don't use magic MainHeader.actions
})

export const container = css({})
