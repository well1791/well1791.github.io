import { ParallaxLayer } from '@react-spring/parallax'
import { FocusScope } from '@react-aria/focus'

import ExperienceCard from 'src/components/molecules/ExperienceCard'
import ThreeShadowsText, {
  useMousePosition,
} from 'src/components/atoms/ThreeShadowsText'
import Divider from 'src/components/atoms/DividerWithIcons'
import { expList } from 'src/shared/constants'
import { theme } from 'src/shared/theme'
import * as stl from './styles'

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

  return (
    <section id={props.id}>
      <h2 className="sr-only">Skills</h2>
      <ParallaxLayer offset={props.page} className={stl.layerBg()} />

      <ParallaxLayer offset={props.page}>
        <div className={stl.bgShadow()} />
      </ParallaxLayer>

      <ParallaxLayer offset={props.page} speed={0.7}>
        <div className={stl.threeShadowsContainer()}>
          <ThreeShadowsText
            text="Skills"
            className={stl.threeShadowsText()}
            pos={mousePos}
            shadowColors={[
              theme.colors.sectionExpTitleShBot.computedValue,
              theme.colors.sectionExpTitleShMid.computedValue,
              theme.colors.sectionExpTitleShTop.computedValue,
            ]}
          />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={props.page}>
        <div className={stl.linesContainer()}>
          <div className={stl.lines()} />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={props.page}>
        <Divider />
      </ParallaxLayer>

      <ParallaxLayer offset={props.page} speed={2.0}>
        <div {...mouseBind()} className="absolute inset-0">
          <ExperienceList />
        </div>
      </ParallaxLayer>
    </section>
  )
}
