import * as React from 'react'

import { themes } from './theme'
import useCurrentTheme from './useCurrentTheme'

export type Props = {
  children?: React.ReactNode
}

export function ThemeProvider({ children }: Props) {
  const [selectedTheme] = useCurrentTheme()

  React.useLayoutEffect(() => {
    const themeClass = themes[selectedTheme.name]
    document.querySelector('body').setAttribute('class', themeClass)
  }, [selectedTheme])

  return <>{children}</>
}

export default ThemeProvider
