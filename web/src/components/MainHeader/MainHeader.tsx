import { formatInTimeZone } from 'date-fns-tz/fp'
import { useWindowScroll } from '@mantine/hooks'
import { transparentize } from 'polished'
import { set } from 'date-fns'

import MainNavigation from 'src/components/MainNavigation'
import ThemeMenu from 'src/components/ThemeMenu'
import * as stl from './MainHeader.styles'
import { tt } from 'src/shared/utils'
import { useCurrentTheme } from 'src/shared/theme'

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  css: { height: [number, string] }
}

const location = {
  tz: 'America/Guayaquil',
  title: 'My time',
}

const t = tt(1000) // ms

export const MainHeader = ({ css, ...props }: Props) => {
  const [timer, setTimer] = React.useState(new Date())
  const timerFmt = formatInTimeZone('HH:mm', location.tz, timer)
  const [contentHeight, setContentHeight] = React.useState(0)
  const [winScrollPos] = useWindowScroll()
  const scrollPos = Number(
    ((winScrollPos.y / (contentHeight + css.height[0])) * 100).toFixed(2)
  )
  const shouldDisplayProgressBar = scrollPos >= 4
  const cssProps = { $$height: css.height.join('') }
  const [theme] = useCurrentTheme()
  const isNow = (values: Parameters<typeof set>[1]) =>
    timer.getTime() >=
    set(timer, { minutes: 0, seconds: 0, ...values }).getTime()
  const emoji =
    [
      { time: { hours: 23 }, emoji: '🛌' },
      { time: { hours: 21, minutes: 30 }, emoji: '🥱' },
      { time: { hours: 20, minutes: 30 }, emoji: '📺' },
      { time: { hours: 20 }, emoji: '🛀' },
      { time: { hours: 18, minutes: 30 }, emoji: '🏋️' },
      { time: { hours: 16, minutes: 30 }, emoji: '🙂' },
      { time: { hours: 16 }, emoji: '🥪' },
      { time: { hours: 12, minutes: 30 }, emoji: '😁' },
      { time: { hours: 11, minutes: 30 }, emoji: '🍲' },
      { time: { hours: 9, minutes: 30 }, emoji: '🙂' },
      { time: { hours: 7 }, emoji: '😑' },
    ].find(({ time }) => isNow(time))?.emoji || '🛌'

  // update timer
  React.useEffect(() => {
    const intervalId = setInterval(() => setTimer(new Date()), t.s(2))

    return () => clearInterval(intervalId)
  })

  // get scroll height
  React.useLayoutEffect(() => {
    const timeoutId = setTimeout(() => {
      const [footer]: HTMLElement[] = [
        document.querySelector('#redwood-app > footer'),
      ]
      const height =
        document.body.offsetHeight - window.innerHeight - footer.offsetHeight

      setContentHeight(height)
    }, t.s(1))

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <div className={stl.backdrop({ css: cssProps })}></div>
      <header
        {...props}
        className={stl.container({
          className: props.className,
          shouldDisplayProgressBar,
          css: {
            ...cssProps,
            $$bgClr: transparentize(0.1, theme.instance.colors.headerBg.value),
          },
        })}
      >
        <div className={stl.content()}>
          <div className={stl.timer()}>
            <p>
              <time data-time dateTime={timerFmt}>
                {timerFmt}
              </time>
              <span data-location> - {location.title}</span>
              <span data-emoji aria-hidden="true">
                {emoji}
              </span>
            </p>
          </div>

          <div className={stl.actions()}>
            <MainNavigation />
            <ThemeMenu />
          </div>
        </div>

        <div className={stl.progressBar()}>
          <div style={{ transform: `translateX(${scrollPos}%)` }}></div>
        </div>
      </header>
    </>
  )
}

export default React.memo(MainHeader)
