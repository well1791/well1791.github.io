import { useMenu } from '@react-aria/menu'
import { useTreeState } from '@react-stately/tree'
import { FocusScope } from '@react-aria/focus'
import { useOverlay, DismissButton } from '@react-aria/overlays'

import type { Props as MenuItemProps } from './MenuItem'

type MenuProps = Parameters<typeof useMenu>[0]
type TreeStateProps = Parameters<typeof useTreeState>[0]

export type Props = MenuProps &
  TreeStateProps &
  React.HTMLAttributes<HTMLElement> &
  Pick<MenuItemProps, 'onClose'> & {
    menu: {
      containerClassName?: string
      itemClassName?: string
    }
  }

import MenuItem from './MenuItem'

export default function MenuPopup(props: Props) {
  const state = useTreeState({ ...props, selectionMode: 'none' })

  const listRef = React.useRef()
  const { menuProps } = useMenu(props, state, listRef)

  const overlayRef = React.useRef()
  const { overlayProps } = useOverlay(
    {
      onClose: props.onClose,
      shouldCloseOnBlur: true,
      isOpen: true,
      isDismissable: true,
    },
    overlayRef
  )

  // Wrap in <FocusScope> so that focus is restored back to the
  // trigger when the menu is closed.
  // In addition, add hidden <DismissButton> components at the start and
  // end of the list to allow screen reader users to dismiss the popup easily.
  return (
    <FocusScope restoreFocus>
      <div {...overlayProps} ref={overlayRef}>
        <DismissButton onDismiss={props.onClose} />

        <ul
          {...menuProps}
          ref={listRef}
          className={props.menu.containerClassName}
        >
          {[...state.collection].map((item) => (
            <MenuItem
              key={item.key}
              item={item}
              state={state}
              onAction={props.onAction}
              onClose={props.onClose}
              className={props.menu.itemClassName}
            />
          ))}
        </ul>

        <DismissButton onDismiss={props.onClose} />
      </div>
    </FocusScope>
  )
}