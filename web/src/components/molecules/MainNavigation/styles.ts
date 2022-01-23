import { animation, css } from 'src/shared/theme'

export const container = css({
  order: 1,
  '@tablet': {
    order: 0,
  },
})

export const skipNav = css({
  position: 'absolute',
  insetBlockStart: 0,
  transform: 'translate(-110%, -120%)',
  transition: 'transform 200ms ease-in',
  py: '0.5rem',
  px: '0.75rem',
  boxShadow: '$shadows$lg',
  color: '$skipMainNavText',
  bg: '$skipMainNavBg',

  '&:focus': {
    transform: 'translate(-110%, 0)',
  },
})

export const navItem = css({
  color: '$mobMainNavMenuText',
  p: '0.25rem',
  br: '$sm',
  fontWeight: 'bold',

  '@tablet': {
    color: '$mainNavText',
  },
})

export const navItems = css({
  gap: '1.5rem',

  bg: '$mobMainNavMenuBg',
  '@supports (backdrop-filter: blur(1rem))': {
    backdropFilter: 'blur(1rem)',
  },

  blockSize: '100%',
  display: 'flex',
  flexDirection: 'column',
  py: '5rem',
  pl: '2.5rem',
  '@tablet': {
    bg: 'transparent',
    inlineSize: 'fit-content',
    ml: 'auto',
    position: 'static',
    flexDirection: 'row',
    alignItems: 'center',
    p: '0',
  },

  variants: {
    isClosingDialog: {
      true: { animation: `${animation.slideOutRight()} 400ms` },
      false: { animation: `${animation.slideInLeft()} 400ms` },
    },
  },
})

export const mobCloseMenuBtn = css({
  aspectRatio: 1,
  size: '$smBtn',
  $$position: '2rem',
  position: 'absolute',
  insetBlockStart: '$$position',
  insetInlineEnd: '$$position',
  color: '$mobMainNavMenuText',
  br: '$full',

  '& > span': {
    srOnly: true,
  },

  '& > svg': {
    margin: 'auto',
    size: 24,
  },
})

export const mobOpenMenuBtn = css({
  aspectRatio: 1,
  size: '$smBtn',
  br: '$radii$full',
  color: '$mobMainNavBtnText',
  transition: 'background-color 200ms ease-in-out',

  '@tablet': {
    display: 'none',
  },

  '& > span': {
    srOnly: true,
  },

  '& > svg': {
    margin: 'auto',
    size: '20px',
  },
})

export const mobUnderlayContainer = css({
  position: 'fixed',
  inset: 0,
  zIndex: '$zIndices$3',
  bg: '$blackA11',

  variants: {
    isClosingDialog: {
      true: { animation: `${animation.fadeOut()} 400ms` },
      false: { animation: `${animation.fadeIn()} 400ms` },
    },
  },
})

export const mobOverlayContainer = css({
  position: 'absolute',
  insetBlock: 0,
  insetInline: '35% 0',
})
