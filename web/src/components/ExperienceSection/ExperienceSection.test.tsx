import { render } from '@redwoodjs/testing/web'

import ExperienceSection from './ExperienceSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ExperienceSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ExperienceSection />)
    }).not.toThrow()
  })
})
