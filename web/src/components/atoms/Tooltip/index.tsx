import { useTooltip } from '@react-aria/tooltip'
import { mergeProps } from '@react-aria/utils'

type TooltipProps = Parameters<typeof useTooltip>

type Props = React.HTMLAttributes<HTMLElement> &
  TooltipProps[0] & {
    children: React.ReactNode
    state: TooltipProps[1] & {
      isMounted: boolean
    }
  }

export default function Tooltip({
  state: { isMounted, ...state },
  ...props
}: Props) {
  const { tooltipProps } = useTooltip(props, state)
  const attrs = mergeProps(props, tooltipProps)

  return isMounted && <div {...attrs}>{props.children}</div>
}

export { default as useTooltip } from './useTooltip'
