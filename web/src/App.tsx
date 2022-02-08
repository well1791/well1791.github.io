import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RecoilRoot } from 'recoil'
import { OverlayProvider } from 'react-aria'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
import ThemeProvider from 'src/ThemeProvider'
import './index.css'

const loadingDo = (fn: (el: Element) => void) => {
  const loadings = document.getElementsByClassName('loading-container')
  ;[...loadings].forEach(fn)
}

const App = () => {
  const [delay, setDelay] = React.useState(1000)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    loadingDo((el) => el.classList.add('opacity-1'))

    const timeoutId = isLoading
      ? setTimeout(() => {
          loadingDo((el) => el.classList.add('opacity-0'))
          setDelay(0)
        }, delay)
      : undefined

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [isLoading, delay])

  React.useEffect(() => {
    if (delay === 0) setIsLoading(false)
  }, [delay])

  React.useEffect(() => {
    const timeoutId = isLoading
      ? undefined
      : setTimeout(() => {
          loadingDo((el) => el.remove())
        }, 900)

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [isLoading])

  if (isLoading) return <></>

  return (
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
}

export default App
