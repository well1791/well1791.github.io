import { useRecoilValue } from 'recoil'
import { useMediaQuery } from 'react-responsive'

import Navigation from 'src/components/molecules/MainNavigation'
import ThemeSwitcher from 'src/components/molecules/ThemeSwitcher'
import { breakPoint } from 'src/shared/theme'
import * as str from 'src/shared/store'
import * as stl from './styles'

export default function MainHeader() {
  const { blockSize } = useRecoilValue(str.mainHeaderStyles)
  const isMobile = useMediaQuery({ maxWidth: breakPoint.tablet })

  return (
    <div className={stl.headerContainer({ css: { blockSize } })}>
      <header className={stl.headerContent()}>
        <div className={stl.navsContainer()}>
          {isMobile && <ThemeSwitcher />}
          <Navigation />
          {!isMobile && <ThemeSwitcher />}
        </div>
      </header>
      <div className={stl.divider()} />
    </div>
  )
}
