import * as React from 'react'
import { useAtom } from 'jotai'
import { useMediaQuery } from '@mantine/hooks'
import { Just } from 'purify-ts/Maybe'

import { currentThemeNameAtom, storedThemeNameAtom } from 'src/shared/store'
import { config, isValidTheme, isValidAvTheme, themes } from 'src/shared/theme'
import type {
  ThemeType,
  ThemeNameType,
  AvThemeNameType,
} from 'src/shared/theme'

type ReturnType = [
  { isSystem: boolean; name: ThemeNameType; instance: ThemeType },
  (v: AvThemeNameType) => void
]

export function useCurrentTheme(): ReturnType {
  const systemTheme: ThemeNameType = useMediaQuery(config.media.dark)
    ? 'dark'
    : 'light'
  const [storedThemeName, setStoredTheme] = useAtom(storedThemeNameAtom)
  const [currentThemeName, setCurrentTheme] = useAtom(currentThemeNameAtom)

  const updateCurrentTheme = React.useCallback(
    (theme: AvThemeNameType) => {
      if (!isValidAvTheme(theme)) return

      const newTheme = Just(isValidTheme(theme) ? theme : systemTheme)

      if (!currentThemeName.equals(newTheme)) {
        setCurrentTheme(newTheme)
      }
    },
    [currentThemeName, systemTheme, setCurrentTheme]
  )

  const handleCurrentThemeUpdate = (theme: AvThemeNameType): void => {
    setStoredTheme(theme)
    updateCurrentTheme(theme)
  }

  React.useEffect(() => {
    updateCurrentTheme(storedThemeName)
  }, [storedThemeName, updateCurrentTheme])

  const themeName = currentThemeName.orDefault(systemTheme)

  return [
    {
      name: themeName,
      isSystem: storedThemeName === 'system',
      get instance() {
        return themes[themeName]
      },
    },
    handleCurrentThemeUpdate,
  ]
}

export default useCurrentTheme
