import { css, stl } from 'src/shared/theme'

export const techItem = css({
  ...stl.tagBox.stl(),

  py: '$2',
  px: '$3',

  fontSize: '$sm',
  listStyle: 'none',
})

export const techList = css({
  display: 'flex',
  justifyContent: 'flex-end',
  flexWrap: 'wrap',
  gap: '$3',
})

export const description = css({
  mb: '$5',

  textAlign: 'right',
  fontSize: '$base',
  lineHeight: '$normal',
})

export const title = css({
  mb: '$4',
  mr: '-$3',
  px: '$2',
  py: '$1',
  borderR: '3px solid $headerAccent1',

  fontSize: '$lg',
  textAlign: 'right',
})

export const container = css({})
