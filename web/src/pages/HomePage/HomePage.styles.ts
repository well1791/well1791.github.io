import { css } from 'src/shared/theme'

export const sectionContent = css({
  maxW: '$prose',
  mx: 'auto',
  px: '$5',

  '@md': {
    px: '$7',
  },
})

export const sectionContainer = css({
  py: '$20',

  color: '$colors$text',

  '@md': {
    py: '$28',
  },
})

export const sectionHero = css({
  h: 'calc($hScreen - $$headerHeight)',
})

export const container = css({
  color: '$colors$text',

  bg: 'linear-gradient(to bottom, $colors$headerBg 20%, $colors$mainBg, $colors$mainAccent2)',
})
