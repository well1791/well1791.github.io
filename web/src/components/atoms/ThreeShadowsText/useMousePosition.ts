import { useMove } from '@use-gesture/react'
import debounce from 'lodash/fp/debounce'
import clamp from 'lodash/fp/clamp'

type Position = {
  x: number
  y: number
}

export type Props = {
  textShLimit?: number
  initialPos?: Position
  debounceDelay?: number
  mouseThreshold?: Position
}

export default function useMousePosition({
  textShLimit = 2.5,
  initialPos = { x: -3, y: 3 },
  debounceDelay = 200,
  mouseThreshold = { x: 1.8, y: 2.5 },
}: Props = {}) {
  const [mousePos, setMousePos] = React.useState(initialPos)
  const shadowLimit = clamp(-textShLimit, textShLimit)
  const mouseBind = useMove<'move', Record<string, unknown>>(
    debounce(debounceDelay, ({ xy: [pX, pY] }) => {
      const x = shadowLimit((window.innerWidth - pX * mouseThreshold.x) / 100)
      const y = shadowLimit((window.innerHeight - pY * mouseThreshold.y) / 100)

      if (x !== mousePos.x || y !== mousePos.y) setMousePos({ x, y })
    })
  )

  return { mouseBind, mousePos }
}
