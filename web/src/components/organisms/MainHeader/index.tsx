import { useRecoilValue } from 'recoil'

import Navigation from 'src/components/molecules/MainNavigation'
import ThemeSwitcher from 'src/components/molecules/ThemeSwitcher'
import * as str from 'src/shared/store'
import * as stl from './styles'

export default function MainHeader() {
  const { blockSize } = useRecoilValue(str.mainHeaderStyles)

  return (
    <div className={stl.headerContainer({ css: { blockSize } })}>
      <header className={stl.headerContent()}>
        <div className={stl.navsContainer()}>
          <Navigation />
          <ThemeSwitcher />
        </div>
      </header>
      <div className={stl.divider()} />
    </div>
  )
}
