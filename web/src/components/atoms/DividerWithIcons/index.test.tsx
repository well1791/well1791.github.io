import { render, screen } from '@redwoodjs/testing/web'

import Component from '.'

describe(Component.name, () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Component />)
    }).not.toThrow()
  })

  it('renders a lot of icons', () => {
    render(<Component />)
  })
})
