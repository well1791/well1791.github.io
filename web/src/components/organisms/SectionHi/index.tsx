import { ParallaxLayer } from '@react-spring/parallax'

import ThreeShadowsText, {
  useMousePosition,
} from 'src/components/atoms/ThreeShadowsText'
import { lightTheme as theme } from 'src/shared/theme'
import * as stl from './styles'

export type Props = React.HTMLAttributes<HTMLElement> & { page: number }

export default function SectionHi(props: Props) {
  const { mouseBind, mousePos } = useMousePosition()

  return (
    <section {...mouseBind()} id={props.id}>
      <ParallaxLayer offset={props.page} className={stl.layerBg()} />

      <ParallaxLayer offset={props.page} speed={0.8}>
        <div className={stl.hiContainer()}>
          <ThreeShadowsText
            text="Hi"
            wrapper={(text) => <h2>{text}</h2>}
            pos={mousePos}
            className={stl.threeShadowsText()}
            shadowFontSize="calc(min(75vh, 75vw) + 1rem)"
            shadowColors={[
              theme.colors.sectionHiTitleShBot.toString(),
              theme.colors.sectionHiTitleShMid.toString(),
              theme.colors.sectionHiTitleShTop.toString(),
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
