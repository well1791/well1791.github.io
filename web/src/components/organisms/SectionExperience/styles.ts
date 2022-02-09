import { css } from 'src/shared/theme'

import { contentInfo } from 'src/components/molecules/ExperienceCard/styles'

export const layerBg = css({
  bg: '$sectionExpBg',
})

export const bgShadow = css({
  mr: 'clamp(25px, 25%, 25vw)',
  height: '100%',
  background:
    'linear-gradient(90deg, $sectionExpBgShadow1 5%, $sectionExpBgShadow2, $sectionExpBgShadow3 80%, $sectionExpBgShadow4)',
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
    '0.5em 0px 0px $colors$sectionExpBgShadowLine1',
    '7em 0px 0px $colors$sectionExpBgShadowLine2',
  ].join(','),
})

export const threeShadowsContainer = css({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',

  blockSize: '100%',
  maxInlineSize: '$wide',
  mx: 'auto',
  pt: 'max(70px, 8vh + 40px)',

  '@laptop': {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    pt: 0,
    pr: '5%',
  },

  '@wide': {
    pr: '10%',
  },
})

export const threeShadowsText = css({
  $$size: 'calc(20vw + 1rem)',
  blockSize: '$$size',
  fontSize: '$$size',
  inlineSize: '100%',
  px: '30px',

  display: 'flex',
  justifyContent: 'center',

  '@laptop': {
    $$size: 'calc(30vh + 1rem)',
    inlineSize: '$$size',
    display: 'block',

    transform: 'rotate(-0.25turn)',
  },
})

export const cardsContainer = css({
  display: 'flex',
  alignItems: 'flex-start',

  pt: '35vw',

  '@laptop': {
    alignItems: 'center',
    pt: 0,
    height: '100%',
  },
})

export const cardsContent = css({
  maxInlineSize: '$wide',
  inlineSize: '100%',
  mx: 'auto',
  px: '1.25rem',

  position: 'relative',

  '@laptop': {
    px: '5%',
  },
})

export const cardContainer = css({
  [`.${contentInfo()}`]: {
    overflowX: 'hidden',
    maxBlockSize: 'calc(55vh - 100px)',

    '@laptop': {
      maxBlockSize: 'calc(55vh)',
    },
  },

  '@laptop': {
    inlineSize: '75%',
  },
})
