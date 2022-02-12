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
  isActive?: boolean
  prevBtn?: NavAction
  nextBtn?: NavAction
}

const formatDate = format('MMM d, yyyy')
const durationTime = flow(intervalToDuration, formatDuration)
export const durationShortTime = (durationFmt: string) =>
  durationFmt
    .replace(/s/g, '')
    .replace(
      /(years?)|(months?)|(days?)/g,
      (m: string) => ({ day: 'd', month: 'mo', year: 'yr' }[m])
    )

export default React.forwardRef<HTMLDivElement, Props>(
  ({ data, isActive = false, prevBtn, nextBtn, ...props }: Props, ref) => {
    const tooltipRef = React.useRef()
    const isTouchable = useMediaQuery({ query: config.media.touchable })
    const { tooltipTriggerProps, tooltipOverlayProps, tooltipState } =
      useTooltip(tooltipRef)
    const durationFmt = durationTime({
      start: data.startDate,
      end: data.endDate === 'Present' ? startOfToday() : data.endDate,
    })
    const toggleTooltip = (shouldOpen?: boolean) => () => {
      const isOpen = shouldOpen === undefined ? tooltipState.isOpen : shouldOpen
      if (isOpen) tooltipState.open()
      else tooltipState.close()
    }
    const inView = false

    return (
      <div
        ref={ref}
        {...props}
        aria-hidden={!isActive}
        aria-disabled={!isActive}
        aria-current={isActive}
        className={stl.container({ className: props.className })}
      >
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
          <div className={stl.expContainer({ inView })}>
            <div className={stl.expRole()}>
              <p className={inView ? 'sr-only' : ''}>{'Role: '}</p>
              <strong>{data.role}</strong>
            </div>

            <div className={stl.expTime()}>
              <p className={inView ? 'sr-only' : ''}>{'Duration: '}</p>

              <strong aria-hidden="true" className={inView ? '' : 'sr-only'}>
                {durationShortTime(durationFmt)}
              </strong>
              <strong className={inView ? 'sr-only' : ''}>{durationFmt}</strong>

              <span
                ref={tooltipRef}
                {...tooltipTriggerProps}
                className={stl.tooltipTrigger()}
              >
                <button
                  type="button"
                  onFocus={toggleTooltip(true)}
                  onBlur={toggleTooltip(false)}
                  onClick={() => isTouchable && toggleTooltip()}
                >
                  <span className="sr-only">time period</span>
                  <QuestionMarkCircledIcon
                    aria-hidden="true"
                    focusable="false"
                  />
                </button>
              </span>

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
