import { ParallaxLayer } from '@react-spring/parallax'
import { useMove } from '@use-gesture/react'
import debounce from 'lodash/fp/debounce'
import clamp from 'lodash/fp/clamp'

import UnMemoExperienceCard from 'src/components/molecules/ExperienceCard'
import { expList } from 'src/shared/constants'

const ExperienceCard = React.memo(UnMemoExperienceCard)

import * as stl from './styles'

const TEXT_SH_LIMIT = 3

export type Props = React.HTMLAttributes<HTMLElement> & { page: number }

export default function (props: Props) {
  const [expI0, setExpI0] = React.useState(expList.length - 1)
  const [mousePos, setMousePos] = React.useState({ x: 3, y: -3 })
  const shadowLimit = clamp(-TEXT_SH_LIMIT, TEXT_SH_LIMIT)

  const mouseBind = useMove(
    debounce(200, ({ xy: [pX, pY] }) => {
      const x = shadowLimit((window.innerWidth - pX * 1.7) / 100)
      const y = shadowLimit((window.innerHeight - pY * 3) / 100)

      if (x !== mousePos.x || y !== mousePos.y) setMousePos({ x, y })
    })
  )

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

      <ParallaxLayer offset={props.page + 0.1} speed={0.2}>
        <div className={stl.skillsContainer()}>
          <h2
            className={stl.skills()}
            style={{
              textShadow: [
                `calc(-5px * ${mousePos.x}) calc(-3px * ${mousePos.y}) 1px black`,
                `calc(${mousePos.x}px) calc(${mousePos.y}px) 2px var(--colors-blackA10)`,
                `calc(6px * ${mousePos.x}) calc(5px * ${mousePos.y}) 5px var(--colors-blackA8)`,
              ].join(','),
            }}
          >
            Skills
          </h2>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={props.page}>
        <div className={stl.linesContainer()}>
          <div className={stl.lines()} />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={props.page}>
        <div className={stl.divider1()} />
      </ParallaxLayer>

      <ParallaxLayer offset={props.page} speed={1.2}>
        <div className={stl.cardsContainer()}>
          <div className={stl.cardsContent()}>
            {expList.map((exp, i0) => {
              const i1 = i0 + 1
              const isFirst = i0 === 0
              const isLast = i1 === expList.length

              // const pos = i1 * 8
              const style = {
                display: i0 === expI0 ? 'block' : 'none',
                // zIndex: i1,
                // opacity: i0 === expI0 ? 1 : 0,
                // transform: `translateX(${pos}px) translateY(${pos}px)`,
              }

              return (
                <ExperienceCard
                  key={exp.title}
                  style={style}
                  className={stl.cardContainer()}
                  data={exp}
                  prevExp={isFirst ? undefined : getExp(i0 - 1)}
                  nextExp={isLast ? undefined : getExp(i1)}
                />
              )
            })}
          </div>
        </div>
      </ParallaxLayer>
    </section>
  )
}
