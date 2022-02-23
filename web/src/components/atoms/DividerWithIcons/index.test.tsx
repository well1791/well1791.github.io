import { render } from '@redwoodjs/testing/web'

import Component from '.'

describe(Component.name, () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Component />)
    }).not.toThrow()
  })
})
