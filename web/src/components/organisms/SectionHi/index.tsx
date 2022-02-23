import { ParallaxLayer } from '@react-spring/parallax'
import { ArrowDownIcon } from '@radix-ui/react-icons'
import { useInView } from 'react-intersection-observer'
import { useRecoilState } from 'recoil'

import ThreeShadowsText, {
  useMousePosition,
} from 'src/components/atoms/ThreeShadowsText'
import { theme } from 'src/shared/theme'
import * as stl from './styles'
import * as str from 'src/shared/store'

export type Props = React.HTMLAttributes<HTMLElement> & {
  goToNextSection: () => void
  page: number
}

export const MyInfo = React.memo(() => (
  <div className={stl.bodyContainer()}>
    <div className={stl.bodyContent()}>
      <p className={stl.im()}>{"I'm"}</p>

      <div className={stl.info()}>
        <p className={stl.name()}>Wellington Mendoza</p>
        <div className={stl.divider()} />
        <p className={stl.role()}>Frontend Developer</p>
      </div>
    </div>
  </div>
))

export default function SectionHi(props: Props) {
  const { mouseBind, mousePos } = useMousePosition()
  const { ref, inView } = useInView({ threshold: 0.5 })
  const [activeNav, setActiveNav] = useRecoilState(str.activeNav)

  React.useEffect(() => {
    if (inView && activeNav !== props.id) setActiveNav(props.id)
  }, [inView, activeNav, props.id, setActiveNav])

  return (
    <section aria-labelledby={props.id}>
      <h2 id={props.id} className="sr-only">
        Hi
      </h2>
      <ParallaxLayer offset={props.page} className={stl.layerBg()} />

      <ParallaxLayer offset={props.page} speed={0.8}>
        <div className={stl.hiContainer()}>
          <ThreeShadowsText
            text="Hi"
            pos={mousePos}
            className={stl.threeShadowsText()}
            shadowFontSize="calc(min(75vh, 75vw) + 1rem)"
            shadowColors={[
              theme.colors.sectionHiTitleShBot.computedValue,
              theme.colors.sectionHiTitleShMid.computedValue,
              theme.colors.sectionHiTitleShTop.computedValue,
            ]}
          />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={props.page}>
        <div className={stl.bgShadow()} />
      </ParallaxLayer>

      <ParallaxLayer offset={props.page} speed={-0.2}>
        <div ref={ref} {...mouseBind()} className="absolute inset-0">
          <MyInfo />
        </div>

        <button
          type="button"
          className={stl.goToNextSection()}
          onClick={props.goToNextSection}
        >
          <span className="sr-only">Scroll to next section</span>
          <ArrowDownIcon aria-hidden="true" focusable="false" />
        </button>
      </ParallaxLayer>
    </section>
  )
}
