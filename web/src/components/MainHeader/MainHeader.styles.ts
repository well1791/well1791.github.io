import { css } from 'src/shared/theme'

export const timer = css({
  pr: '$2',

  '[data-location]': {
    display: 'none',
  },

  '@md': {
    '[data-location]': {
      display: 'inline',
    },
  },
})

export const actions = css({
  $$headerActionsGap: '$space$2',

  display: 'flex',
  items: 'center',
  content: 'center',
  gap: '$$headerActionsGap',

  '@sm': {
    $$headerActionsGap: '$space$4',
  },

  '@md': {
    $$headerActionsGap: '$space$8',
  },
})

export const progressBar = css({
  w: '100%',
  h: '$$progressBarHeight',
  bgClr: '$colors$headerAccent2',

  opacity: 0,

  '@motion': {
    transition: 'opacity 350ms ease',
  },

  '& > div': {
    w: 'inherit',
    h: 'inherit',
    bgClr: '$colors$headerAccent1',

    position: 'absolute',

    '@motion': {
      transition: 'transform 350ms ease',
    },
  },
})

export const content = css({
  display: 'flex',
  items: 'center',
  content: 'between',

  h: 'calc(100% - $$progressBarHeight)',
  width: 'min(100%, $lg)',
  mx: 'auto',
  px: '$5',

  fontSize: '$base',
  fontFamily: '$quattroB',
  tracking: '$wide',
  color: '$colors$text',

  '@sm': {
    px: '$8',
  },

  '@md': {
    fontSize: '$base',
    px: '$16',
  },
})

export const container = css({
  $$progressBarHeight: '$sizes$1',

  bgClr: '$$bgClr',

  '@supports (backdrop-filter: blur(10px))': {
    bgClr: 'transparent',
    backdropFilter: 'blur(10px)',
  },

  '@motion': {
    transition: 'height 350ms ease, opacity 350ms ease',
  },

  '[data-emoji]': {
    fontSize: '$lg',
  },

  variants: {
    shouldDisplayProgressBar: {
      true: {
        boxShadow: '$shadows$lg',
        [`.${progressBar}`]: {
          opacity: 1,
        },
      },
      false: {
        h: `calc($$height + $sizes$8)`,
      },
    },
  },
})

export const backdrop = css({
  h: `calc($$height + $sizes$8)`,
  bgClr: '$headerBg',
})
