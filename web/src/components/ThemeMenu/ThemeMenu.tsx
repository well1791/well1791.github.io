import * as React from 'react'
import * as Menu from '@radix-ui/react-dropdown-menu'
import { HiCheck, HiSun, HiMoon, HiDesktopComputer } from 'react-icons/hi'
import type { IconType } from 'react-icons'

import { useCurrentTheme } from 'src/shared/theme'
import * as stl from './ThemeMenu.styles'
import type { AvThemeType } from 'src/shared/theme'

const ICON_SIZE = 18

const themeIcons: { [k in AvThemeType]: IconType } = {
  light: HiSun,
  dark: HiMoon,
  system: HiDesktopComputer,
}

const ThemeMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [currentTheme, setCurrentTheme] = useCurrentTheme()
  const CurrentIcon = themeIcons[currentTheme.name]
  const isSelected = (title: string) =>
    (currentTheme.isSystem && title === 'system') ||
    (!currentTheme.isSystem && currentTheme.name === title)

  return (
    <Menu.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <Menu.Trigger
        aria-label="Theme menu"
        className={stl.triggerBtn()}
        style={{ pointerEvents: 'auto' }}
        onPointerEnter={() => setIsMenuOpen(true)}
        onPointerLeave={() => setIsMenuOpen(false)}
      >
        <CurrentIcon
          className={stl.triggerIcon({ ...currentTheme })}
          aria-hidden={true}
        />
      </Menu.Trigger>

      <Menu.Content
        loop
        className={stl.content()}
        onPointerEnter={() => setIsMenuOpen(true)}
        onPointerLeave={() => setIsMenuOpen(false)}
      >
        <Menu.Label className={stl.label()}>Theme options</Menu.Label>

        {Object.entries(themeIcons).map(([title, Icon]) => (
          <React.Fragment key={title}>
            {title === 'system' && (
              <Menu.Separator className={stl.separator()} />
            )}
            <Menu.CheckboxItem
              checked={isSelected(title)}
              onCheckedChange={() => setCurrentTheme(title as AvThemeType)}
              className={stl.item({ css: { $$iconSize: `${ICON_SIZE}px` } })}
            >
              {isSelected(title) && (
                <HiCheck size={ICON_SIZE} className={stl.check()} />
              )}
              <span className={stl.text()}>{title}</span>
              <Icon size={ICON_SIZE} className={stl.rightSlot()} />
            </Menu.CheckboxItem>
          </React.Fragment>
        ))}
      </Menu.Content>
    </Menu.Root>
  )
}

export default ThemeMenu
