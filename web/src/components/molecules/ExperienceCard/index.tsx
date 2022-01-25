import { flow } from 'lodash/fp'
import { format } from 'date-fns/fp'
import { formatDuration, intervalToDuration, startOfToday } from 'date-fns'

import NavBtn from 'src/components/atoms/ExperienceNavBtn'
import TechSkill, {
  Props as TechSkillProps,
} from 'src/components/atoms/TechSkill'
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
  return (
    <div {...props} className={stl.container({ className: props.className })}>
      <header className={stl.contentHeader()}>
        <h3>
          <a href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a>
          <span className="underline" />
        </h3>
      </header>

      <div className={stl.contentInfo()}>
        <div className="exp-info">
          <div>
            <p>
              <strong>{'Role: '}</strong>
              {data.role}
            </p>

            <p>
              <strong>{'Duration: '}</strong>
              {durationTime({
                start: data.startDate,
                end: data.endDate === 'Present' ? startOfToday() : data.endDate,
              })}
            </p>
          </div>

          <div>
            <p>
              <strong>{'From: '}</strong>
              {formatDate(data.startDate)}
            </p>

            <p>
              <strong>{'To: '}</strong>
              {data.endDate === 'Present'
                ? 'Present'
                : formatDate(data.endDate)}
            </p>
          </div>
        </div>

        <ul>
          {data.skills.map((skill) => (
            <TechSkill key={skill.name} {...skill} />
          ))}
        </ul>
      </div>

      <footer className={stl.contentFooter()}>
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
