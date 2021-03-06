import { css, darkTheme, keyframes } from 'src/shared/theme'

const slideUpAndFade = keyframes({
  from: { opacity: 0, transform: 'translateY(2px)' },
  to: { opacity: 1, transform: 'translateY(0)' },
})

export const check = css({
  position: 'absolute',
  left: 0,
  ml: '$$itemPx',
  w: '$$iconSize',
})

export const text = css({
  pl: 'calc($$iconSize + $2)',
})

export const rightSlot = css({
  ml: 'auto',
})

export const item = css({
  display: 'flex',
  items: 'center',

  px: '$$itemPx',
  py: 'calc($$itemPy - 2px)',
  my: 2,
  rounded: '$sm',

  position: 'relative',

  fontSize: '$base',

  cursor: 'pointer',

  transition: 'background-color 350ms ease',

  '@hover': {
    '&:hover': {
      bgClr: '$slateA3',
    },
  },
})

export const label = css({
  px: '$$itemPx',
  pt: '$$itemPy',
  pb: 'calc($$itemPy / 2.5)',

  fontSize: '$sm',
  color: '$slate12',
})

export const separator = css({
  h: 1,
  my: '$1',
  bgClr: '$$menuBorderClr',
})

export const content = css({
  $$itemPy: '$space$2_5',
  $$itemPx: '$space$3',
  $$menuBorderClr: '$colors$slateA5',

  p: '$1',
  rounded: '$sm',
  border: '1px solid $$menuBorderClr',
  minW: 170,

  boxShadow: '$md',

  bgClr: '$slate1',

  '*': {
    color: '$colors$text',
  },

  [`.${darkTheme} &`]: {
    boxShadow: 'inset 0 3px 2px -3px $colors$whiteA12',
  },

  '@motion': {
    willChange: 'transform, opacity',
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'forwards',

    '&[data-state="open"], &[data-side="bottom"]': {
      animationName: slideUpAndFade,
    },
  },
})

export const triggerIcon = css({
  size: '$$iconSize',
  transition: ['color 350ms ease', 'transform 700ms ease'].join(', '),

  '@motion': {
    '[data-state="open"] > &': {
      transform: 'rotate(-.25turn)',
    },
  },

  variants: {
    isSystem: {
      true: {
        color: '$text',
      },
      false: {
        color: '$headerAccent1',
      },
    },
  },
})

export const triggerBtn = css({
  $$iconSize: '24px',

  p: '$1',
  size: 'calc($space$1 * 2 + $$iconSize)',
  rounded: '$md',
  bg: 'transparent',
  border: 'none',

  cursor: 'pointer',
})
