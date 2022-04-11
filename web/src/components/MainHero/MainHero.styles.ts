import { darken } from 'polished'

import { css, lightTheme } from 'src/shared/theme'

export const content = css({})

export const title = css({
  fontFamily: '$quattroB',
  tracking: '$wider',

  '[data-firsthalf]': {
    fontSize: '$2xl',
    color: '$headerAccent1',

    [`.${lightTheme} &`]: {
      color: darken(0.1, lightTheme.colors.headerAccent1.value),
    },
  },

  '[data-lasthalf]': {
    fontSize: '$xl',
    color: '$headerAccent2',
  },
})

export const container = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  bgClr: '$headerBg',

  '& p': {
    my: '$2',
  },
})
