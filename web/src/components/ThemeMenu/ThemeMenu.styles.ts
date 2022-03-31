import { css, darkTheme, keyframes } from 'src/shared/theme'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
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

  text: '$base',
  fontWeight: '$bold',

  transition: 'background-color 350ms ease',

  '&:hover': {
    outlineColor: 'transparent',
    bgClr: '$slateA6',
  },
})

export const label = css({
  px: '$$itemPx',
  pt: '$$itemPy',
  pb: 'calc($$itemPy / 2.5)',

  text: '$sm',
  color: '$slate10',
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

  bgClr: '$slate2',

  '*': {
    color: '$slate12',
  },

  [`.${darkTheme} &`]: {
    boxShadow: 'inset 0 3px 2px -3px $colors$whiteA12',
  },

  '@media (prefers-reduced-motion: no-preference)': {
    willChange: 'transform, opacity',
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'forwards',

    '&[data-state="open"] &[data-side="bottom"]': {
      animationName: slideUpAndFade,
    },
  },
})

export const triggerIcon = css({
  size: 24,
  transition: ['color 350ms ease', 'transform 350ms ease'].join(', '),

  '[data-state="open"] > &': {
    transform: 'rotate(0.1turn)',
  },

  variants: {
    isSystem: {
      true: {
        color: '$slate11',
      },
      false: {
        color: '$headerBorderClr',
      },
    },
  },
})

export const triggerBtn = css({
  p: '$1',
  rounded: '$md',
})
