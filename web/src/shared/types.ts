export type TechCategory =
  | 'css'
  | 'php'
  | 'js'
  | 'hs'
  | 'rb'
  | 'py'
  | 'sql'
  | 'liquid'
  | 'linux'

export type CompanyRole = 'Frontend' | 'Fullstack'

type NonEmptyArray<T> = [T, ...T[]]

export type CompanyProject = {
  name: string
  description: string
  team: string
  techStack: NonEmptyArray<{ name: string; cat: TechCategory }>
  startDate?: Date
  endDate?: Date | 'Present'
}

export type CompanyExperience = {
  name: string
  location: string
  url: string
  role: CompanyRole
  startDate: Date
  endDate: Date | 'Present'
  projects: NonEmptyArray<CompanyProject>
}

export type TimeAbbr = 's' | 'm' | 'h' | 'd' | 'w' | 'y'
