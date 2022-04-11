import { render } from '@redwoodjs/testing/web'

import CompanyExperienceCard from './CompanyExperienceCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CompanyExperienceCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CompanyExperienceCard />)
    }).not.toThrow()
  })
})
