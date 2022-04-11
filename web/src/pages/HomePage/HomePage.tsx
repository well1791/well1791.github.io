import { MetaTags } from '@redwoodjs/web'

import ExperienceSection from 'src/components/ExperienceSection'
import SkillsSection from 'src/components/SkillsSection'
import MainHero from 'src/components/MainHero'
import * as stl from './HomePage.styles'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className={stl.container()}>
        <MainHero className={stl.sectionHero()} />

        <div className={stl.sectionContainer()}>
          <ExperienceSection className={stl.sectionContent()} />
        </div>
        <div className={stl.sectionContainer()}>
          <SkillsSection className={stl.sectionContent()} />
        </div>
      </div>
    </>
  )
}

export default HomePage
