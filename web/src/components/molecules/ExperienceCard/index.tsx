import flow from 'lodash/fp/flow'
import format from 'date-fns/fp/format'
import clsx from 'clsx'
import { QuestionMarkCircledIcon, InfoCircledIcon } from '@radix-ui/react-icons'
import { formatDuration, intervalToDuration, startOfToday } from 'date-fns'
import { useMediaQuery } from 'react-responsive'

import NavBtn from 'src/components/atoms/ExperienceNavBtn'
import type { Props as NavBtnProps } from 'src/components/atoms/ExperienceNavBtn'
import TechSkill from 'src/components/atoms/TechSkill'
import type { Props as TechSkillProps } from 'src/components/atoms/TechSkill'
import Tooltip, { useTooltip } from 'src/components/atoms/Tooltip'
import { config, breakpoint } from 'src/shared/theme'
import * as stl from './styles'

export type NavAction = Omit<NavBtnProps, 'nav'>

export type ExpData = {
  title: string
  url: string
  startDate: Date
  role: 'Fullstack' | 'Frontend'
  endDate: Date | 'Present'
  skills: TechSkillProps[]
}

export type Props = React.HTMLAttributes<HTMLElement> & {
  data: ExpData
  isActive?: boolean
  prevBtn?: NavAction
  nextBtn?: NavAction
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

export default React.forwardRef<HTMLDivElement, Props>(
  ({ data, isActive = false, prevBtn, nextBtn, ...props }: Props, ref) => {
    const isTouchableDev = useMediaQuery({ query: config.media.touchable })
    const isMobile = useMediaQuery({
      query: `(max-width: ${breakpoint.mobile})`,
    })
    const tooltipRef = React.useRef()
    const { tooltipTriggerProps, tooltipOverlayProps, tooltipState } =
      useTooltip(tooltipRef)
    const durationLgFmt = durationFmt({
      start: data.startDate,
      end: data.endDate === 'Present' ? startOfToday() : data.endDate,
    })
    const inView = true
    const headerId = `experience card: ${data.title}`

    return (
      <div
        ref={ref}
        {...props}
        role="group"
        aria-hidden={!isActive}
        aria-disabled={!isActive}
        aria-current={isActive}
        aria-describedby={headerId}
        className={stl.container({ className: props.className })}
      >
        <header className={stl.header()}>
          <h3 id={headerId} className={stl.headerTitle()}>
            <a
              className={stl.headerLink()}
              href={data.url}
              target={data.endDate === 'Present' ? '_self' : '_blank'}
              rel="noreferrer"
              aria-label={
                data.endDate === 'Present'
                  ? `go to my resume website`
                  : `go to ${data.title} website`
              }
            >
              {data.title}
            </a>

            <span className={stl.headerUnderline()} />
          </h3>
        </header>

        <div className={stl.contentInfo()}>
          <div className={stl.expContainer({ inView })}>
            <div className={stl.expRole()}>
              <p>
                <span className={clsx({ inView: 'sr-only' })}>{'Role: '}</span>
                <strong>{data.role}</strong>
              </p>
            </div>

            <div className={stl.expTime()}>
              <p className="inline">
                <span className={clsx({ inView: 'sr-only' })}>
                  {'Duration: '}
                </span>
                <strong
                  aria-hidden="true"
                  className={clsx([inView && !isMobile && 'hidden'])}
                >
                  {durationSmFmt(durationLgFmt)}
                </strong>
                <strong className={clsx([(!inView || isMobile) && 'sr-only'])}>
                  {durationLgFmt}
                </strong>
              </p>

              {!isTouchableDev && (
                <div className="relative inline">
                  <button
                    ref={tooltipRef}
                    {...tooltipTriggerProps}
                    type="button"
                    className={stl.tooltipTrigger()}
                  >
                    <span className="sr-only">time period</span>
                    <QuestionMarkCircledIcon
                      aria-hidden="true"
                      focusable="false"
                    />
                  </button>

                  <Tooltip
                    state={tooltipState}
                    {...tooltipOverlayProps}
                    className={stl.tooltip({ isOpen: tooltipState.isOpen })}
                  >
                    <div className={stl.tooltipArrow()} />

                    <div className={stl.tooltipContent()}>
                      <p>
                        {'Started: '}
                        <strong>{lgDateFmt(data.startDate)}</strong>
                      </p>

                      <p>
                        {'Ended: '}
                        <strong>
                          {data.endDate === 'Present'
                            ? 'Present'
                            : lgDateFmt(data.endDate)}
                        </strong>
                      </p>
                    </div>

                    <div className={stl.tooltipIcon()}>
                      <InfoCircledIcon aria-hidden="true" focusable="false" />
                    </div>
                  </Tooltip>
                </div>
              )}
            </div>

            {isTouchableDev && (
              <>
                <div className={clsx({ inView: 'sr-only' })}>
                  <p>
                    <span>{'Started: '}</span>
                    <strong>
                      {isMobile
                        ? smDateFmt(data.startDate)
                        : lgDateFmt(data.startDate)}
                    </strong>
                  </p>
                </div>

                <div className={clsx({ inView: 'sr-only' })}>
                  <p>
                    <span>{'Ended: '}</span>
                    <strong>
                      {data.endDate === 'Present'
                        ? 'Present'
                        : isMobile
                        ? smDateFmt(data.endDate)
                        : lgDateFmt(data.endDate)}
                    </strong>
                  </p>
                </div>
              </>
            )}
          </div>

          <h4 className="sr-only">List of skills learned</h4>
          <ul title="Skills learned" className={stl.techSkillsInfo()}>
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
)
