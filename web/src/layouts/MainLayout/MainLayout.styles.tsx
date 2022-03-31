import { css } from 'src/shared/theme'
import type { CSS } from 'src/shared/theme'

export const sharedStl: CSS = {
  $$headerHeight: '$sizes$18',

  '@md': {
    $$headerHeight: '$sizes$24',
  },
}

export const header = css({
  ...sharedStl,

  h: '$$headerHeight',
})

export const main = css({
  ...sharedStl,

  pt: '$$headerHeight',

  bgClr: '$amber2',
})
