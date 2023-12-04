import { style } from 'styled-vanilla-extract/qwik'

import vars from '~/css/theme.css'

export const container = style({
  minHeight: '50vh',
  backgroundColor: vars.main.primary.bg,
  color: vars.main.primary.text,
})
