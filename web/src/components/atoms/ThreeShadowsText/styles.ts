import { css } from 'src/shared/theme'

export const textContainer = css({
  userSelect: 'none',
  position: 'relative',

  '.sr-only': {
    srOnly: true,
  },
})

export const text = css({
  fontFamily: '$openSansB',
  lineHeight: 1,
  color: 'transparent',

  transition: 'transform .7s ease',

  position: 'absolute',

  variants: {
    shadow: {
      '0': { textShadow: '0 0 1px $$shadowColor0' },
      '1': { textShadow: '0 0 2px $$shadowColor1' },
      '2': { textShadow: '0 0 5px $$shadowColor2' },
    },
  },
})
