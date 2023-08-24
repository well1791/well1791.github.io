import { css, stl } from 'src/shared/theme'

export const linkUnderline = stl.linkUnderline.css

export const titleLink = css({
  pt: '$1',

  fontSize: '$2xl',
  color: 'inherit',
  transition: 'color 350ms ease',

  position: 'relative',

  '@hover': {
    textDecoration: 'none',

    '&:hover': {
      color: '$colors$headerAccent1',
    },
  },
})

export const titleIndicator = css({
  position: 'absolute',
  insetT: '$1',

  w: '1ch',
  borderT: 'solid $colors$headerAccent1 $space$1',

  '@motion': {
    transition: ['transform 350ms ease', 'opacity 250ms ease'].join(', '),
  },

  '@hover': {
    ':hover > &': {
      opacity: 0,
      transform: 'translateX(-100%)',
    },
  },
})

export const titleContainer = css({
  pt: '$7',
  pb: '$4',
  px: '$5',
  mx: '-$5',

  position: 'sticky',
  insetT: '$$headerHeight',

  bgClr: '$$bgClr',

  '@supports (backdrop-filter: blur(10px))': {
    bgClr: 'transparent',
    backdropFilter: 'blur(10px)',
  },
})

export const role = css({
  mt: '$2',

  fontSize: '$base',
  textAlign: 'right',
})

export const periodRange = css({
  spaceY: '$4',
  pl: '$5',
  py: '$1',

  fontSize: '$base',
  textAlign: 'right',

  '& [data-to-date]': {
    ...stl.tagBox.stl(),

    py: '$1',
    px: '$2',
  },

  '@md': {
    spaceX: '$3',
    '> p': {
      display: 'inline-block',
    },
  },
})

export const projectsList = css({
  spaceY: '$14',

  '@md': {
    pl: '$8',
    spaceY: '$20',
  },
})

export const subtitle = css({
  $$titleShadowBlur: '0px',
  ...stl.titleShadow.stl({ shadow: 'right' }),

  mb: '$3',

  fontSize: '$base',
  color: '$headerAccent2',
})

export const container = css({
  spaceY: '$space$7',
})
