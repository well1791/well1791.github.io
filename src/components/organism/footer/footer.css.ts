import { style } from 'styled-vanilla-extract/qwik'

import vars from '~/css/theme.css'

export const container = style({
  backgroundColor: vars.footer.primary.bg,
  color: vars.footer.primary.text,
})
