import { render } from '@redwoodjs/testing/web'

import Page from '.'

describe(Page.name, () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Page />)
    }).not.toThrow()
  })
})
