import { render } from '@redwoodjs/testing/web'

import ThemeMenu from './ThemeMenu'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ThemeMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ThemeMenu />)
    }).not.toThrow()
  })
})
