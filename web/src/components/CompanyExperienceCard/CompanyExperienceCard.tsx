import flow from 'lodash/flow'
import { formatDuration, intervalToDuration, startOfToday } from 'date-fns'
import { format } from 'date-fns/fp'
import { transparentize } from 'polished'

import * as stl from './CompanyExperienceCard.styles'
import ProjectExperienceCard from 'src/components/ProjectExperienceCard'
import type { Props as ProjectExperienceCardProps } from 'src/components/ProjectExperienceCard'
import { useCurrentTheme } from 'src/shared/theme'

const fmtDatePeriod = flow(intervalToDuration, (d) =>
  formatDuration(d, { format: ['years', 'months', 'days'] })
)
const fmtDate = format('Y MMM d')
const isDate = (date: unknown): date is Date => date instanceof Date

type Props = React.HTMLAttributes<HTMLDivElement> & {
  data: {
    startDate: Date
    endDate: Date | string
    name: string
    location: string
    url: string
    projects: ProjectExperienceCardProps['data'][]
    role: string
  }
}

export const CompanyExperienceCard = ({ data: exp, ...props }: Props) => {
  const sectionId = String(exp.startDate.getTime())
  const datePeriod = fmtDatePeriod({
    start: exp.startDate,
    end: isDate(exp.endDate) ? exp.endDate : startOfToday(),
  })
  const [theme] = useCurrentTheme()

  return (
    <section
      aria-labelledby={sectionId}
      {...props}
      className={stl.container({ className: props.className })}
    >
      <div
        className={stl.titleContainer({
          css: {
            $$bgClr: transparentize(0.1, theme.instance.colors.headerBg.value),
          },
        })}
      >
        <h3 id={sectionId}>
          <a
            href={exp.url}
            target="_blank"
            rel="noreferrer"
            className={stl.titleLink()}
          >
            <span className={stl.titleIndicator()}></span>
            <span className={stl.linkUnderline()}></span>
            {exp.name}
          </a>
        </h3>
      </div>

      <Section title="Role">
        <p className={stl.role()}>{exp.role}</p>
      </Section>

      <Section title="Period">
        <div className={stl.periodRange()}>
          <p>
            {'from '}
            <time dateTime={exp.startDate.toISOString()} data-to-date>
              {fmtDate(exp.startDate)}
            </time>
          </p>

          <p>
            {' to '}
            {isDate(exp.endDate) ? (
              <time dateTime={exp.endDate.toISOString()} data-to-date>
                {fmtDate(exp.endDate)}
              </time>
            ) : (
              <span data-to-date>Present</span>
            )}
          </p>

          <div>
            <p>
              {'total '}
              <span data-to-date>{datePeriod}</span>
            </p>
          </div>
        </div>
      </Section>

      <Section title="Projects">
        <div className={stl.projectsList()}>
          {exp.projects.map((prj) => (
            <ProjectExperienceCard
              key={sectionId + prj.name}
              id={sectionId + prj.name}
              data={prj}
            />
          ))}
        </div>
      </Section>
    </section>
  )
}

type SectionProps = React.PropsWithChildren<{ title: React.ReactNode }>

const Section = React.memo(({ children, title }: SectionProps) => {
  return (
    <section>
      <h4 className={stl.subtitle()}>{title}</h4>

      {children}
    </section>
  )
})

export default React.memo(CompanyExperienceCard)
