import { QuestionMarkCircledIcon, InfoCircledIcon } from '@radix-ui/react-icons'
import { flow } from 'lodash/fp'
import { format } from 'date-fns/fp'
import { formatDuration, intervalToDuration, startOfToday } from 'date-fns'

import NavBtn from 'src/components/atoms/ExperienceNavBtn'
import TechSkill, {
  Props as TechSkillProps,
} from 'src/components/atoms/TechSkill'
import Tooltip, { useTooltip } from 'src/components/atoms/Tooltip'
import * as stl from './styles'

export type NavAction = {
  title: string
  onClick?: () => void
}

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
  prevExp?: NavAction
  nextExp?: NavAction
}

const formatDate = format('MMM d, yyyy')
const durationTime = flow(intervalToDuration, formatDuration)

export default function ExperienceCard({
  data,
  prevExp,
  nextExp,
  ...props
}: Props) {
  const { tooltipTriggerProps, tooltipOverlayProps, tooltipState } =
    useTooltip()

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
            <strong>{'Role: '}</strong>
            <p>{data.role}</p>
          </div>

          <div {...tooltipTriggerProps} className={stl.expTime()}>
            <strong>{'Duration: '}</strong>
            <p className={stl.tooltipTrigger()}>
              {durationTime({
                start: data.startDate,
                end: data.endDate === 'Present' ? startOfToday() : data.endDate,
              })}
              <QuestionMarkCircledIcon
                aria-hidden="true"
                focusable="false"
                style={{ display: 'inline' }}
              />
            </p>

            <Tooltip
              state={tooltipState}
              {...tooltipOverlayProps}
              className={stl.tooltip({ isOpen: tooltipState.isOpen })}
            >
              <p>
                <strong>{'Started: '}</strong>
                {formatDate(data.startDate)}
              </p>

              <p>
                <strong>{'Ended: '}</strong>
                {data.endDate === 'Present'
                  ? 'Present'
                  : formatDate(data.endDate)}
              </p>
              <InfoCircledIcon aria-hidden="true" focusable="false" />
            </Tooltip>
          </div>
        </div>

        <ul className={stl.techSkillsInfo()}>
          {data.skills.map((skill) => (
            <TechSkill key={skill.name} {...skill} />
          ))}
        </ul>
      </div>

      <footer className={stl.footer()}>
        <div>
          {prevExp && (
            <NavBtn
              nav="prev"
              title={prevExp.title}
              onClick={prevExp.onClick}
            />
          )}
        </div>

        <div>
          {nextExp && (
            <NavBtn
              nav="next"
              title={nextExp.title}
              onClick={nextExp.onClick}
            />
          )}
        </div>
      </footer>
    </div>
  )
}
