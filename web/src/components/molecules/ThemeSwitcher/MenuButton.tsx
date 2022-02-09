import { useMenuTriggerState } from '@react-stately/menu'
import { useButton } from '@react-aria/button'
import { useMenuTrigger } from '@react-aria/menu'

import MenuPopup from './MenuPopup'
import type { Props as MenuPopupProps } from './MenuPopup'
import * as stl from './styles'

type MenuTriggerStateProps = Parameters<typeof useMenuTriggerState>[0]

export type Props = MenuTriggerStateProps &
  MenuPopupProps & {
    trigger: {
      className?: string
      rendered: React.ReactNode
      ariaProps: React.AriaAttributes
    }
  }

export default function MenuButton({ trigger, ...props }: Props) {
  const state = useMenuTriggerState(props)
  const ref = React.useRef()
  const { menuTriggerProps, menuProps } = useMenuTrigger({}, state, ref)
  const { buttonProps: triggerProps } = useButton(menuTriggerProps, ref)

  return (
    <div className={stl.menuUnderlay()}>
      <button
        {...trigger.ariaProps}
        {...triggerProps}
        ref={ref}
        className={trigger.className}
      >
        {trigger.rendered}
      </button>

      {(state.isOpen || false) && (
        <MenuPopup
          {...props}
          {...(menuProps as unknown)}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={state.focusStrategy}
          onClose={state.close}
        />
      )}
    </div>
  )
}
