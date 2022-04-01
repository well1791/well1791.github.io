import { createStitches } from '@stitches/core'
import type Stitches from '@stitches/core'
import * as rc from '@radix-ui/colors'

import type * as Type from './types'
import {
  isBgLinGrd,
  isFlexStartEnd,
  isFlexSpace,
  flatVal,
  percent,
} from './utils'
import { bgGrdDir, bp, length } from './constants'

export const {
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    borderStyles: {},
    borderWidths: {
      ...length,
    },
    colors: {
      ...rc.whiteA,
      ...rc.blackA,

      ...rc.slate,
      ...rc.slateA,

      ...rc.sky,
      ...rc.skyA,
      ...rc.yellow,
      ...rc.yellowA,

      ...rc.red,
      ...rc.redA,
      ...rc.purple,
      ...rc.purpleA,
      ...rc.mint,
      ...rc.mintA,
      ...rc.amber,
      ...rc.amberA,

      headerBorderClr: '$colors$red10',
    },
    fonts: {
      quattro: 'iA Quattro',
    },
    fontSizes: {
      xs: length[3],
      sm: length['3_5'],
      base: length[4],
      lg: length['4_5'],
      xl: length[5],
      '2xl': length[6],
    },
    fontWeights: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    letterSpacings: {},
    lineHeights: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
    radii: {
      full: '9999px',
      sm: length[1],
      md: length['1_5'],
      lg: length[2],
      xl: length[3],
      '2xl': length[4],
    },
    shadows: {
      xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      none: '0 0 #0000',
    },
    sizes: {
      ...length,
      ...bp,
      prose: '65ch',
      '1of2': percent(1, 2),
      '1of3': percent(1, 3),
      '2of3': percent(2, 3),
      '1of4': percent(1, 4),
      '2of4': percent(2, 4),
      '3of4': percent(3, 4),
      '1of5': percent(1, 5),
      '2of5': percent(2, 5),
      '3of5': percent(3, 5),
      '4of5': percent(4, 5),
      '1of6': percent(1, 6),
      '2of6': percent(2, 6),
      '3of6': percent(3, 6),
      '4of6': percent(4, 6),
      '5of6': percent(5, 6),
      '1of12': percent(1, 12),
      '2of12': percent(2, 12),
      '3of12': percent(3, 12),
      '4of12': percent(4, 12),
      '5of12': percent(5, 12),
      '6of12': percent(6, 12),
      '7of12': percent(7, 12),
      '8of12': percent(8, 12),
      '9of12': percent(9, 12),
      '10of12': percent(10, 12),
      '11of12': percent(11, 12),
      full: '100%',
      screen: '100vw',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },
    space: {
      ...length,
    },
    transitions: {},
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
    },
  },
  media: {
    xs: `(min-width: ${bp.xs})`,
    sm: `(min-width: ${bp.sm})`,
    md: `(min-width: ${bp.md})`,
    lg: `(min-width: ${bp.lg})`,
    xl: `(min-width: ${bp.xl})`,
    '2xl': `(min-width: ${bp['2xl']})`,

    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
    touchDev: '(hover: none) and (pointer: coarse)',
  },
  utils: {
    // flexbox
    flexWrap: (value: Type.FlexWrap | Stitches.PropertyValue<'flexWrap'>) => ({
      flexWrap:
        {
          w: 'wrap',
          'w-r': 'wrap-reverse',
          nw: 'nowrap',
        }[value as Type.FlexWrap] ?? value,
    }),
    flexDir: (
      value: Type.FlexDir | Stitches.PropertyValue<'flexDirection'>
    ) => ({
      flexDirection:
        {
          'row-r': 'row-reverse',
          col: 'column',
          'col-r': 'column-reverse',
        }[value as Type.FlexDir] ?? value,
    }),
    items: (value: Type.FlexAlign | 'baseline' | 'stretch') => ({
      alignItems: isFlexStartEnd(value) ? `flex-${value}` : value,
    }),
    content: (value: Type.FlexAlign | keyof typeof Type.FlexSpace) => ({
      justifyContent:
        [
          { result: `flex-${value}`, isTrue: isFlexStartEnd(value) },
          { result: `space-${value}`, isTrue: isFlexSpace(value) },
        ].find(({ isTrue }) => isTrue)?.result ?? value,
    }),

    // position
    insetT: (value: Stitches.PropertyValue<'insetBlockStart'>) =>
      ((qry) => ({
        [`@supports ${qry}`]: { insetBlockStart: value },
        [`@supports not ${qry}`]: { top: value },
      }))('(inset-block-start: 1rem)'),
    insetB: (value: Stitches.PropertyValue<'insetBlockEnd'>) =>
      ((qry) => ({
        [`@supports ${qry}`]: { insetBlockEnd: value },
        [`@supports not ${qry}`]: { bottom: value },
      }))('(inset-block-end: 1rem)'),
    insetL: (value: Stitches.PropertyValue<'insetInlineStart'>) =>
      ((qry) => ({
        [`@supports ${qry}`]: { insetInlineStart: value },
        [`@supports not ${qry}`]: { left: value },
      }))('(inset-inline-start: 1rem)'),
    insetR: (value: Stitches.PropertyValue<'insetInlineEnd'>) =>
      ((qry) => ({
        [`@supports ${qry}`]: { insetInlineEnd: value },
        [`@supports not ${qry}`]: { right: value },
      }))('(inset-inline-end: 1rem)'),
    insetX: (value: Stitches.PropertyValue<'insetBlock'>) =>
      ((qry) => ({
        [`@supports ${qry}`]: {
          insetInlineStart: value,
          insetInlineEnd: value,
        },
        [`@supports not ${qry}`]: {
          left: value,
          right: value,
        },
      }))('((inset-inline-start: 1rem) and (inset-inline-end: 1rem))'),
    insetY: (value: Stitches.PropertyValue<'insetInline'>) =>
      ((qry) => ({
        [`@supports ${qry}`]: {
          insetBlockStart: value,
          insetBlockEnd: value,
        },
        [`@supports not ${qry}`]: {
          top: value,
          bottom: value,
        },
      }))('((inset-block-start: 1rem) and (inset-block-end: 1rem))'),

    // height
    h: (value: Stitches.PropertyValue<'blockSize'>) =>
      ((qry) => ({
        [`@supports ${qry}`]: { blockSize: value },
        [`@supports not ${qry}`]: { height: value },
      }))('(block-size: 1rem)'),
    maxH: (value: Stitches.PropertyValue<'maxBlockSize'>) =>
      ((qry) => ({
        [`@supports ${qry}`]: { maxBlockSize: value },
        [`@supports not ${qry}`]: { maxHeight: value },
      }))('(max-block-size: 1rem)'),
    minH: (value: Stitches.PropertyValue<'minBlockSize'>) =>
      ((qry) => ({
        [`@supports ${qry}`]: { minBlockSize: value },
        [`@supports not ${qry}`]: { minHeight: value },
      }))('(min-block-size: 1rem)'),

    // width
    w: (value: Stitches.PropertyValue<'inlineSize'>) =>
      ((qry) => ({
        [`@supports ${qry}`]: { inlineSize: value },
        [`@supports not ${qry}`]: { width: value },
      }))('(inline-size: 1rem)'),
    maxW: (value: Stitches.PropertyValue<'maxInlineSize'>) =>
      ((qry) => ({
        [`@supports ${qry}`]: { maxInlineSize: value },
        [`@supports not ${qry}`]: { maxWidth: value },
      }))('(max-inline-size: 1rem)'),
    minW: (value: Stitches.PropertyValue<'minInlineSize'>) =>
      ((qry) => ({
        [`@supports ${qry}`]: { minInlineSize: value },
        [`@supports not ${qry}`]: { minWidth: value },
      }))('(min-inline-size: 1rem)'),

    // both width and height
    size: (value: Stitches.PropertyValue<'inlineSize'>) =>
      ((qry) => ({
        [`@supports ${qry}`]: {
          inlineSize: value,
          blockSize: value,
        },
        [`@supports not ${qry}`]: {
          width: value,
          height: value,
        },
      }))('((inline-size: 1rem) and (block-size: 1rem))'),

    // padding
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingBlockStart'>) =>
      ((qry) => ({
        [`@supports ${qry}`]: { paddingBlockStart: value },
        [`@supports not ${qry}`]: { paddingTop: value },
      }))('(padding-block-start: 1rem)'),
    pr: (value: Stitches.PropertyValue<'paddingInlineEnd'>) =>
      ((qry) => ({
        [`@supports ${qry}`]: { paddingInlineEnd: value },
        [`@supports not ${qry}`]: { paddingRight: value },
      }))('(padding-inline-end: 1rem)'),
    pb: (value: Stitches.PropertyValue<'paddingBlockEnd'>) =>
      ((qry) => ({
        [`@supports ${qry}`]: { paddingBlockEnd: value },
        [`@supports not ${qry}`]: { paddingBottom: value },
      }))('(padding-block-end: 1rem)'),
    pl: (value: Stitches.PropertyValue<'paddingInlineStart'>) =>
      ((qry) => ({
        [`@supports ${qry}`]: { paddingInlineStart: value },
        [`@supports not ${qry}`]: { paddingLeft: value },
      }))('(padding-inline-start: 1rem)'),
    px: (value: Stitches.PropertyValue<'paddingInline'>) =>
      ((qry) => ({
        [`@supports ${qry}`]: {
          paddingInlineStart: value,
          paddingInlineEnd: value,
        },
        [`@supports not ${qry}`]: {
          paddingLeft: value,
          paddingRight: value,
        },
      }))('((padding-inline-start: 1rem) and (padding-inline-end: 1rem))'),
    py: (value: Stitches.PropertyValue<'paddingBlock'>) =>
      ((qry) => ({
        [`@supports ${qry}`]: {
          paddingBlockStart: value,
          paddingBlockEnd: value,
        },
        [`@supports not ${qry}`]: {
          paddingTop: value,
          paddingBottom: value,
        },
      }))('((padding-block-start: 1rem) and (padding-block-end: 1rem))'),

    // margin
    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginBlockStart'>) =>
      ((qry) => ({
        [`@supports ${qry}`]: { marginBlockStart: value },
        [`@supports not ${qry}`]: { marginTop: value },
      }))('(margin-block-start: 1rem)'),
    mr: (value: Stitches.PropertyValue<'marginInlineEnd'>) =>
      ((qry) => ({
        [`@supports ${qry}`]: { marginInlineEnd: value },
        [`@supports not ${qry}`]: { marginRight: value },
      }))('(margin-inline-end: 1rem)'),
    mb: (value: Stitches.PropertyValue<'marginBlockEnd'>) =>
      ((qry) => ({
        [`@supports ${qry}`]: { marginBlockEnd: value },
        [`@supports not ${qry}`]: { marginBottom: value },
      }))('(margin-block-end: 1rem)'),
    ml: (value: Stitches.PropertyValue<'marginInlineStart'>) =>
      ((qry) => ({
        [`@supports ${qry}`]: { marginInlineStart: value },
        [`@supports not ${qry}`]: { marginLeft: value },
      }))('(margin-inline-start: 1rem)'),
    mx: (value: Stitches.PropertyValue<'marginInline'>) =>
      ((qry) => ({
        [`@supports ${qry}`]: {
          marginInlineStart: value,
          marginInlineEnd: value,
        },
        [`@supports not ${qry}`]: {
          marginLeft: value,
          marginRight: value,
        },
      }))('((margin-inline-start: 1rem) and (margin-inline-end: 1rem))'),
    my: (value: Stitches.PropertyValue<'marginBlock'>) =>
      ((qry) => ({
        [`@supports ${qry}`]: {
          marginBlockStart: value,
          marginBlockEnd: value,
        },
        [`@supports not ${qry}`]: {
          marginTop: value,
          marginBottom: value,
        },
      }))('((margin-block-start: 1rem) and (margin-block-end: 1rem))'),

    // space
    space: ([dir, value]: [
      'x' | 'y',
      number | Stitches.PropertyValue<'marginInlineStart'>
    ]) => ({
      '> * + *': {
        x: ((qry) => ({
          [`@supports ${qry}`]: { marginInlineStart: value },
          [`@supports not ${qry}`]: { marginLeft: value },
        }))('(margin-inline-start: 1rem)'),
        y: ((qry) => ({
          [`@supports ${qry}`]: { marginBlockStart: value },
          [`@supports not ${qry}`]: { marginTop: value },
        }))('(margin-block-start: 1rem)'),
      }[dir],
    }),

    // background
    bg: (value: Stitches.PropertyValue<'backgroundImage'>) => ({
      background: value,
    }),
    bgImg: (
      value:
        | Stitches.PropertyValue<'backgroundImage'>
        | Stitches.PropertyValue<'backgroundImage'>[]
    ) => ({
      backgroundImage: flatVal(value),
    }),
    bgLinGrd: (value: Type.BgLinGrd | Type.BgLinGrd[]) => {
      const toLinGrd = ([dir, grds]: Type.BgLinGrd) =>
        `linear-gradient(to ${bgGrdDir[dir]}, ${flatVal(grds)})`

      return {
        backgroundImage: isBgLinGrd(value)
          ? toLinGrd(value)
          : flatVal(value.map(toLinGrd)),
      }
    },
    bgClr: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),

    // border-radius
    rounded: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),

    // border
    borderT: (value: Stitches.PropertyValue<'borderBlockStart'>) =>
      ((qry) => ({
        [`@supports ${qry}`]: { borderBlockStart: value },
        [`@supports not ${qry}`]: { borderTop: value },
      }))('(border-block-start: 1rem)'),
    borderB: (value: Stitches.PropertyValue<'borderBlockEnd'>) =>
      ((qry) => ({
        [`@supports ${qry}`]: { borderBlockEnd: value },
        [`@supports not ${qry}`]: { borderBottom: value },
      }))('(border-block-end: 1rem)'),
    borderL: (value: Stitches.PropertyValue<'borderInlineStart'>) =>
      ((qry) => ({
        [`@supports ${qry}`]: { borderInlineStart: value },
        [`@supports not ${qry}`]: { borderLeft: value },
      }))('(border-inline-start: 1rem)'),
    borderR: (value: Stitches.PropertyValue<'borderInlineEnd'>) =>
      ((qry) => ({
        [`@supports ${qry}`]: { borderInlineEnd: value },
        [`@supports not ${qry}`]: { borderRight: value },
      }))('(border-inline-end: 1rem)'),
    borderX: (value: Stitches.PropertyValue<'borderInlineEnd'>) =>
      ((qry) => ({
        [`@supports ${qry}`]: {
          borderInlineStart: value,
          borderInlineEnd: value,
        },
        [`@supports not ${qry}`]: {
          borderLeft: value,
          borderRight: value,
        },
      }))('((border-inline-start: 1rem) and (border-inline-end: 1rem))'),
    borderY: (value: Stitches.PropertyValue<'borderBlock'>) =>
      ((qry) => ({
        [`@supports ${qry}`]: {
          borderBlockStart: value,
          borderBlockEnd: value,
        },
        [`@supports not ${qry}`]: {
          borderTop: value,
          borderBottom: value,
        },
      }))('((border-block-start: 1rem) and (border-block-end: 1rem))'),

    // font
    text: (value: Stitches.PropertyValue<'fontSize'>) => ({ fontSize: value }),
    textOverflow: (
      value: 'truncate' | Stitches.PropertyValue<'textOverflow'>
    ) =>
      value === 'truncate'
        ? {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }
        : value,

    // screen-reader
    srOnly: (value: boolean) =>
      value
        ? {
            position: 'absolute',
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            borderWidth: 0,
          }
        : {
            position: 'static',
            width: 'auto',
            height: 'auto',
            padding: 0,
            margin: 0,
            overflow: 'visible',
            clip: 'auto',
            whiteSpace: 'normal',
          },
  },
})

export type CSS = Stitches.CSS<typeof config>

export const lightTheme = theme

export const darkTheme = createTheme({
  colors: {
    ...rc.slateDark,
    ...rc.slateDarkA,

    ...rc.redDark,
    ...rc.redDarkA,
    ...rc.purpleDark,
    ...rc.purpleDarkA,
    ...rc.mintDark,
    ...rc.mintDarkA,
    ...rc.amberDark,
    ...rc.amberDarkA,

    headerBorderClr: '$colors$sky9',
  },
})

export const themes: {
  [k in Type.ThemeType]: typeof theme | typeof darkTheme
} = {
  light: theme,
  dark: darkTheme,
}
