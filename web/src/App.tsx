import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RecoilRoot } from 'recoil'
import { OverlayProvider } from 'react-aria'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
import ThemeProvider from 'src/ThemeProvider'
import './index.css'

const App = () => (
  <RecoilRoot>
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
        <ThemeProvider>
          <OverlayProvider>
            <Routes />
          </OverlayProvider>
        </ThemeProvider>
      </RedwoodProvider>
    </FatalErrorBoundary>
  </RecoilRoot>
)

export default App
