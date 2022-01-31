import { css, keyframes } from 'src/shared/theme'

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

  slideInUp: keyframes({
    from: { opacity: 0, transform: 'translateY(-105%)' },
    '40%': { opacity: 0 },
    to: { transform: 'translateY(0px)' },
  }),

  slideInLeft: keyframes({
    from: { opacity: 0, transform: 'translateX(-105%)' },
    '40%': { opacity: 0 },
    to: { transform: 'translateX(0px)' },
  }),

  slideInRight: keyframes({
    from: { opacity: 0, transform: 'translateX(105%)' },
    '40%': { opacity: 0 },
    to: { transform: 'translateX(0px)' },
  }),

  slideInDown: keyframes({
    from: { opacity: 0, transform: 'translateY(105%)' },
    '40%': { opacity: 0 },
    to: { transform: 'translateY(0px)' },
  }),

  shadowFrames: keyframes({
    '25%': {
      boxShadow: [
        'calc(-1em - 1rem) 0 0 0 $colors$blackA7',
        'calc(-2em - 2rem) 0 0 0 $colors$blackA7',
      ].join(','),
    },
    '50%': {
      boxShadow: [
        'calc(-1em - 1rem) 0 0 0 $colors$blackA7',
        'calc(-2em - 2rem) 0 0 0 $colors$blackA7',
        'calc(-3em - 3rem) 0 0 0 $colors$blackA7',
      ].join(','),
    },
    '75%': {
      boxShadow: [
        'calc(-1em - 1rem) 0 0 0 $colors$blackA7',
        'calc(-2em - 2rem) 0 0 0 $colors$blackA7',
        'calc(-3em - 3rem) 0 0 0 $colors$blackA7',
        'calc(-5em - 4rem) 0 0 0 $colors$blackA7',
      ].join(','),
    },
    to: {
      boxShadow: [
        'calc(-1em - 1rem) 0 0 0 $colors$blackA6',
        'calc(-2em - 2rem) 0 0 0 $colors$blackA6',
        'calc(-3em - 3rem) 0 0 0 $colors$blackA6',
        'calc(-5em - 4rem) 0 0 0 $colors$blackA6',
        'calc(-8em - 5rem) 0 0 0 $colors$blackA6',
        'calc(-13em - 7rem) 0 0 0 $colors$blackA6',
      ].join(','),
    },
  }),
}

export const layerBg = css({
  background: 'linear-gradient(to bottom, $gray12 40%, $gray1)',
})

export const hiContainer = css({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-start',

  maxInlineSize: '$wide',
  mx: 'auto',
})

export const threeShadowsText = css({
  animation: `1.5s ease-in 0s 1 normal both running ${animation.hi}`,
})

export const bgShadow = css({
  ml: 'clamp(25px, 10%, 10vw)',
  height: '100%',
  background: 'linear-gradient(210deg, $colors$blackA12, $colors$blackA11)',

  animation: [
    `0.5s ease 0s 1 normal both running ${animation.slideInRight}`,
    `0.5s linear 0.5s 1 normal both running ${animation.shadowFrames}`,
  ].join(','),

  '@tablet': {
    ml: 'clamp(25px, 30%, 30vw)',
  },
})

export const bodyContainer = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: '100%',
  pl: 'clamp(20px, 10%, 10vw)',
})

export const im = css({
  color: 'white',
  fontSize: '$lg',
  paddingInlineEnd: '0.75em',

  animation: `1s ease 0s 1 normal both running ${animation.slideInLeft}`,
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
  animation: `1.5s ease 0.5s 1 normal both running ${animation.slideInUp}`,
})

export const role = css({
  animation: `1.5s ease 0.5s 1 normal both running ${animation.slideInDown}`,
})

export const divider = css({
  width: '103%',
  blockSize: '5px',
  borderBlock: 'solid 1.5px white',
  br: '$full',
  bg: 'black',
  marginBlock: '0.75rem',

  position: 'relative',
  animation: `1s ease 0.5s 1 normal both running ${animation.slideInRight}`,
})
