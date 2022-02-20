import flow from 'lodash/fp/flow'
import format from 'date-fns/fp/format'
import { formatDuration, intervalToDuration, startOfToday } from 'date-fns'
import { useMediaQuery } from 'react-responsive'

import { useTooltip } from 'src/components/atoms/Tooltip'
import { config } from 'src/shared/theme'
import type { ExpData } from './types'

export type Props = {
  tooltipRef: React.RefObject<HTMLElement>
  data: ExpData
}

const lgDateFmt = format('MMM d, yyyy')
const smDateFmt = format("MMM/d''yy")
const durationFmt = flow(intervalToDuration, (date) =>
  formatDuration(date, { format: ['years', 'months'] })
)
const durationSmFmt = (duration: string) =>
  duration
    .replace(/s/g, '')
    .replace(
      /( years?)|( months?)|( days?)/g,
      (m: string) => ({ day: 'd', month: 'mo', year: 'yr' }[m.trim()])
    )

export default function usePresenter({ data }) {
  const tooltipRef = React.useRef()
  const isTouchDev = useMediaQuery({ query: config.media.touchDev })
  const isMobile = useMediaQuery({ query: config.media.isMobile })
  const tooltip = useTooltip(tooltipRef)
  const durationLgFmt = durationFmt({
    start: data.startDate,
    end: data.endDate === 'Present' ? startOfToday() : data.endDate,
  })

  return {
    isTouchDev,
    isMobile,
    tooltip: {
      ...tooltip,
      ref: tooltipRef,
      startDate: lgDateFmt(data.startDate),
      endDate: data.endDate === 'Present' ? 'Present' : lgDateFmt(data.endDate),
    },
    durationLgFmt,
    durationSmFmt: durationSmFmt(durationLgFmt),
    inView: true,
    header: {
      id: `experience card: ${data.title}`,
      target: data.endDate === 'Present' ? '_self' : '_blank',
      label:
        data.endDate === 'Present'
          ? `go to my resume website`
          : `go to ${data.title} website`,
    },
    touchDev: {
      startDate: isMobile
        ? smDateFmt(data.startDate)
        : lgDateFmt(data.startDate),
      endDate:
        data.endDate === 'Present'
          ? 'Present'
          : isMobile
          ? smDateFmt(data.endDate)
          : lgDateFmt(data.endDate),
    },
  }
}
