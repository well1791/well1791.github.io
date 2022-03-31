import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
import { ThemeProvider } from 'src/shared/theme'
import globalStyles from 'src/App.styles'
import 'src/index.css'

const App = () => {
  globalStyles()

  return (
    <ThemeProvider>
      <FatalErrorBoundary page={FatalErrorPage}>
        <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
          <RedwoodApolloProvider>
            <Routes />
          </RedwoodApolloProvider>
        </RedwoodProvider>
      </FatalErrorBoundary>
    </ThemeProvider>
  )
}

export default App
