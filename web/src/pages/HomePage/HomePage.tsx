import { MetaTags } from '@redwoodjs/web'
import { Parallax, IParallax } from '@react-spring/parallax'
import { useSetRecoilState } from 'recoil'

import MainLayout from 'src/layouts/MainLayout'
import SectionHi from 'src/components/organisms/SectionHi'
import SectionExperience from 'src/components/organisms/SectionExperience'
import * as str from 'src/shared/store'

const section = {
  hi: { page: 0, id: 'hi' },
  experience: { page: 1, id: 'experience' },
}

export default function HomePage() {
  const parallaxRef = React.useRef<IParallax>()
  const setMainNavItems = useSetRecoilState(str.mainNavItems)

  React.useEffect(() => {
    const navItems = Object.values(section).map((val) => ({
      href: `#${val.id}`,
      title: val.id,
      onClick: () => parallaxRef.current.scrollTo(val.page),
    }))
    const skipToNav = {
      href: `#${section.hi.id}`,
      title: 'Skip Navigation',
      onClick: () => parallaxRef.current.scrollTo(section.hi.page),
    }

    setMainNavItems({
      items: navItems,
      skipTo: skipToNav,
    })
  }, [setMainNavItems])

  return (
    <>
      <MetaTags
        title="Wellington Mendoza - Frontend React Developer"
        description="Wellington Mendoza resume page. Frontend React Developer."
      />

      <MainLayout>
        <Parallax
          ref={parallaxRef}
          pages={Object.values(section).length}
          style={{ insetBlockStart: 0, insetInlineStart: 0 }}
        >
          <SectionHi {...section.hi} />
          <SectionExperience {...section.experience} />
        </Parallax>
      </MainLayout>
    </>
  )
}
