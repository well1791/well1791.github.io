import { Router, Route } from '@redwoodjs/router'

import HomePage from 'src/pages/HomePage'
import NotFoundPage from 'src/pages/NotFoundPage'

export default function Routes() {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" prerender />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}
