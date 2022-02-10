import { Cross2Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import { OverlayContainer } from '@react-aria/overlays'
import { useRecoilValue } from 'recoil'
import { useOverlayTriggerState } from '@react-stately/overlays'
import { useButton } from '@react-aria/button'
import { useMediaQuery } from 'react-responsive'

import ModalDialog from 'src/components/molecules/ModalDialog'
import { breakPoint, config, css } from 'src/shared/theme'
import * as str from 'src/shared/store'
import * as stl from './styles'

export type NavItem = {
  href: string
  title: string
  onClick?: () => void
}

export default function MainNavigation() {
  const navState = useRecoilValue(str.mainNavItems)
  const dialogState = useOverlayTriggerState({})
  const isMobile = useMediaQuery({ maxWidth: breakPoint.tablet })
  const isMotionReduced = useMediaQuery({ query: config.media.motion })
  const openMenuRef = React.useRef()
  const closeMenuRef = React.useRef()
  const [isClosingDialog, setIsClosingDialog] = React.useState(false)

  const closeDialog = () => {
    if (isMotionReduced) {
      dialogState.close()
    } else {
      setIsClosingDialog(true)

      const timeoutId = setTimeout(() => {
        clearTimeout(timeoutId)
        setIsClosingDialog(false)
        dialogState.close()
      }, 350)
    }
  }

  const { buttonProps: openMenuProps } = useButton(
    { onPress: dialogState.open },
    openMenuRef
  )
  const { buttonProps: closeMenuProps } = useButton(
    { onPress: closeDialog },
    closeMenuRef
  )

  const navItems = (
    <ul className={stl.navItems({ isClosingDialog })}>
      {navState.items.map((nav) => (
        <li key={nav.href}>
          <a
            href={nav.href}
            className={stl.navItem()}
            onClick={() => {
              if (isMobile) closeDialog()
              if (nav.onClick) nav.onClick()
            }}
          >
            {nav.title}
          </a>
        </li>
      ))}
    </ul>
  )

  if (navState.items.length === 0) return null

  return (
    <div className={stl.container()}>
      {!isMobile && navState.skipTo && (
        <a
          href={navState.skipTo.href}
          className={stl.skipNav()}
          onClick={navState.skipTo.onClick}
        >
          {navState.skipTo.title}
        </a>
      )}

      <nav aria-label="Main Navigation">
        <button
          {...openMenuProps}
          ref={openMenuRef}
          className={stl.mobOpenMenuBtn()}
        >
          <span>Menu</span>
          <HamburgerMenuIcon aria-hidden="true" focusable={false} />
        </button>

        {!isMobile && navItems}
        {isMobile && dialogState.isOpen && (
          <OverlayContainer>
            <ModalDialog
              isOpen
              isDismissable
              title="Main navigation"
              onClose={closeDialog}
              titleCss="sr-only"
              underlayCss={stl.mobUnderlayContainer({ isClosingDialog })}
              overlayCss={stl.mobOverlayContainer()}
            >
              {navItems}
              <button
                {...closeMenuProps}
                ref={closeMenuRef}
                className={stl.mobCloseMenuBtn()}
                aria-label="Close main navigation menu"
              >
                <span aria-hidden="true">Close</span>
                <Cross2Icon aria-hidden="true" focusable={false} />
              </button>
            </ModalDialog>
          </OverlayContainer>
        )}
      </nav>
    </div>
  )
}
