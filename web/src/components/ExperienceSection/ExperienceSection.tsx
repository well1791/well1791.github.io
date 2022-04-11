import CompanyExperienceCard from 'src/components/CompanyExperienceCard'
import { expList } from 'src/shared/constants'
import * as stl from './ExperienceSection.styles'

export type Props = React.HTMLAttributes<HTMLDivElement>

const ExperienceSection = ({ ...props }: Props) => {
  return (
    <section
      aria-labelledby="exp"
      {...props}
      className={stl.container({ className: props.className })}
    >
      <div className={stl.content()}>
        <div className={stl.titleContainer()}>
          <h2 id="exp" className={stl.title()}>
            Experience
          </h2>
        </div>

        <div className={stl.companyCards()}>
          {expList.map((exp) => (
            <CompanyExperienceCard key={exp.startDate.getTime()} data={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default React.memo(ExperienceSection)
