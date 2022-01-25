import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'

import * as stl from './styles'

export type Props = {
  title: string
  nav: 'prev' | 'next'
  onClick: () => void
}

export default function ExperienceNavBtn({ title, onClick, nav }: Props) {
  return (
    <button type="button" className={stl.container({ nav })} onClick={onClick}>
      <span className="sr-only">
        go to {nav === 'prev' ? 'previous' : 'next'}: {title}
      </span>

      <span className={stl.bg()} />

      <div className={stl.content()}>
        {nav === 'prev' && (
          <ChevronLeftIcon aria-hidden="true" focusable={false} />
        )}
        <span>{nav}</span>
        {nav === 'next' && (
          <ChevronRightIcon aria-hidden="true" focusable={false} />
        )}
      </div>
    </button>
  )
}
