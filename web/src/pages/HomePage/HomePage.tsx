import { MetaTags } from '@redwoodjs/web'

import * as stl from './HomePage.styles'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className={stl.container()}>
        <div>
          <p>Hey,</p>
          <h1>
            {"I'm"} Well<span>ington</span>
          </h1>
        </div>

        <section aria-labelledby="experience">
          <h2 id="experience">Experience</h2>

          <section>
            <div>
              <h3>Solo</h3>
              <time dateTime=""></time>
            </div>

            <div>
              <div>Tech stack</div>
            </div>
          </section>
        </section>
      </div>
    </>
  )
}

export default HomePage
