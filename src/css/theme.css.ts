import light from './themes/light.css'
import dark from './themes/light.css'
export { default } from './themes/contract.css'

export const theme = {
  light,
  dark,
} as const

export type Theme = keyof typeof theme
