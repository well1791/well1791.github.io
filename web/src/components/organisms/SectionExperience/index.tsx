import { ParallaxLayer } from '@react-spring/parallax'
import { FocusScope } from '@react-aria/focus'
import { useInView } from 'react-intersection-observer'
import { useRecoilState } from 'recoil'

import ExperienceCard from 'src/components/molecules/ExperienceCard'
import ThreeShadowsText, {
  useMousePosition,
} from 'src/components/atoms/ThreeShadowsText'
import Component from 'src/components/atoms/DividerWithIcons'
import { expList } from 'src/shared/constants'
import { theme } from 'src/shared/theme'
import * as stl from './styles'
import * as str from 'src/shared/store'

export type Props = React.HTMLAttributes<HTMLElement> & { page: number }

export const ExperienceList = React.memo(() => {
  const [expI0, setExpI0] = React.useState(expList.length - 1)

  const getExp = (i: number) => ({
    title: expList[i].title,
    onClick: () => setExpI0(i),
  })

  return (
    <div className={stl.cardsContainer()}>
      <div
        role="region"
        aria-label="Experience and skills carousel"
        className={stl.cardsContent()}
      >
        {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
        <FocusScope autoFocus>
          {expList.map((exp, i0) => {
            const i1 = i0 + 1
            const isActive = i0 === expI0
            const isOneCard = expList.length === 1
            const hasPrevCard = !isOneCard && i0 !== 0
            const hasNextCard = !isOneCard && i1 !== expList.length

            return (
              <ExperienceCard
                key={exp.title}
                aria-label={`job experience slide ${i1} of ${expList.length}`}
                className={stl.cardContainer({ isActive })}
                data={exp}
                isActive={isActive}
                prevBtn={hasPrevCard ? getExp(i0 - 1) : undefined}
                nextBtn={hasNextCard ? getExp(i1) : undefined}
              />
            )
          })}
        </FocusScope>
      </div>
    </div>
  )
})

export default function SectionExperience(props: Props) {
  const { mouseBind, mousePos } = useMousePosition()
  const { ref, inView } = useInView({ threshold: 0.5 })
  const [activeNav, setActiveNav] = useRecoilState(str.activeNav)

  React.useEffect(() => {
    if (inView && activeNav !== props.id) setActiveNav(props.id)
  }, [inView, activeNav, props.id, setActiveNav])

  return (
    <section aria-labelledby={props.id}>
      <h2 id={props.id} className="sr-only">
        Skills
      </h2>
      <ParallaxLayer offset={props.page} className={stl.layerBg()} />

      <ParallaxLayer offset={props.page}>
        <div className={stl.bgShadow()} />
      </ParallaxLayer>

      <ParallaxLayer offset={props.page} speed={0.7}>
        <div className={stl.threeShadowsContainer()}>
          <ThreeShadowsText
            className={stl.threeShadowsText()}
            pos={mousePos}
            shadowColors={[
              theme.colors.sectionExpTitleShBot.computedValue,
              theme.colors.sectionExpTitleShMid.computedValue,
              theme.colors.sectionExpTitleShTop.computedValue,
            ]}
          >
            Skills
          </ThreeShadowsText>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={props.page}>
        <div className={stl.linesContainer()}>
          <div className={stl.lines()} />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={props.page}>
        <Component />
      </ParallaxLayer>

      <ParallaxLayer offset={props.page} speed={2.0}>
        <div ref={ref} {...mouseBind()} className="absolute inset-0">
          <ExperienceList />
        </div>
      </ParallaxLayer>
    </section>
  )
}
