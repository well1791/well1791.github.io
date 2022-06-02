import * as stl from './MainFooter.styles'
import { SiMaildotru, SiLinkedin, SiGithub, SiTwitter } from 'react-icons/Si'
import { FaArrowUp } from 'react-icons/Fa'
import type { IconType } from 'react-icons'

const ICON_SIZE = 24

const contactLinks: { href: string; title: string; Icon: IconType }[] = [
  {
    href: 'mailto:wellsaint91@gmail.com',
    title: 'Email',
    Icon: SiMaildotru,
  },
  {
    href: 'https://github.com/well1791/',
    title: 'Github',
    Icon: SiGithub,
  },
  {
    href: 'https://www.linkedin.com/in/well1791/',
    title: 'LinkedIn',
    Icon: SiLinkedin,
  },
  {
    href: 'https://twitter.com/well1791',
    title: 'Twitter',
    Icon: SiTwitter,
  },
]

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  css: { height: [number, string] }
}

export const MainFooter = ({ css, ...props }: Props) => {
  const cssProps = { $$height: css.height.join('') }

  return (
    <>
      <div className={stl.backdrop({ css: cssProps })}></div>
      <footer
        {...props}
        className={stl.container({ className: props.className, css: cssProps })}
      >
        <div className={stl.content()}>
          <h2 className={stl.title()}>{'Get in touch'}</h2>

          <nav aria-label="Footer navigation">
            <ul className={stl.contactList()}>
              {contactLinks.map((link) => (
                <li key={link.href} className={stl.contactItem()}>
                  <ContactLink href={link.href} className={stl.contactLink()}>
                    <link.Icon
                      aria-hidden="true"
                      focusable="false"
                      size={ICON_SIZE}
                    />
                    <span data-sr-only>{link.title}</span>
                  </ContactLink>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className={stl.upBtn()}
            onClick={() => {
              window.scrollTo(0, 0)
              ;(document.activeElement as HTMLElement)?.blur()
            }}
          >
            <FaArrowUp aria-hidden="true" focusable="false" />
            <span data-sr-only>Back to top</span>
          </button>
        </div>
      </footer>
    </>
  )
}

type ContactLinkProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLAnchorElement> & {
    href: string
  }
>

const ContactLink = ({ children, ...props }: ContactLinkProps) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      {...props}
      onFocus={() => window.scrollTo(0, document.body.scrollHeight)}
    >
      {children}
    </a>
  )
}

export default React.memo(MainFooter)
