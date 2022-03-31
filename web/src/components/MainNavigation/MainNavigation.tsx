import * as stl from './MainNavigation.styles'

export type Props = React.HTMLAttributes<HTMLUListElement>

const links = [
  { title: 'experience', href: '#experience' },
  { title: 'about me', href: '#aboutme' },
]

const MainNavigation = (props: Props) => {
  return (
    <ul {...props} className={stl.container({ className: props.className })}>
      {links.map((l) => (
        <li key={l.href} className={stl.listItem()}>
          <a href={l.href} className={stl.link().className}>
            {l.title}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default MainNavigation
