import { style } from 'styled-vanilla-extract/qwik'

import vars from '~/css/theme.css'

export const container = style({
  backgroundColor: vars.header.primary.bg,
  color: vars.header.primary.text,
})

export const btn = style({
  background: 'transparent',
})
