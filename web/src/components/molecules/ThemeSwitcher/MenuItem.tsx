import { useMenuItem } from '@react-aria/menu'
import { mergeProps } from '@react-aria/utils'
import { useFocus } from '@react-aria/interactions'
import type { Node } from '@react-types/shared'

type MenuItemParameters = Parameters<typeof useMenuItem>
type MenuItemProps = MenuItemParameters[0]
type StateProps = MenuItemParameters[1]

export type Props = Pick<MenuItemProps, 'onAction' | 'onClose'> & {
  item: Node<unknown>
  state: StateProps
  className?: string
}

export default function MenuItem(props: Props) {
  const ref = React.useRef()
  const { menuItemProps } = useMenuItem(
    {
      key: props.item.key,
      onAction: props.onAction,
      onClose: props.onClose,
    },
    props.state,
    ref
  )

  // const [isFocused, setFocused] = React.useState(false)
  // const { focusProps } = useFocus({ onFocusChange: setFocused })
  const { focusProps } = useFocus({})

  return (
    <li
      {...mergeProps(menuItemProps, focusProps)}
      ref={ref}
      className={props.className}
    >
      {props.item.rendered}
    </li>
  )
}
