import { animation, css } from 'src/shared/theme'

export const container = css({})

export const skipNav = css({
  position: 'absolute',
  insetBlockStart: 0,
  transform: 'translate(-110%, -120%)',
  transition: 'transform 200ms ease-in',
  py: '0.5rem',
  px: '0.75rem',
  boxShadow: '$shadows$lg',
  color: '$skipMainNavText',
  fontWeight: 'bold',
  bg: '$skipMainNavBg',

  '&:focus': {
    transform: 'translate(-110%, 0)',
  },
})

export const navItem = css({
  p: '0.25rem',
  br: '$sm',

  color: '$mobMainNavMenuText',
  fontWeight: 'bold',
  fontSize: '$lg',

  transition: 'text-shadow 350ms ease',

  '@tablet': {
    fontSize: '$md',
    color: '$mainNavText',
  },

  '&:hover, &:focus': {
    textShadow: '0 0 8px white',
  },
})

export const navItems = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  blockSize: '100%',
  py: '5rem',
  pl: '2.5rem',

  bg: '$mobMainNavMenuBg',

  '@supports (backdrop-filter: blur(10px))': {
    backdropFilter: 'blur(10px)',
  },

  '@tablet': {
    bg: 'transparent',
    inlineSize: 'fit-content',
    ml: 'auto',
    position: 'static',
    flexDirection: 'row',
    alignItems: 'center',
    p: '0',

    '@supports (backdrop-filter: blur(10px))': {
      backdropFilter: 'blur(0)',
    },
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
  size: 'calc($smBtn + 10px)',
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
    size: 35,
  },
})

export const mobOpenMenuBtn = css({
  aspectRatio: 1,
  size: '$smBtn',
  br: '$radii$full',
  color: '$mainNavText',
  transition: 'background-color 200ms ease-in-out',

  '@tablet': {
    display: 'none',
  },

  '& > span': {
    srOnly: true,
  },

  '& > svg': {
    margin: 'auto',
    size: '30px',
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
  insetInline: '20% 0',

  '@mobile': {
    insetInline: '35% 0',
  },
})
