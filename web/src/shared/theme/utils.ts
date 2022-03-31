import { themes } from './theme'
import { FlexStartEnd, FlexSpace } from './types'
import type { ThemeType, AvThemeType, BgLinGrd } from './types'

export const isValidTheme = (value?: string): value is ThemeType =>
  Boolean(themes[value])

export const isValidAvTheme = (value?: string): value is AvThemeType =>
  value === 'system' || Boolean(themes[value])

export const isBgLinGrd = (v: BgLinGrd | BgLinGrd[]): v is BgLinGrd => {
  const [head] = v
  return !Array.isArray(head)
}

export const isFlexStartEnd = <T>(v: T): boolean => {
  return Object.values(FlexStartEnd).includes(String(v))
}

export const isFlexSpace = <T>(v: T): boolean => {
  return Object.values(FlexSpace).includes(String(v))
}

export const flatVal = <T>(v: T, sep = ', '): string => {
  return Array.isArray(v) ? v.join(sep) : String(v)
}

export const percent = (numerator: number, denominator: number): string => {
  return `${((numerator * 100) / denominator).toFixed(6)}%`
}
