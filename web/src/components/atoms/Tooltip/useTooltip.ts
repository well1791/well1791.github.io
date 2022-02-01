import * as React from 'react'
import { useTooltipTrigger } from '@react-aria/tooltip'
import { useTooltipTriggerState } from '@react-stately/tooltip'

type Props = Parameters<typeof useTooltipTrigger>[0]

export default function useTooltip(props: Props = { delay: 200 }) {
  const state = useTooltipTriggerState(props)
  const ref = React.useRef()
  const tooltip = useTooltipTrigger(props, state, ref)

  return {
    tooltipTriggerProps: tooltip.triggerProps,
    tooltipOverlayProps: tooltip.tooltipProps,
    tooltipState: state,
  }
}
