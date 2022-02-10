import { ParallaxLayer } from '@react-spring/parallax'

import UnMemoExperienceCard from 'src/components/molecules/ExperienceCard'
import ThreeShadowsText, {
  useMousePosition,
} from 'src/components/atoms/ThreeShadowsText'
import Divider from 'src/components/atoms/DividerWithIcons'
import { expList } from 'src/shared/constants'
import { lightTheme as theme } from 'src/shared/theme'
import * as stl from './styles'

const ExperienceCard = React.memo(UnMemoExperienceCard)

export type Props = React.HTMLAttributes<HTMLElement> & { page: number }

export default function SectionExperience(props: Props) {
  const [expI0, setExpI0] = React.useState(expList.length - 1)
  const { mouseBind, mousePos } = useMousePosition()

  const getExp = (i: number) => ({
    title: expList[i].title,
    onClick: () => setExpI0(i),
  })

  return (
    <section {...mouseBind()} id={props.id}>
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
              theme.colors.sectionExpTitleShBot.toString(),
              theme.colors.sectionExpTitleShMid.toString(),
              theme.colors.sectionExpTitleShTop.toString(),
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
        <div className={stl.cardsContainer()}>
          <div
            role="region"
            aria-label="Experience and skills carousel"
            className={stl.cardsContent()}
          >
            {expList.map((exp, i0) => {
              const i1 = i0 + 1
              const isFirst = i0 === 0
              const isLast = i1 === expList.length
              const hasMoreCards = expList.length > 1
              const isActive = i0 === expI0

              return (
                <ExperienceCard
                  key={exp.title}
                  role="group"
                  aria-label={`job experience slide ${i1} of ${expList.length}`}
                  aria-hidden={!isActive}
                  aria-disabled={!isActive}
                  aria-current={isActive}
                  className={stl.cardContainer({
                    css: { display: isActive ? 'block' : 'none' },
                  })}
                  data={exp}
                  prevBtn={
                    hasMoreCards && !isFirst ? getExp(i0 - 1) : undefined
                  }
                  nextBtn={hasMoreCards && !isLast ? getExp(i1) : undefined}
                />
              )
            })}
          </div>
        </div>
      </ParallaxLayer>
    </section>
  )
}
