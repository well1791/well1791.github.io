import * as stl from './styles'

export type Props = {
  name: string
  cat: 'php' | 'js' | 'hs' | 'rb' | 'sql' | 'liquid' | 'linux'
}

export default function TechSkill({ name, cat }: Props) {
  return (
    <li className={stl.container()}>
      <span className={stl.name()}>{name}</span>
      <span className={stl.category()}>{cat}</span>
      <span className={stl.bg()} />
    </li>
  )
}
