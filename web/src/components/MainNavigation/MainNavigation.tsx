import * as stl from './MainNavigation.styles'

export type Props = React.HTMLAttributes<HTMLUListElement>

const links = [
  { title: 'exp', href: '#exp' },
  { title: 'skills', href: '#skills' },
]

export const MainNavigation = (props: Props) => {
  return (
    <nav
      {...props}
      className={stl.container({ className: props.className })}
      aria-label="Main navigation"
    >
      <ul className={stl.content()}>
        {links.map((l) => (
          <li key={l.href} className={stl.listItem()}>
            <a href={`${l.href}`} className={stl.link()}>
              <span className={stl.linkUnderline()}></span>
              {l.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default React.memo(MainNavigation)
