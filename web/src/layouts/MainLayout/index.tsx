import { useRecoilValue } from 'recoil'

import Header from 'src/components/organisms/MainHeader'
import * as str from 'src/shared/store'
import * as stl from './styles'

type Props = {
  mainId?: string
  children?: React.ReactNode
}

export default function MainLayout({ mainId, children }: Props) {
  const headerStyles = useRecoilValue(str.mainHeaderStyles)

  return (
    <>
      <Header />
      <main
        id={mainId}
        className={stl.mainContainer({
          css: { paddingBlockStart: headerStyles.blockSize },
        })}
      >
        <div className={stl.mainContent()}>{children}</div>
      </main>
    </>
  )
}
