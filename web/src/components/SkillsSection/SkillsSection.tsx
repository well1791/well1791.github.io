import * as stl from './SkillsSection.styles'

export type Props = React.HTMLAttributes<HTMLDivElement>

const SkillsSection = ({ ...props }: Props) => {
  return (
    <section
      aria-labelledby="skills"
      {...props}
      className={stl.container({ className: props.className })}
      id="skills"
    >
      <h2 className={stl.title()}>Skills</h2>
      no skills yet <span data-emoji>🔨</span>
    </section>
  )
}

export default SkillsSection
