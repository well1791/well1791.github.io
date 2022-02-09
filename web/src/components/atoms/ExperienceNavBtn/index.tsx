import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'

import * as stl from './styles'

export type Props = React.HTMLAttributes<HTMLElement> & {
  title?: string
  nav: 'prev' | 'next'
  onClick: () => void
}

export default function ExperienceNavBtn({ title, onClick, nav }: Props) {
  return (
    <button type="button" className={stl.container({ nav })} onClick={onClick}>
      {title && (
        <span className="sr-only">
          go to {nav === 'prev' ? 'previous' : 'next'} job experience: {title}
        </span>
      )}

      <span className={stl.bg()} />

      <div className={stl.content()}>
        {nav === 'prev' && (
          <ChevronLeftIcon aria-hidden="true" focusable={false} />
        )}
        <span aria-hidden="true">{nav}</span>
        {nav === 'next' && (
          <ChevronRightIcon aria-hidden="true" focusable={false} />
        )}
      </div>
    </button>
  )
}
