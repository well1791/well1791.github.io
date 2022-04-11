import { render } from '@redwoodjs/testing/web'

import SkillsSection from './SkillsSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SkillsSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SkillsSection />)
    }).not.toThrow()
  })
})
