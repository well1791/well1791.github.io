import { css, keyframes } from 'src/shared/theme'

const animation = {
  bpLeftToRight: keyframes({
    '0%': { backgroundPosition: 'left' },
    '100%': { backgroundPosition: 'right' },
  }),

  rotate1Turn: keyframes({
    to: { transform: 'rotate(1turn)' },
  }),

  skewFTW: keyframes({
    '0%': { transform: 'skew(1deg, 0)' },
    '25%': { transform: 'skew(0, 1.3deg)' },
    '50%': { transform: 'skew(-1.2deg, 1deg)' },
    '75%': { transform: 'skew(0, -1.5deg)' },
    '100%': { transform: 'skew(-1deg, 0)' },
  }),

  ellipsis: keyframes({
    '0%': { content: '    ' },
    '25%': { content: ' .  ' },
    '50%': { content: ' .. ' },
    '75%': { content: ' ...' },
    '100%': { content: '    ' },
  }),
}

export const container = css({
  $$bgBlack: '#080f11',

  backgroundColor: '$$bgBlack',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  p: '2.5rem',
})

export const outerShadow = css({
  $$wMax: '200px',
  $$shBlur: 'calc($$wMax * 0.75)',
  $$shOffset: 'calc($$wMax / 3.5)',

  height: '$$wMax',
  width: '$$wMax',
  boxShadow: [
    'orangered $$shOffset 0 $$shBlur calc($$wMax * -.4)',
    'yellow -$$shOffset 0 $$shBlur calc($$wMax * -.4)',
    'blue 0 $$shOffset $$shBlur calc($$wMax * -.35)',
    'steelblue 0 -$$shOffset $$shBlur calc($$wMax * -.35)',
  ].join(', '),
  borderRadius: '100%',
  display: 'grid',
  placeItems: 'center',
})

export const circleColor = css({
  zIndex: '100',
  width: '$$wMax',
  height: '$$wMax',
  background:
    'linear-gradient(270deg, lightgoldenrodyellow, steelblue, cyan, fuchsia, yellow)',
  backgroundSize: '400%',
  animation: [
    `3s linear 0s infinite normal none running ${animation.rotate1Turn()}`,
    `3s ease 0s infinite alternate-reverse none running ${animation.bpLeftToRight()}`,
  ].join(', '),
})

export const innerShadow = css({
  $$width: 'calc($$wMax - 4px)',
  $$shBlur: 'calc($$wMax * 2.7)',
  $$shOffset: 'calc($$wMax / 1.8)',
  $$shSpread: 'calc($$wMax * -1)',

  zIndex: '200',
  height: '$$width',
  width: '$$width',
  backgroundColor: '$$bgBlack',
  boxShadow: [
    'yellow $$shOffset 0px $$shBlur $$shSpread inset',
    'blueviolet -$$shOffset 0px $$shBlur $$shSpread inset',
    'green 0px $$shOffset $$shBlur $$shSpread inset',
    'salmon 0px -$$shOffset $$shBlur $$shSpread inset',
  ].join(', '),
  animation: `10s ease 0s infinite alternate-reverse none running ${animation.skewFTW()}`,
})

export const backdrop = css({
  display: 'grid',
  gridTemplateColumns: '1fr',
  placeItems: 'center',
  animation: `5s ease 0s infinite alternate-reverse none running ${animation.skewFTW()}`,

  [`& .${circleColor()}, & .${innerShadow()}`]: {
    gridRow: '1 / auto',
    gridColumn: '1 / auto',
    borderRadius: '100%',
  },
})

export const loadingText = css({
  color: 'white;',
  mt: 120,
  width: 75,
  '&:after': {
    whiteSpace: 'pre',
    content: '   ',
    animation: `${animation.ellipsis()} steps(1, end) 1s infinite`,
  },
})
