import { theme } from 'src/shared/theme'
import useSelectedTheme from 'src/hooks/useSelectedTheme'

export type Props = {
  children?: React.ReactNode
}

export default function ThemProvider({ children }: Props) {
  const [selectedTheme] = useSelectedTheme()

  React.useEffect(() => {
    document.querySelector('body').setAttribute('class', theme.blackAndWhite)
  }, [selectedTheme])

  return <>{children}</>
}
