import { ParallaxLayer } from '@react-spring/parallax'
import { useMove } from '@use-gesture/react'
import debounce from 'lodash/fp/debounce'
import clamp from 'lodash/fp/clamp'

import * as stl from './styles'

const TEXT_SH_LIMIT = 5

export type Props = React.HTMLAttributes<HTMLElement> & { page: number }

export default function SectionHi(props: Props) {
  const [mousePos, setMousePos] = React.useState({ x: -3, y: 3 })
  const shadowLimit = clamp(-TEXT_SH_LIMIT, TEXT_SH_LIMIT)

  const mouseBind = useMove(
    debounce(200, ({ xy: [pX, pY] }) => {
      const x = shadowLimit((window.innerWidth - pX * 1.7) / 100)
      const y = shadowLimit((window.innerHeight - pY * 3) / 100)

      if (x !== mousePos.x || y !== mousePos.y) setMousePos({ x, y })
    })
  )

  return (
    <section {...mouseBind()} id={props.id}>
      <ParallaxLayer offset={props.page} className={stl.layerBg()} />

      <ParallaxLayer offset={props.page} speed={0.8}>
        <div className={stl.hiContainer()}>
          <h2
            className={stl.hi()}
            style={{
              textShadow: [
                `calc(-5px * ${mousePos.x}) calc(-3px * ${mousePos.y}) 1px var(--colors-sectionHiTitleSh1)`,
                `calc(${mousePos.x}px) calc(${mousePos.y}px) 2px var(--colors-sectionHiTitleSh2)`,
                `calc(6px * ${mousePos.x}) calc(5px * ${mousePos.y}) 5px var(--colors-sectionHiTitleSh3)`,
              ].join(','),
            }}
          >
            Hi
          </h2>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={props.page}>
        <div className={stl.bgShadow()} />
      </ParallaxLayer>

      <ParallaxLayer offset={props.page} speed={-0.2}>
        <div className={stl.bodyContainer()}>
          <p className={stl.im()}>{"I'm"}</p>

          <div className={stl.info()}>
            <p className={stl.name({ className: 'highlight' })}>
              wellington mendoza
            </p>
            <div className={stl.divider()} />
            <p className={stl.role({ className: 'highlight' })}>
              frontend developer
            </p>
          </div>
        </div>
      </ParallaxLayer>
    </section>
  )
}
