import { css } from 'src/shared/theme'

export const divider1 = css({
  bg: 'black',
  inlineSize: '120vw',
  blockSize: 'max(7vh, 7vw)',
  transform: 'translateX(-10%) translateY(-25%) rotate(.005turn)',
})

export const layerBg = css({
  bg: '$gray1',
})

export const bgShadow = css({
  mr: 'clamp(25px, 25%, 25vw)',
  height: '100%',
  background: 'linear-gradient(to left, transparent, $colors$blackA8 95%)',
})

export const linesContainer = css({
  blockSize: '100vh',
  maxInlineSize: '$wide',
  mx: 'auto',
  pr: '15%',
})

export const lines = css({
  blockSize: '100%',
  boxShadow: [
    '0.5em 0px 0px $colors$whiteA12',
    '7em 0px 0px $colors$blackA8',
  ].join(','),
})

export const skillsContainer = css({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',

  blockSize: '100%',
  maxInlineSize: '$wide',
  mx: 'auto',
  pr: '5%',
})

export const skills = css({
  color: 'transparent',
  fontSize: 'calc(min(30vh) + 1rem)',
  fontWeight: 'bold',
  fontFamily: '$openSansB',
  lineHeight: 1,

  writingMode: 'sideways-lr',
  transition: 'text-shadow .8s ease',
})

export const cardsContainer = css({
  display: 'flex',
  alignItems: 'flex-start',
  pt: '10%',

  blockSize: '100%',
})

export const cardsContent = css({
  maxInlineSize: '$wide',
  inlineSize: '100%',
  mx: 'auto',
  px: 'max(5%, 30px)',
})

export const cardContainer = css({
  inlineSize: '90%',
  '@laptop': {
    inlineSize: '65%',
  },
  '@desktop': {
    inlineSize: '75%',
  },
})