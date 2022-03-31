import * as React from 'react'
import { useAtom } from 'jotai'
import { useMediaQuery } from '@mantine/hooks'
import { Just } from 'purify-ts/Maybe'

import { currentThemeAtom, storedThemeAtom } from 'src/shared/store'
import { config, isValidTheme, isValidAvTheme } from 'src/shared/theme'
import type { ThemeType, AvThemeType } from 'src/shared/theme'

type ReturnType = [
  { isSystem: boolean; name: ThemeType },
  (v: AvThemeType) => void
]

export function useCurrentTheme(): ReturnType {
  const systemTheme: ThemeType = useMediaQuery(config.media.dark)
    ? 'dark'
    : 'light'
  const [storedTheme, setStoredTheme] = useAtom(storedThemeAtom)
  const [currentTheme, setCurrentTheme] = useAtom(currentThemeAtom)

  const updateCurrentTheme = React.useCallback(
    (theme: AvThemeType) => {
      if (!isValidAvTheme(theme)) return

      const newTheme = Just(isValidTheme(theme) ? theme : systemTheme)

      if (!currentTheme.equals(newTheme)) {
        setCurrentTheme(newTheme)
      }
    },
    [currentTheme, systemTheme, setCurrentTheme]
  )

  const handleCurrentThemeUpdate = (theme: AvThemeType): void => {
    setStoredTheme(theme)
    updateCurrentTheme(theme)
  }

  React.useEffect(() => {
    updateCurrentTheme(storedTheme)
  }, [storedTheme, updateCurrentTheme])

  return [
    {
      name: currentTheme.orDefault(systemTheme),
      isSystem: storedTheme === 'system',
    },
    handleCurrentThemeUpdate,
  ]
}

export default useCurrentTheme
