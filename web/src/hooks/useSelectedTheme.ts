import { useRecoilState } from 'recoil'
import { useMediaQuery } from 'react-responsive'

import { selectedTheme as themeState } from 'src/shared/store'
import type { SelectedThemeType } from 'src/shared/store'
import { config, isValidTheme } from 'src/shared/theme'
import type { ThemeType } from 'src/shared/theme'

export type AvThemeType = ThemeType | 'system'

type ReturnType = [SelectedThemeType, (v: AvThemeType) => void]

export default function useSelectedTheme(): ReturnType {
  const storageItemId = 'theme'
  const systemTheme = useMediaQuery({ query: config.media.dark })
    ? 'dark'
    : 'light'
  const [currentTheme, setCurrentTheme] = useRecoilState(themeState)
  const currentThemeJSON = JSON.stringify(currentTheme)

  const updateSelectedTheme = (newTheme: AvThemeType): void => {
    const isUserChoice = newTheme !== 'system'

    if (newTheme === 'system') {
      localStorage.removeItem(storageItemId)
    } else {
      localStorage.setItem(storageItemId, newTheme)
    }

    setCurrentTheme({
      name: isUserChoice ? newTheme : systemTheme,
      isUserChoice,
    })
  }

  React.useEffect(() => {
    const storedTheme = localStorage.getItem(storageItemId)
    const isUserChoice = isValidTheme(storedTheme)
    const theme = {
      name: isUserChoice ? storedTheme : systemTheme,
      isUserChoice,
    }

    setCurrentTheme(theme)
  }, [systemTheme, currentThemeJSON, setCurrentTheme])

  return [currentTheme, updateSelectedTheme]
}
