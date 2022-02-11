import { ParallaxLayer } from '@react-spring/parallax'

import ThreeShadowsText, {
  useMousePosition,
} from 'src/components/atoms/ThreeShadowsText'
import { lightTheme as theme } from 'src/shared/theme'
import * as stl from './styles'

export type Props = React.HTMLAttributes<HTMLElement> & { page: number }

export const Presentation = React.memo(() => (
  <div className={stl.bodyContainer()}>
    <div className={stl.bodyContent()}>
      <p className={stl.im({ className: stl.highlight })}>{"I'm"}</p>

      <div className={stl.info()}>
        <p className={stl.name({ className: stl.highlight })}>
          Wellington Mendoza
        </p>
        <div className={stl.divider()} />
        <p className={stl.role({ className: stl.highlight })}>
          Frontend Developer
        </p>
      </div>
    </div>
  </div>
))

export default function SectionHi(props: Props) {
  const { mouseBind, mousePos } = useMousePosition()

  return (
    <section id={props.id}>
      <h2 className="sr-only">Hi</h2>
      <ParallaxLayer offset={props.page} className={stl.layerBg()} />

      <ParallaxLayer offset={props.page} speed={0.8}>
        <div className={stl.hiContainer()}>
          <ThreeShadowsText
            text="Hi"
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
        <div {...mouseBind()} style={{ position: 'absolute', inset: 0 }}>
          <Presentation />
        </div>
      </ParallaxLayer>
    </section>
  )
}
