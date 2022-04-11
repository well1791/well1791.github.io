import { globalCss } from 'src/shared/theme'

const globalStyles = globalCss({
  'h1, h2, h3, h4, h5, h6, p, a, button, ul, ol': {
    m: 0,
    p: 0,
  },

  '@font-face': [
    {
      fontFamily: 'iA Quattro Regular',
      src: 'url(fonts/iAWriterQuattroS-Regular.ttf) format("truetype")',
    },
    {
      fontFamily: 'iA Quattro Bold',
      src: 'url(fonts/iAWriterQuattroS-Bold.ttf) format("truetype")',
    },
    {
      fontFamily: 'NotoEmoji',
      src: 'url(fonts/NotoEmoji-VariableFont_wght.ttf) format("truetype")',
    },
  ],

  body: {
    fontFamily: '$quattroR',
    color: '$colors$text',
  },

  ':focus:not(:focus-visible)': {
    outlineColor: 'transparent',
  },

  ':focus-visible:not(:hover)': {
    outline: '2px solid $colors$text',
    outlineOffset: 1,
  },

  '[data-sr-only]': {
    srOnly: true,
  },

  '[data-emoji]': {
    fontFamily: '$emoji',
    mx: '$1',
  },

  '@motion': {
    '@supports (scroll-behavior: smooth)': {
      'html, html:focus-within': {
        scrollBehavior: 'smooth',
      },
    },
  },
})

export default globalStyles
