import * as React from 'react'
import * as Menu from '@radix-ui/react-dropdown-menu'
import { HiCheck, HiSun, HiMoon, HiDesktopComputer } from 'react-icons/hi'
import type { IconType } from 'react-icons'

import { useCurrentTheme } from 'src/shared/theme'
import * as stl from './ThemeMenu.styles'
import type { AvThemeNameType } from 'src/shared/theme'

const ICON_SIZE = 18

const themeIcons: { [k in AvThemeNameType]: IconType } = {
  light: HiSun,
  dark: HiMoon,
  system: HiDesktopComputer,
}

export const ThemeMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [currentTheme, setCurrentTheme] = useCurrentTheme()
  const CurrentIcon = themeIcons[currentTheme.name]
  const isSelected = (title: string) =>
    (currentTheme.isSystem && title === 'system') ||
    (!currentTheme.isSystem && currentTheme.name === title)
  const onPointer =
    (isOpen: boolean) => (evt: React.PointerEvent<HTMLElement>) => {
      if (evt.pointerType === 'mouse') setIsMenuOpen(isOpen)
    }

  return (
    <Menu.Root open={isMenuOpen} onOpenChange={setIsMenuOpen} modal={false}>
      <Menu.Trigger
        aria-label="Theme menu"
        className={stl.triggerBtn()}
        onPointerEnter={onPointer(true)}
        onPointerLeave={onPointer(false)}
      >
        <CurrentIcon
          className={stl.triggerIcon({ ...currentTheme })}
          aria-hidden={true}
        />
      </Menu.Trigger>

      <Menu.Content
        loop
        className={stl.content()}
        onPointerEnter={onPointer(true)}
        onPointerLeave={onPointer(false)}
      >
        <Menu.Label className={stl.label()}>Theme options</Menu.Label>

        {Object.entries(themeIcons).map(([title, Icon]) => (
          <React.Fragment key={title}>
            {title === 'system' && (
              <Menu.Separator className={stl.separator()} />
            )}
            <Menu.CheckboxItem
              checked={isSelected(title)}
              onCheckedChange={() => setCurrentTheme(title as AvThemeNameType)}
              className={stl.item({ css: { $$iconSize: `${ICON_SIZE}px` } })}
            >
              {isSelected(title) && (
                <HiCheck size={ICON_SIZE} className={stl.check()} />
              )}
              <span className={stl.text()}>{title}</span>
              <Icon
                aria-hidden="true"
                focusable="false"
                size={ICON_SIZE}
                className={stl.rightSlot()}
              />
            </Menu.CheckboxItem>
          </React.Fragment>
        ))}
      </Menu.Content>
    </Menu.Root>
  )
}

export default React.memo(ThemeMenu)
