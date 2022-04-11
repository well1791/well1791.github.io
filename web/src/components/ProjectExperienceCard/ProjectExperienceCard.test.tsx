import { render } from '@redwoodjs/testing/web'

import ProjectExperienceCard from './ProjectExperienceCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProjectExperienceCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProjectExperienceCard />)
    }).not.toThrow()
  })
})
