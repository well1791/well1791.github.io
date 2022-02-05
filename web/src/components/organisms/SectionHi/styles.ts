import { css, keyframes, animation as thAnimation } from 'src/shared/theme'

const animation = {
  hi: keyframes({
    from: {
      opacity: 0,
      transform: 'translateY(110%)',
    },
    to: {
      opacity: 1,
      transform: 'rotate(-0.04turn) translateY(40%)',
    },
  }),

  slideInDivider: keyframes({
    from: { opacity: 0, transform: 'translateX(105%)' },
    '40%': { opacity: 0 },
    to: { transform: 'translateX(0px)' },
  }),

  slideInName: keyframes({
    from: {
      opacity: 0,
      transform: 'translateY(65%) translateX(35%)',
    },
    to: { transform: 'translateY(65%) translateX(0px)' },
  }),

  slideUpName: keyframes({
    to: { transform: 'translateY(0px)' },
  }),

  slideInDown: keyframes({
    from: { opacity: 0, transform: 'translateY(105%)' },
    '40%': { opacity: 0 },
    to: { transform: 'translateY(0px)' },
  }),

  slideDownRole: keyframes({
    from: { opacity: 0, transform: 'translateY(-50%)' },
    to: { transform: 'translateY(0px)' },
  }),

  shadowFrames: keyframes({
    '20%': {
      boxShadow: [
        'calc(-1em - 1rem) 0 0 0 $colors$sectionHiBgShadowFrame',
        'calc(-2em - 2rem) 0 0 0 $colors$sectionHiBgShadowFrame',
      ].join(','),
    },
    '40%': {
      boxShadow: [
        'calc(-1em - 1rem) 0 0 0 $colors$sectionHiBgShadowFrame',
        'calc(-2em - 2rem) 0 0 0 $colors$sectionHiBgShadowFrame',
        'calc(-3em - 3rem) 0 0 0 $colors$sectionHiBgShadowFrame',
      ].join(','),
    },
    '60%': {
      boxShadow: [
        'calc(-1em - 1rem) 0 0 0 $colors$sectionHiBgShadowFrame',
        'calc(-2em - 2rem) 0 0 0 $colors$sectionHiBgShadowFrame',
        'calc(-3em - 3rem) 0 0 0 $colors$sectionHiBgShadowFrame',
        'calc(-5em - 4rem) 0 0 0 $colors$sectionHiBgShadowFrame',
      ].join(','),
    },
    '80%': {
      boxShadow: [
        'calc(-1em - 1rem) 0 0 0 $colors$sectionHiBgShadowFrame',
        'calc(-2em - 2rem) 0 0 0 $colors$sectionHiBgShadowFrame',
        'calc(-3em - 3rem) 0 0 0 $colors$sectionHiBgShadowFrame',
        'calc(-5em - 4rem) 0 0 0 $colors$sectionHiBgShadowFrame',
        'calc(-8em - 5rem) 0 0 0 $colors$sectionHiBgShadowFrame',
      ].join(','),
    },
    '100%': {
      boxShadow: [
        'calc(-1em - 1rem) 0 0 0 $colors$sectionHiBgShadowFrame',
        'calc(-2em - 2rem) 0 0 0 $colors$sectionHiBgShadowFrame',
        'calc(-3em - 3rem) 0 0 0 $colors$sectionHiBgShadowFrame',
        'calc(-5em - 4rem) 0 0 0 $colors$sectionHiBgShadowFrame',
        'calc(-8em - 5rem) 0 0 0 $colors$sectionHiBgShadowFrame',
        'calc(-13em - 7rem) 0 0 0 $colors$sectionHiBgShadowFrame',
      ].join(','),
    },
  }),

  bodyContainer: keyframes({
    to: { transform: 'translateX(7.5%)' },
  }),
}

export const layerBg = css({
  background:
    'linear-gradient(to bottom, $colors$sectionHiBgTop 40%, $colors$sectionHiBgBot)',
})

export const hiContainer = css({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-start',

  maxInlineSize: '$wide',
  blockSize: '70%',
  mx: 'auto',

  '@laptop': {
    blockSize: 'auto',
  },
})

export const threeShadowsText = css({
  animation: `.7s ease-out 1s 1 normal both running ${animation.hi}`,
})

export const bgShadow = css({
  height: '100%',
  ml: 'clamp(25px, 40%, 40vw)',
  backgroundImage:
    'linear-gradient(210deg, $colors$sectionHiBgShadow1, $colors$sectionHiBgShadow2)',

  animation: [
    `0.5s ease 0s 1 normal both running ${thAnimation.fadeIn}`,
    `.5s ease 0.5s 1 normal both running ${animation.shadowFrames}`,
  ].join(','),

  '@tablet': {
    ml: 'clamp(25px, 30%, 30vw)',
  },
})

export const bodyContent = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  p: '1rem',
  br: '$md',
  bg: '$blackA9',

  animation: `1.7s ease 1s 1 normal both running ${thAnimation.fadeIn}`,

  '@tablet': {
    bg: 'transparent',
    br: '$md',
    animation: 'none',
  },
})

export const bodyContainer = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: '100%',
  transition: 'transform 350ms ease',

  '@tablet': {
    pl: 'clamp(20px, 10%, 10vw)',
  },

  '@laptop': {
    animation: `1.7s ease 4s 1 normal both running ${animation.bodyContainer}`,
  },
})

export const im = css({
  color: 'white',
  fontSize: '$lg',
  paddingInlineEnd: '0.75em',

  animation: [
    `1s ease 1.5s 1 normal both running ${thAnimation.fadeIn}`,
    `1s ease 1.5s 1 normal both running ${thAnimation.slideInRight}`,
  ].join(','),
})

export const info = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  '.highlight': {
    px: '1rem',

    color: '$whiteA12',
    fontSize: '$2xl',
    textShadow: [
      '0px 0px 10px $colors$whiteA11',
      '1px 0px 5px $colors$blackA12',
    ].join(','),
  },
})

export const name = css({
  animation: [
    `1.3s ease 1.5s 1 normal both running ${animation.slideInName}`,
    `1s ease 3s 1 normal both running ${animation.slideUpName}`,
  ].join(','),
})

export const role = css({
  animation: `1s ease 3s 1 normal both running ${animation.slideDownRole}`,
})

export const divider = css({
  width: '103%',
  blockSize: '5px',
  borderBlock: 'solid 1.5px white',
  br: '$full',
  bg: 'transparent',
  marginBlock: '0.75rem',

  animation: `.8s ease 2.75s 1 normal both running ${animation.slideInDivider}`,
})
