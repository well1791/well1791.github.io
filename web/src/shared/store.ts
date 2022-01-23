import { atom } from 'recoil'

import { isValidTheme } from 'src/shared/theme'
import type { ThemeType } from 'src/shared/theme'
import type { NavItem } from 'src/components/molecules/MainNavigation'

export type SelectedThemeType = {
  name: ThemeType
  isUserChoice: boolean
}

const storedTheme = localStorage.getItem('theme')

export const selectedTheme = atom<SelectedThemeType>({
  key: 'selectedTheme',
  default: {
    name: isValidTheme(storedTheme) ? storedTheme : 'light',
    isUserChoice: isValidTheme(storedTheme),
  },
})

export const mainHeaderStyles = atom<{ blockSize: string }>({
  key: 'mainHeaderStyles',
  default: {
    blockSize: '50px',
  },
})

export const mainNavItems = atom<{ items: NavItem[]; skipTo?: NavItem }>({
  key: 'mainNavItems',
  default: {
    items: [],
  },
})
