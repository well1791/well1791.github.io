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
      <ParallaxLayer offset={props.page} className={stl.layerBg()} />

      <ParallaxLayer offset={props.page}>
        <div className={stl.bgShadow()} />
      </ParallaxLayer>

      <ParallaxLayer offset={props.page + 0.3} speed={1.2}>
        <div className={stl.threeShadowsContainer()}>
          <ThreeShadowsText
            text="Skills"
            className={stl.threeShadowsText()}
            wrapper={(text) => <h2>{text}</h2>}
            pos={mousePos}
            shadowFontSize="calc(min(30vh) + 1rem)"
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

      <ParallaxLayer offset={props.page} speed={0.5}>
        <div className={stl.cardsContainer()}>
          <div className={stl.cardsContent()}>
            {expList.map((exp, i0) => {
              const i1 = i0 + 1
              const isFirst = i0 === 0
              const isLast = i1 === expList.length
              const hasMoreCards = expList.length > 1

              return (
                <ExperienceCard
                  key={exp.title}
                  className={stl.cardContainer({
                    css: {
                      display: i0 === expI0 ? 'block' : 'none',
                    },
                  })}
                  data={exp}
                  prevExp={
                    hasMoreCards && !isFirst ? getExp(i0 - 1) : undefined
                  }
                  nextExp={hasMoreCards && !isLast ? getExp(i1) : undefined}
                />
              )
            })}
          </div>
        </div>
      </ParallaxLayer>
    </section>
  )
}
