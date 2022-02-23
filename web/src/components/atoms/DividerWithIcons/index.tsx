import {
  RocketIcon,
  BookmarkIcon,
  DrawingPinIcon,
  StarIcon,
  GlobeIcon,
  StitchesLogoIcon,
  FigmaLogoIcon,
  GitHubLogoIcon,
  PersonIcon,
} from '@radix-ui/react-icons'

import * as stl from './styles'

const iconsList = [
  BookmarkIcon,
  DrawingPinIcon,
  FigmaLogoIcon,
  GitHubLogoIcon,
  GlobeIcon,
  BookmarkIcon,
  PersonIcon,
  DrawingPinIcon,
  RocketIcon,
  FigmaLogoIcon,
  PersonIcon,
  StarIcon,
  DrawingPinIcon,
  GitHubLogoIcon,
  RocketIcon,
  StitchesLogoIcon,
  GlobeIcon,
]

export default function DividerWithIcons() {
  const dividerRef = React.useRef<HTMLDivElement>()
  const [currentWidth, setCurrentWidths] = React.useState(window.innerWidth)
  const [dimension, setDimension] = React.useState({ width: 0, height: 0 })
  const pl = dimension.width * 0.01
  const pr = dimension.width * 0.03
  const iconGap = (dimension.height * 0.2) / 2
  const iconSize = dimension.height * 0.5 || 1
  const boxWidth = dimension.width - pl - pr
  const boxHeight = dimension.height
  const innerArea = boxWidth * boxHeight || 1
  const nTimes = Math.round(
    (innerArea / iconSize + 1) / Math.pow(iconsList.length, 2) / 1.2
  )
  const icons = Array(nTimes).fill(iconsList).flat()

  React.useLayoutEffect(() => {
    function handleResize() {
      if (currentWidth !== window.innerWidth) {
        setCurrentWidths(window.innerWidth)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  })

  React.useLayoutEffect(() => {
    if (dividerRef.current) {
      setDimension({
        width: dividerRef.current.clientWidth,
        height: dividerRef.current.clientHeight,
      })
    }
  }, [currentWidth])

  return (
    <div
      ref={dividerRef}
      className={stl.divider({
        css: {
          $$pr: `${pr}px`,
          $$pl: `${pl}px`,
          $$iconSize: `${iconSize}px`,
          $$iconGap: `${iconGap}px`,
        },
      })}
    >
      {icons.map((Icon, i) => (
        <div
          key={`icon-${i}`}
          data-id={i}
          className={stl.iconContainer({
            css: {
              $$rotationDelay: `${icons.length - i}00ms`,
            },
          })}
        >
          <Icon aria-hidden="true" focusable="false" />
        </div>
      ))}
    </div>
  )
}
