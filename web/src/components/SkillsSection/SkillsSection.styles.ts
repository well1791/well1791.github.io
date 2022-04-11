import { css, stl } from 'src/shared/theme'

export const title = css({
  ...stl.titleShadow.stl({ shadow: 'left' }),

  fontFamily: '$quattroB',
  color: '$headerAccent2',
  fontSize: '$2xl',

  mb: '$8',
})

export const content = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const container = css({})
