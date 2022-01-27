import { ParallaxLayer } from '@react-spring/parallax'
import { useMove } from '@use-gesture/react'
import debounce from 'lodash/fp/debounce'
import clamp from 'lodash/fp/clamp'

import ThreeShadowsText from 'src/components/atoms/ThreeShadowsText'
import { lightTheme as theme } from 'src/shared/theme'
import * as stl from './styles'

const TEXT_SH_LIMIT = 2.5

export type Props = React.HTMLAttributes<HTMLElement> & { page: number }

export default function SectionHi(props: Props) {
  const [mousePos, setMousePos] = React.useState({ x: -3, y: 3 })
  const shadowLimit = clamp(-TEXT_SH_LIMIT, TEXT_SH_LIMIT)

  const mouseBind = useMove(
    debounce(200, ({ xy: [pX, pY] }) => {
      const x = shadowLimit((window.innerWidth - pX * 1.8) / 100)
      const y = shadowLimit((window.innerHeight - pY * 2.5) / 100)

      if (x !== mousePos.x || y !== mousePos.y) setMousePos({ x, y })
    })
  )

  return (
    <section {...mouseBind()} id={props.id}>
      <ParallaxLayer offset={props.page} className={stl.layerBg()} />

      <ParallaxLayer offset={props.page} speed={0.8}>
        <div className={stl.hiContainer()}>
          <ThreeShadowsText
            text="Hi"
            wrapper={(text) => <h2>{text}</h2>}
            pos={mousePos}
            className={stl.shadowsContainer()}
            shadowClassName={stl.hi()}
            colors={[
              theme.colors.sectionHiTitleSh1.toString(),
              theme.colors.sectionHiTitleSh2.toString(),
              theme.colors.sectionHiTitleSh3.toString(),
            ]}
          />
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
              Wellington Mendoza
            </p>
            <div className={stl.divider()} />
            <p className={stl.role({ className: 'highlight' })}>
              Frontend Developer
            </p>
          </div>
        </div>
      </ParallaxLayer>
    </section>
  )
}
