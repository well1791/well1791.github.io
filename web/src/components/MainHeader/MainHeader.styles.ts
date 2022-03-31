import { css } from 'src/shared/theme'

export const header = css({
  display: 'flex',
  items: 'center',
  content: 'between',

  position: 'absolute',
  insetT: 0,
  insetX: 0,

  maxW: '$lg',
  mx: 'auto',
  px: '$4',
  bgClr: '$mint4',

  fontWeight: '$black',
  text: '$sm',
  color: '$slate12',

  $$headerBorderStl: '5px solid $colors$headerBorderClr',
  borderB: '$$headerBorderStl',
  borderX: '$$headerBorderStl',

  '[data-sm-block]': {
    display: 'none',
  },

  '@sm': {
    px: '$6',

    '[data-sm-block]': {
      display: 'inline',
    },
  },

  '@md': {
    text: '$lg',
    px: '$16',
  },
})

export const actions = css({
  $$headerActionsGap: '$space$6',

  display: 'flex',
  items: 'center',
  content: 'center',
  gap: '$$headerActionsGap',

  '@md': {
    $$headerActionsGap: '$space$8',
  },
})
