import * as stl from './ProjectExperienceCard.styles'

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  id: string
  data: {
    name: string
    description: string
    techStack: {
      name: string
      cat: string
    }[]
  }
}

export const ProjectExperienceCard = ({ id, data: prj, ...props }: Props) => {
  return (
    <section
      key={id}
      aria-labelledby={id}
      {...props}
      className={stl.container({ className: props.className })}
    >
      <h5 id={id} className={stl.title()}>
        {prj.name}
      </h5>
      <p className={stl.description()}>{prj.description}</p>

      <ul className={stl.techList()}>
        {prj.techStack.map((stack) => (
          <li key={id + stack.name} className={stl.techItem()}>
            {stack.name}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default React.memo(ProjectExperienceCard)
