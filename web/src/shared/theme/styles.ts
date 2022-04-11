import { css, darkTheme } from './theme'
import type { CSS } from './theme'

type ThemeStl<
  T extends Record<string, unknown> = undefined,
  IsOptional extends boolean = false
> = {
  css: ReturnType<typeof css>
  stl: T extends undefined
    ? () => CSS
    : IsOptional extends true
    ? (args?: T) => CSS
    : (args: T) => CSS
}

const titleShadowDir = {
  left: '-2px 0px var(---titleShadowBlur, 2px) var(---titleShadowClr, var(--colors-headerAccent1))',
  right:
    '2px 0px var(---titleShadowBlur, 2px) var(---titleShadowClr, var(--colors-headerAccent1))',
}
const titleShadowCSS: CSS = {
  tracking: '$wider',
}

export const titleShadow: ThemeStl<{ shadow?: 'right' | 'left' }, true> = {
  get css() {
    return css({
      ...titleShadowCSS,
      variants: {
        shadow: {
          left: { textShadow: titleShadowDir.left },
          right: { textShadow: titleShadowDir.right },
        },
      },
    })
  },
  stl: ({ shadow } = {}): CSS => ({
    ...titleShadowCSS,
    textShadow: titleShadowDir[shadow],
  }),
}

const tagBoxCSS: CSS = {
  rounded: '$md',
  bgClr: '$blackA1',
  boxShadow: [
    'inset 0px 2px 4px -3px $colors$whiteA11',
    '0px 2px 4px -2.5px $colors$blackA11',
  ].join(','),

  [`.${darkTheme} &`]: {
    bgClr: '$whiteA3',
  },
}

export const tagBox: ThemeStl = {
  get css() {
    return css(tagBoxCSS)
  },
  stl: (): CSS => tagBoxCSS,
}

export const linkUnderlineCSS: CSS = {
  position: 'absolute',
  insetR: 0,
  insetB: 0,

  width: '1ch',
  height: '.085em',
  bgClr: 'var(---linkUnderlineClr, var(--colors-text))',

  opacity: 0,

  '@motion': {
    transition: [
      'width 350ms ease', // not proud
      'transform 350ms ease',
      'background-color 350ms ease',
    ].join(', '),
  },

  '@hover': {
    opacity: 1,

    ':hover > &': {
      width: '100%',
      transform: 'scaleY(2)',
      bgClr: 'var(---linkUnderlineHoverClr, var(--colors-headerAccent1))',
    },
  },
}

export const linkUnderline: ThemeStl = {
  get css() {
    return css(linkUnderlineCSS)
  },
  stl: (): CSS => linkUnderlineCSS,
}
