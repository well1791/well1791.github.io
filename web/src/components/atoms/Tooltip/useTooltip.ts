import { useTooltipTrigger } from '@react-aria/tooltip'
import { useTooltipTriggerState } from '@react-stately/tooltip'

type Props = Parameters<typeof useTooltipTrigger>[0] & {
  closeDelay?: number
}

export default function useTooltip(
  ref: React.RefObject<HTMLElement>,
  { delay = 200, closeDelay = 400, ...propsArg }: Props = {}
) {
  const [isDelayed, setIsDelayed] = React.useState(false)
  const props = { delay, ...propsArg }
  const state = useTooltipTriggerState({
    ...props,
    onOpenChange: (isOpen) => {
      if (isOpen) setIsDelayed(Boolean(closeDelay))
      if (props.onOpenChange) props.onOpenChange(isOpen)
    },
  })
  const aria = useTooltipTrigger(props, state, ref)
  const isClosed = !state.isOpen
  const isMounted = state.isOpen || isDelayed

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (isClosed && isDelayed) setIsDelayed(false)
    }, closeDelay)

    return () => clearTimeout(timeoutId)
  }, [closeDelay, isDelayed, isClosed])

  return {
    triggerProps: aria.triggerProps,
    overlayProps: aria.tooltipProps,
    state: { isMounted, ...state },
  }
}
