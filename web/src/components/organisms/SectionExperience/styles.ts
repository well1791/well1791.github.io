import { css } from 'src/shared/theme'

import { contentInfo } from 'src/components/molecules/ExperienceCard/styles'

export const layerBg = css({
  bg: '$gray1',
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
  alignItems: 'center',
  justifyContent: 'flex-end',

  blockSize: '100%',
  maxInlineSize: '$wide',
  mx: 'auto',
  pr: '5%',

  '@wide': {
    pr: '10%',
  },
})

export const threeShadowsText = css({
  transform: 'rotate(-0.25turn) translateX(0%)',
})

export const cardsContainer = css({
  display: 'flex',
  alignItems: 'flex-start',

  pt: 80,
  blockSize: '100%',

  '@laptop': {
    alignItems: 'flex-start',
    pt: 50,
  },
})

export const cardsContent = css({
  maxInlineSize: '$wide',
  inlineSize: '100%',
  mx: 'auto',
  px: '1.25rem',

  '@laptop': {
    px: '5%',
  },
})

export const cardContainer = css({
  [`.${contentInfo()}`]: {
    maxBlockSize: '50vh',
    overflowX: 'hidden',
  },

  '@tablet': {
    inlineSize: '70%',

    [`.${contentInfo()}`]: {
      maxBlockSize: '50vh',
    },
  },

  '@laptop': {
    inlineSize: '75%',
  },
})
