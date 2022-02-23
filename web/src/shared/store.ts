import { isBrowser } from '@redwoodjs/prerender/browserUtils'
import { atom } from 'recoil'

import { isValidTheme } from 'src/shared/theme'
import type { ThemeType } from 'src/shared/theme'
import type { NavItem } from 'src/components/molecules/MainNavigation'

export type SelectedThemeType = {
  name: ThemeType
  isUserChoice: boolean
}

const storedTheme = isBrowser ? localStorage.getItem('theme') : undefined

export const selectedTheme = atom<SelectedThemeType>({
  key: 'selectedTheme',
  default: {
    name: isValidTheme(storedTheme) ? storedTheme : 'blackAndWhite',
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

export const activeNav = atom<string>({
  key: 'activeNav',
  default: '',
})
