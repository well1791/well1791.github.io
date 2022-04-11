import * as React from 'react'

import { themes } from './theme'
import type { ThemeNameType } from './types'
import useCurrentTheme from './useCurrentTheme'

export type Props = {
  children?: React.ReactNode
}

export function ThemeProvider({ children }: Props) {
  const [selectedTheme] = useCurrentTheme()
  const [[oldTheme, currentTheme], setCurrentTheme] = React.useState<
    [ThemeNameType, ThemeNameType]
  >([selectedTheme.name, selectedTheme.name])

  React.useEffect(() => {
    const bodyClass = document.querySelector('body').classList

    bodyClass.remove(themes[oldTheme])
    bodyClass.add(themes[currentTheme])
  }, [currentTheme, oldTheme, selectedTheme])

  React.useEffect(() => {
    setCurrentTheme([currentTheme, selectedTheme.name])
  }, [currentTheme, selectedTheme.name])

  return <>{children}</>
}

export default ThemeProvider
