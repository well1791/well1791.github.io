import type Stitches from '@stitches/core'

export type ThemeNameType = 'light' | 'dark'

export type AvThemeNameType = ThemeNameType | 'system'

export type BgGrdDir = 't' | 'tr' | 'r' | 'br' | 'b' | 'bl' | 'l' | 'tl'

export type BgLinGrd = [
  BgGrdDir,
  string | Stitches.PropertyValue<'backgroundColor'>
]

export enum FlexStartEnd {
  start,
  end,
}

export type FlexAlign = keyof typeof FlexStartEnd | 'center'

export enum FlexSpace {
  between,
  around,
  evenly,
}

export type FlexDir = 'row' | 'row-r' | 'col' | 'col-r'

export type FlexWrap = 'w' | 'w-r' | 'nw'
