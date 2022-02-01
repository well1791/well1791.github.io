import { useTooltip } from '@react-aria/tooltip'
import { mergeProps } from '@react-aria/utils'
import React from 'react'

type AriaTooltipProps = Parameters<typeof useTooltip>[0]
type TooltipState = Parameters<typeof useTooltip>[1]

type Props = React.HTMLAttributes<HTMLElement> &
  AriaTooltipProps & {
    state: TooltipState
    children: React.ReactNode
  }

export default function Tooltip({ state, ...props }: Props) {
  const { tooltipProps } = useTooltip(props, state)

  return (
    <div {...mergeProps(props, tooltipProps)}>
      {state.isOpen && props.children}
    </div>
  )
}

export { default as useTooltip } from './useTooltip'
