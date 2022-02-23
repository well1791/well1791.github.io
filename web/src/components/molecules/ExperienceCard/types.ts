import type { Props as TechSkillProps } from 'src/components/atoms/TechSkill'
import type { Props as NavBtnProps } from 'src/components/atoms/ExperienceNavBtn'

export type NavAction = Omit<NavBtnProps, 'nav'>

export type ExpData = {
  title: string
  url: string
  startDate: Date
  role: 'Fullstack' | 'Frontend'
  endDate: Date | 'Present'
  skills: TechSkillProps[]
}
