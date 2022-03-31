import { globalCss } from 'src/shared/theme'

const globalStyles = globalCss({
  '@font-face': {
    fontFamily: 'iA Quattro',
    src: 'url(fonts/iAWriterQuattroS-Regular.ttf) format("truetype")',
  },

  html: {
    fontFamily: '$quattro',
    color: '$slate12',
  },
})

export default globalStyles
