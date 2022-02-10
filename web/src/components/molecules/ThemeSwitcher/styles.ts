import { css, animation } from 'src/shared/theme'

export const menuUnderlay = css({ position: 'relative', lineHeight: 1 })

export const themeOption = css({
  outline: 'none',

  variants: {
    scope: {
      trigger: {
        '& span': { srOnly: true },
        '& svg': {
          margin: 'auto',
          size: '30px',
          color: '$themeSwitcherTriggerText',
        },
      },
      menu: {
        px: '0.5rem',
        py: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',

        '& span': {
          color: '$themeSwitcherMenuText',
          fontWeight: 'bold',
        },
        '& svg': {
          size: '28px',
          color: '$themeSwitcherMenuText',
          marginInlineEnd: '8px',
        },
      },
    },
    isUserChoice: { true: {} },
    isSelected: { true: {} },
  },

  compoundVariants: [
    {
      scope: 'trigger',
      isUserChoice: true,
      css: {
        '& svg': { color: '$themeSwitcherTriggerTextUserChoice' },
      },
    },
    {
      scope: 'menu',
      isSelected: true,
      css: {
        bg: '$themeSwitcherMenuSelectedBg',
        '& span': { color: '$themeSwitcherMenuSelectedText' },
        '& svg': { color: '$themeSwitcherMenuSelectedText' },
      },
    },
  ],
})

export const menuContainer = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  py: '0.5rem',
  br: '$md',
  minInlineSize: '8rem',
  background: '$themeSwitcherMenuBg',
  boxShadow: [
    '$md',
    'inset 0px 0px 2px -1px $colors$themeSwitcherMenuText',
  ].join(','),

  position: 'absolute',
  insetInlineEnd: '0.5rem',
  insetBlockStart: '3rem',

  animation: `${animation.fadeIn} 350ms`,
})

export const menuItem = css({
  cursor: 'pointer',
  transition: 'background-color 300ms ease',

  '&:hover, &:focus': {
    bg: '$themeSwitcherMenuBgHover',
    outline: 'unset',
  },
})

export const triggerBtn = css({
  size: '$smBtn',
  br: '50%',
})
