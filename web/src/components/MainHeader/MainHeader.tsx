// import { format } from 'date-fns/fp'
import { formatInTimeZone } from 'date-fns-tz/fp'

import MainNavigation from 'src/components/MainNavigation'
import ThemeMenu from 'src/components/ThemeMenu'
import * as stl from './MainHeader.styles'

export type Props = React.HTMLAttributes<HTMLDivElement>

const t: { [k in 's' | 'm']: (v: number) => number } = {
  s: (v) => v * 1000, // seconds
  m: (v) => v * t.s(60), // minutes
}

const residence = {
  tz: 'America/Guayaquil',
  title: 'Guayaquil, EC',
}

const formatTime = formatInTimeZone('HH:mm', residence.tz)

const MainHeader = ({ ...props }: Props) => {
  const [time, setTime] = React.useState(formatTime(new Date()))

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatTime(new Date()))
    }, t.s(1))

    return () => clearInterval(interval)
  })

  return (
    <header {...props} className={stl.header({ className: props.className })}>
      <div>
        <p>
          <time dateTime={time}>{time}</time>
          <span data-sm-block> - {residence.title}</span>
        </p>
      </div>

      <div className={stl.actions()}>
        <MainNavigation />
        <ThemeMenu />
      </div>
    </header>
  )
}

export default MainHeader
