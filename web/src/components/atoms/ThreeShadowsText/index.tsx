import zip from 'lodash/fp/zip'

import * as stl from './styles'

type Props = {
  text: string
  wrapper: (text: string) => React.ReactNode
  className?: string
  pos: { x: number; y: number }
  shadowColors: Array<React.CSSProperties['color']>
  shadowFontSize: React.CSSProperties['fontSize']
  shadowClassName?: string
}

export default function ThreeShadowsText({
  text,
  wrapper,
  className,
  pos,
  shadowFontSize,
  shadowColors,
  shadowClassName,
}: Props) {
  return (
    <div
      className={stl.textContainer({
        className,
        css: { size: shadowFontSize },
      })}
    >
      <div className="sr-only">{wrapper(text)}</div>

      {zip([-0.5, 0.5, 1.5], shadowColors).map(([n, color], i) => (
        <span
          key={n}
          className={stl.text({
            shadow: i,
            className: shadowClassName,
            css: {
              fontSize: shadowFontSize,
              [`$$shadowColor${i}`]: color,
            },
          })}
          style={{ transform: `translate(${pos.x * n}%, ${pos.y * n}%)` }}
          aria-hidden="true"
        >
          {text}
        </span>
      ))}
    </div>
  )
}

export { default as useMousePosition } from './useMousePosition'