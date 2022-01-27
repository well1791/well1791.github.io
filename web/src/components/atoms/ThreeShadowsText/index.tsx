import zip from 'lodash/fp/zip'

import * as stl from './styles'

type Props = {
  text: string
  wrapper: (text: string) => React.ReactNode
  className?: string
  pos: { x: number; y: number }
  colors: React.CSSProperties['color'][]
  shadowClassName: string
}

export default function ThreeShadowsText({
  text,
  wrapper,
  className,
  pos,
  colors,
  shadowClassName,
}: Props) {
  return (
    <div className={stl.textContainer({ className })}>
      <div className="sr-only">{wrapper(text)}</div>

      {zip([-0.5, 0.5, 1.5], colors).map(([n, color], i) => (
        <span
          key={n}
          className={stl.text({
            shadow: i,
            className: shadowClassName,
            css: { [`$$shadowColor${i}`]: color },
          })}
          style={{
            transform: [
              `translateX(${pos.x * n}%)`,
              `translateY(${pos.y * n}%)`,
            ].join(' '),
          }}
          aria-hidden="true"
        >
          {text}
        </span>
      ))}
    </div>
  )
}
