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
          size: '22px',
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
  position: 'absolute',
  insetInlineEnd: '0.5rem',
  minInlineSize: '8rem',
  marginBlockStart: '1.5rem',
  py: '0.5rem',
  br: '$md',
  background: '$themeSwitcherMenuBg',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  animation: `${animation.fadeIn} 350ms`,
  boxShadow: [
    '0 2px 20px -10px rgba(255 255 255 / 0.5)',
    '0 2px 20px -10px rgba(0 0 0 / 0.5)',
  ].join(','),
})

export const menuItem = css({
  cursor: 'pointer',

  '&:hover, &:focus': {
    bg: '$themeSwitcherMenuBgHover',
    outline: 'unset',
  },
})

export const triggerBtn = css({
  size: '$smBtn',
  br: '50%',
})
