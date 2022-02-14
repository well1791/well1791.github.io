import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RecoilRoot } from 'recoil'
import { OverlayProvider } from 'react-aria'
import { defaultFallbackInView } from 'react-intersection-observer'

defaultFallbackInView(false)

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
import ThemeProvider from 'src/ThemeProvider'
import './index.css'
import { globalCss } from 'src/shared/theme'

const loadingDo = (fn: (el: Element) => void) => {
  const loadings = document.getElementsByClassName('loading-container')
  ;[...loadings].forEach(fn)
}

const globalStyles = globalCss({
  html: {
    fontFamily: 'OpenSans-Regular',
  },

  '.sr-only': { srOnly: true },

  '.inline': { display: 'inline' },
  '.inline-block': { display: 'inline-block' },
  '.block': { display: 'block' },
  '.hidden': { display: 'none' },

  '.absolute': { position: 'absolute' },
  '.relative': { position: 'relative' },

  '.inset-0': {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,

    '@supports (inset: 0)': {
      inset: 0,
    },
  },
})

const App = () => {
  globalStyles()
  const [delay, setDelay] = React.useState(1200)
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
      <ThemeProvider>
        <FatalErrorBoundary page={FatalErrorPage}>
          <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
            <OverlayProvider>
              <Routes />
            </OverlayProvider>
          </RedwoodProvider>
        </FatalErrorBoundary>
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default App
