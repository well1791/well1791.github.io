import { css } from 'src/shared/theme'

export const container = css({
  display: 'flex',
  items: 'center',
  justify: 'center',
  gap: '$$headerActionsGap',
})

export const link = css({
  transition: 'color 350ms ease',
  p: '$1',
  rounded: '$md',

  '&:hover': {
    color: '$headerBorderClr',
  },
})

export const listItem = css({})
