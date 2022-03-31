import { render } from '@redwoodjs/testing/web'

import MainNavigation from './MainNavigation'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MainNavigation', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MainNavigation />)
    }).not.toThrow()
  })
})
