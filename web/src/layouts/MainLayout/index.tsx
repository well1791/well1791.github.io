import { useRecoilValue } from 'recoil'

import Header from 'src/components/organisms/MainHeader'
import * as str from 'src/shared/store'
import * as stl from './styles'

type Props = {
  children?: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  const headerStyles = useRecoilValue(str.mainHeaderStyles)

  return (
    <>
      <Header />
      <main
        className={stl.mainContainer({
          css: { paddingBlockStart: headerStyles.blockSize },
        })}
      >
        <div>{children}</div>
      </main>
    </>
  )
}
