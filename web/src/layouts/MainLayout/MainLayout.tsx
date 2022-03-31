import MainHeader from 'src/components/MainHeader'
import * as stl from './MainLayout.styles'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <MainHeader className={stl.header()} />
      <main className={stl.main()}>{children}</main>
    </>
  )
}

export default MainLayout
