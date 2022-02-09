import { QuestionMarkCircledIcon, InfoCircledIcon } from '@radix-ui/react-icons'
import flow from 'lodash/fp/flow'
import format from 'date-fns/fp/format'
import { formatDuration, intervalToDuration, startOfToday } from 'date-fns'
import { useMediaQuery } from 'react-responsive'

import NavBtn from 'src/components/atoms/ExperienceNavBtn'
import type { Props as NavBtnProps } from 'src/components/atoms/ExperienceNavBtn'
import TechSkill from 'src/components/atoms/TechSkill'
import type { Props as TechSkillProps } from 'src/components/atoms/TechSkill'
import Tooltip, { useTooltip } from 'src/components/atoms/Tooltip'
import { config } from 'src/shared/theme'
import * as stl from './styles'

export type NavAction = Omit<NavBtnProps, 'nav'>

export type ExpData = {
  title: string
  url: string
  startDate: Date
  role: 'Full stack' | 'Front end'
  endDate: Date | 'Present'
  skills: TechSkillProps[]
}

export type Props = React.HTMLAttributes<HTMLElement> & {
  data: ExpData
  prevBtn?: NavAction
  nextBtn?: NavAction
}

const formatDate = format('MMM d, yyyy')
const durationTime = flow(intervalToDuration, formatDuration)
export const durationShortTime = (durationFmt: string) =>
  durationFmt
    .replace(/s/g, '')
    .replace(
      /( years?)|( months?)|( days?)/g,
      (m: string) => ({ day: 'd', month: 'mo', year: 'yr' }[m.trim()])
    )

export default function ExperienceCard({
  data,
  prevBtn,
  nextBtn,
  ...props
}: Props) {
  const isTouchable = useMediaQuery({ query: config.media.touchable })
  const ref = React.useRef()
  const { tooltipTriggerProps, tooltipOverlayProps, tooltipState } =
    useTooltip(ref)
  const durationFmt = durationTime({
    start: data.startDate,
    end: data.endDate === 'Present' ? startOfToday() : data.endDate,
  })

  return (
    <div {...props} className={stl.container({ className: props.className })}>
      <header className={stl.header()}>
        <h3 className={stl.headerTitle()}>
          <a
            className={stl.headerLink()}
            href={data.url}
            target="_blank"
            rel="noreferrer"
          >
            {data.title}
          </a>
          <span className={stl.headerUnderline()} />
        </h3>
      </header>

      <div className={stl.contentInfo()}>
        <div className={stl.expContainer()}>
          <div className={stl.expRole()}>
            <p>{'Role: '}</p>
            <strong>{data.role}</strong>
          </div>

          <div className={stl.expTime()}>
            <p>{'Duration: '}</p>
            <strong>
              {durationFmt}
              <span
                ref={ref}
                {...tooltipTriggerProps}
                className={stl.tooltipTrigger()}
              >
                <button
                  type="button"
                  onClick={() => {
                    if (!isTouchable) return

                    if (tooltipState.isMounted) tooltipState.close()
                    else tooltipState.open()
                  }}
                >
                  <span className="sr-only">time period</span>
                  <QuestionMarkCircledIcon
                    aria-hidden="true"
                    focusable="false"
                  />
                </button>
              </span>
            </strong>

            <Tooltip
              state={tooltipState}
              {...tooltipOverlayProps}
              className={stl.tooltip({ isOpen: tooltipState.isOpen })}
            >
              <div className={stl.tooltipArrow()} />

              <div className={stl.tooltipContent()}>
                <p>
                  {'Started: '}
                  <strong>{formatDate(data.startDate)}</strong>
                </p>

                <p>
                  {'Ended: '}
                  <strong>
                    {data.endDate === 'Present'
                      ? 'Present'
                      : formatDate(data.endDate)}
                  </strong>
                </p>
              </div>

              <div className={stl.tooltipIcon()}>
                <InfoCircledIcon aria-hidden="true" focusable="false" />
              </div>
            </Tooltip>
          </div>
        </div>

        <ul className={stl.techSkillsInfo()}>
          {data.skills.map((skill) => (
            <TechSkill key={skill.name} {...skill} />
          ))}
        </ul>
      </div>

      <div className={stl.footer()}>
        <div>
          {prevBtn && (
            <NavBtn
              title={prevBtn.title}
              nav="prev"
              onClick={prevBtn.onClick}
            />
          )}
        </div>
        <div>
          {nextBtn && (
            <NavBtn
              title={nextBtn.title}
              nav="next"
              onClick={nextBtn.onClick}
            />
          )}
        </div>
      </div>
    </div>
  )
}
