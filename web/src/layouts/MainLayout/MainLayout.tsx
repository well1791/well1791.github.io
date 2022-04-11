import MainHeader from 'src/components/MainHeader'
import MainFooter from 'src/components/MainFooter'
import * as stl from './MainLayout.styles'

type MainLayoutProps = {
  children?: React.ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <MainHeader
        className={stl.header()}
        css={{ height: stl.vars.headerHeight }}
      />
      <main className={stl.main()}>{children}</main>
      <MainFooter
        className={stl.footer()}
        css={{ height: stl.vars.footerHeight }}
      />
    </>
  )
}

export default React.memo(MainLayout)
