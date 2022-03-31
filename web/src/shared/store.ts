import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import type { Maybe } from 'purify-ts/Maybe'
import { Nothing } from 'purify-ts/Maybe'

import type { AvThemeType, ThemeType } from 'src/shared/theme'
// import type { NavItem } from 'src/components/molecules/MainNavigation'

export const storedThemeAtom = atomWithStorage<AvThemeType>('theme', 'system')
export const currentThemeAtom = atom<Maybe<ThemeType>>(Nothing)

export const headerStylesAtom = atom({ blockSize: '70px' })

// export const mainNavItemsAtom = atom<{ items: NavItem[]; skipTo?: NavItem }>({
//   items: [],
// })
