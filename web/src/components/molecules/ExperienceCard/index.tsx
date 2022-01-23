import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { flow } from 'lodash/fp'
import { format } from 'date-fns/fp'
import { formatDuration, intervalToDuration, startOfToday } from 'date-fns'

import * as stl from './styles'

export type PrevNextExp = {
  title: string
  onClick?: () => void
}

export type TechSkill = {
  name: string
  cat?: 'php' | 'js' | 'hs' | 'rb' | 'sql' | 'liquid' | 'linux'
}

export type ExpData = {
  title: string
  url: string
  startDate: Date
  role: 'full stack' | 'front end'
  endDate: Date | 'Present'
  skills: TechSkill[]
}

export type Props = React.HTMLAttributes<HTMLElement> & {
  data: ExpData
  prevExp?: PrevNextExp
  nextExp?: PrevNextExp
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
        <div className="title">
          <h3>
            <a href={data.url} target="_blank" rel="noreferrer">
              {data.title}
            </a>
            <div className="underline" />
          </h3>
        </div>

        <p className="date-duration">
          {durationTime({
            start: data.startDate,
            end: data.endDate === 'Present' ? startOfToday() : data.endDate,
          })}
        </p>
      </header>

      <div className={stl.contentInfo()}>
        <p className="date-info">
          <span>
            <strong>{'From: '}</strong>
            {formatDate(data.startDate)}
          </span>

          <span>
            <strong>{'To: '}</strong>
            {data.endDate === 'Present' ? 'present' : formatDate(data.endDate)}
          </span>
        </p>

        <ul>
          {data.skills.map((skill) => (
            <li key={skill.name}>
              <span className="name">{skill.name}</span>
              <span className="category">{skill.cat}</span>
            </li>
          ))}
        </ul>
      </div>

      <footer className={stl.contentFooter()}>
        <div className={stl.prevExpContainer()}>
          {prevExp ? (
            <button
              type="button"
              className={stl.expNavBtn({ navTo: 'prev' })}
              onClick={prevExp.onClick}
            >
              <span className="sr-only">
                go to previous experience: {prevExp.title}
              </span>
              <div className="btn-content">
                <ChevronLeftIcon aria-hidden="true" focusable={false} />
                <span className="btn-title">prev</span>
              </div>
            </button>
          ) : (
            <p>{'No job'}</p>
          )}
        </div>

        <div className={stl.nextExpContainer()}>
          {nextExp ? (
            <button
              type="button"
              className={stl.expNavBtn({ navTo: 'next' })}
              onClick={nextExp.onClick}
            >
              <span className="sr-only">
                go to next experience: {nextExp.title}
              </span>
              <span className="btn-content">
                <span>next</span>
                <ChevronRightIcon aria-hidden="true" focusable={false} />
              </span>
            </button>
          ) : (
            <p>Present</p>
          )}
        </div>
      </footer>
    </div>
  )
}
