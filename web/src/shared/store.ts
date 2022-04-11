import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import type { Maybe } from 'purify-ts/Maybe'
import { Nothing } from 'purify-ts/Maybe'

import type { AvThemeNameType, ThemeNameType } from 'src/shared/theme'
// import type { NavItem } from 'src/components/molecules/MainNavigation'

export const storedThemeNameAtom = atomWithStorage<AvThemeNameType>(
  'theme',
  'system'
)
export const currentThemeNameAtom = atom<Maybe<ThemeNameType>>(Nothing)

export const headerStylesAtom = atom({ blockSize: '70px' })

// export const mainNavItemsAtom = atom<{ items: NavItem[]; skipTo?: NavItem }>({
//   items: [],
// })
