import { themes } from 'src/shared/theme'
import useSelectedTheme from 'src/hooks/useSelectedTheme'

export type Props = {
  children?: React.ReactNode
}

export default function ThemeProvider({ children }: Props) {
  const [selectedTheme] = useSelectedTheme()

  React.useEffect(() => {
    document
      .querySelector('body')
      .setAttribute('class', themes[selectedTheme.name])
  }, [selectedTheme])

  return <>{children}</>
}
