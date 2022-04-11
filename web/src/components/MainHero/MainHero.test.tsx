import { render } from '@redwoodjs/testing/web'

import MainHero from './MainHero'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MainHero', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MainHero />)
    }).not.toThrow()
  })
})
