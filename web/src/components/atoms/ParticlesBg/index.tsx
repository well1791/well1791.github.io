import {
  BackpackIcon,
  BellIcon,
  CameraIcon,
  GitHubLogoIcon,
  HomeIcon,
  LightningBoltIcon,
  RocketIcon,
  StarIcon,
  StitchesLogoIcon,
} from '@radix-ui/react-icons'

import * as stl from './styles'

export default function ParticlesBg() {
  return (
    <div className={stl.container()}>
      <div>
        <BackpackIcon style={{ transform: 'rotate(.05turn)' }} />
      </div>
      <div>
        <BellIcon style={{ transform: 'rotate(.9turn)' }} />
      </div>
      <div>
        <LightningBoltIcon style={{ transform: 'rotate(.05turn)' }} />
      </div>
      <div>
        <RocketIcon />
      </div>
      <div>
        <HomeIcon style={{ transform: 'rotate(.1turn)' }} />
      </div>
      <div>
        <StarIcon style={{ transform: 'rotate(.97turn)' }} />
      </div>
      <div>
        <CameraIcon style={{ transform: 'rotate(.95turn)' }} />
      </div>
      <div>
        <StitchesLogoIcon />
      </div>
      <div>
        <GitHubLogoIcon />
      </div>
    </div>
  )
}
