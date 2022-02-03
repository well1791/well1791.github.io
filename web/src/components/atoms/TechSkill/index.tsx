import useSelectedTheme from 'src/hooks/useSelectedTheme'
import * as stl from './styles'

export type Props = {
  name: string
  cat: 'php' | 'js' | 'hs' | 'rb' | 'py' | 'sql' | 'liquid' | 'linux'
}

export default function TechSkill({ name, cat }: Props) {
  const [selectedTheme] = useSelectedTheme()
  const category = selectedTheme.name === 'blackAndWhite' ? 'none' : cat

  return (
    <li className={stl.container({ category })}>
      <span className={stl.name()}>{name}</span>
      <span className={stl.category()}>{cat}</span>
      <span className={stl.bg()} />
    </li>
  )
}
