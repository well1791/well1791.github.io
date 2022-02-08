import { Item } from '@react-stately/collections'
import { GearIcon, Half2Icon, MoonIcon, SunIcon } from '@radix-ui/react-icons'

import useSelectedTheme from 'src/hooks/useSelectedTheme'
import type { AvThemeType } from 'src/hooks/useSelectedTheme'
import MenuButton from './MenuButton'
import * as stl from './styles'

type ThemeInfo = {
  id: AvThemeType
  name: string
  icon: React.ReactNode
}

const themeInfo: { [k in AvThemeType]: ThemeInfo } = {
  light: {
    id: 'light',
    name: 'Light',
    icon: <SunIcon aria-hidden="true" focusable={false} />,
  },
  dark: {
    id: 'dark',
    name: 'Dark',
    icon: <MoonIcon aria-hidden="true" focusable={false} />,
  },
  blackAndWhite: {
    id: 'blackAndWhite',
    name: 'B/W',
    icon: (
      <Half2Icon
        aria-hidden="true"
        focusable={false}
        style={{ transform: 'rotate(.5turn)' }}
      />
    ),
  },
  system: {
    id: 'system',
    name: 'System',
    icon: <GearIcon aria-hidden="true" focusable={false} />,
  },
}

type CSSScopeType = Parameters<typeof stl.themeOption>[0]['scope']

export default function ThemeSwitcher() {
  const [selectedTheme, setSelectedTheme] = useSelectedTheme()
  const isSelected = (name: AvThemeType) =>
    selectedTheme.isUserChoice ? name === selectedTheme.name : name === 'system'

  const ThemeRender = (props: ThemeInfo & { scope: CSSScopeType }) => (
    <div
      className={stl.themeOption({
        scope: props.scope,
        isSelected: isSelected(props.id),
        isUserChoice: selectedTheme.isUserChoice,
      })}
    >
      {props.icon}
      <span>{props.name}</span>
    </div>
  )

  return (
    <MenuButton
      onAction={setSelectedTheme}
      trigger={{
        rendered: (
          <ThemeRender {...themeInfo[selectedTheme.name]} scope="trigger" />
        ),
        className: stl.triggerBtn(),
      }}
      menu={{
        containerClassName: stl.menuContainer(),
        itemClassName: stl.menuItem(),
      }}
    >
      {Object.values(themeInfo).map((v) => (
        <Item key={v.id} textValue={v.name}>
          <ThemeRender {...v} scope="menu" />
        </Item>
      ))}
    </MenuButton>
  )
}
