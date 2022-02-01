import { createStitches } from '@stitches/core'
import type Stitches from '@stitches/core'
import * as rc from '@radix-ui/colors'

export const breakPoint = {
  mobile: '640px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1280px',
  wide: '1536px',
}

export const {
  css,
  globalCss,
  keyframes,
  getCssText,
  theme: lightTheme,
  createTheme,
  config,
} = createStitches({
  theme: {
    borderStyles: {},
    borderWidths: {},
    colors: {
      // grays
      ...rc.gray,
      ...rc.mauve,
      ...rc.slate,
      ...rc.sage,
      ...rc.olive,
      ...rc.sand,

      // brights
      ...rc.sky,
      ...rc.mint,
      ...rc.lime,
      ...rc.amber,

      ...rc.crimson,
      ...rc.pink,
      ...rc.purple,
      ...rc.violet,
      ...rc.indigo,
      ...rc.cyan,
      ...rc.teal,
      ...rc.orange,

      // grays A
      ...rc.grayA,
      ...rc.mauveA,
      ...rc.slateA,
      ...rc.sageA,
      ...rc.oliveA,
      ...rc.sandA,

      // brights A
      ...rc.skyA,
      ...rc.mintA,
      ...rc.limeA,
      ...rc.amberA,

      ...rc.crimsonA,
      ...rc.pinkA,
      ...rc.purpleA,
      ...rc.violetA,
      ...rc.indigoA,
      ...rc.cyanA,
      ...rc.tealA,
      ...rc.orangeA,

      ...rc.whiteA,
      ...rc.blackA,

      // aliases
      skipMainNavText: '$gray12',
      skipMainNavBg: 'white',

      mainHeaderBg: '$amber5',

      mobNavText: 'white',
      mobMainNavMenuBg: 'white',
      mobMainNavMenuText: '$indigo11',
      mobMainNavBtnText: 'white',

      mainNavText: '$indigo11',
      mainHeaderBorder: 'white',

      themeSwitcherTriggerText: '$gray12',
      themeSwitcherTriggerTextUserChoice: '$amber9',
      themeSwitcherMenuBg: 'white',
      themeSwitcherMenuBgHover: '$blackA7',
      themeSwitcherMenuText: '$gray12',
      themeSwitcherMenuSelectedText: '$gray1',
      themeSwitcherMenuSelectedBg: 'black',

      sectionHiBg1: '$cyan10',
      sectionHiTitleSh1: 'white',
      sectionHiTitleSh2: '$whiteA11',
      sectionHiTitleSh3: '$whiteA8',

      sectionExpTitleSh1: 'black',
      sectionExpTitleSh2: '$blackA10',
      sectionExpTitleSh3: '$blackA8',
    },
    fonts: {
      openSansB: 'OpenSans-Bold, sans-serif',
      openSansR: 'OpenSans-Regular, sans-serif',
    },
    fontSizes: {
      xs: 'clamp(0.69rem, 0.71rem + -0.08vw, 0.63rem)',
      sm: 'clamp(0.78rem, 0.76rem + 0.09vw, 0.84rem)',
      md: 'clamp(0.88rem, 0.80rem + 0.34vw, 1.13rem)',
      lg: 'clamp(0.98rem, 0.83rem + 1.70vw, 2.3rem)',
      xl: 'clamp(1.11rem, 0.83rem + 2.21vw, 3.2rem)',
      '2xl': 'clamp(1.25rem, 0.81rem + 2.93vw, 4.5rem)',
      '3xl': 'clamp(1.40rem, 0.74rem + 3.93vw, 5rem)',
    },
    fontWeights: {},
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
      sm: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
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
      ...breakPoint,
      prose: '65ch',
      smBtn: '35px',
      mdBtn: '60px',
      lgBtn: '72px',
    },
    space: {},
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
    mobile: `(min-width: ${breakPoint.mobile})`,
    tablet: `(min-width: ${breakPoint.tablet})`,
    laptop: `(min-width: ${breakPoint.laptop})`,
    desktop: `(min-width: ${breakPoint.desktop})`,
    wide: `(min-width: ${breakPoint.wide})`,

    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  utils: {
    p: (
      value:
        | Stitches.PropertyValue<'paddingInline'>
        | Stitches.PropertyValue<'paddingBlock'>
    ) => ({
      paddingInline: value,
      paddingBlock: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingBlockStart'>) => ({
      paddingBlockStart: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingInlineEnd'>) => ({
      paddingInlineEnd: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBlockEnd'>) => ({
      paddingBlockEnd: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingInlineStart'>) => ({
      paddingInlineStart: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingInline'>) => ({
      paddingInline: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingBlock'>) => ({
      paddingBlock: value,
    }),

    m: (
      value:
        | Stitches.PropertyValue<'marginInline'>
        | Stitches.PropertyValue<'marginBlock'>
    ) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginBlockStart'>) => ({
      marginBlockStart: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginInlineEnd'>) => ({
      marginInlineEnd: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBlockEnd'>) => ({
      marginBlockEnd: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginInlineStart'>) => ({
      marginInlineStart: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginInline'>) => ({
      marginInline: value,
    }),
    my: (value: Stitches.PropertyValue<'marginBlock'>) => ({
      marginBlock: value,
    }),

    size: (value: Stitches.PropertyValue<'inlineSize'>) => ({
      inlineSize: value,
      blockSize: value,
    }),

    bg: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),
    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),

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

export const darkTheme = createTheme({
  colors: {
    skipMainNavText: '$gray12',
    skipMainNavBg: 'white',

    mainHeaderBg: 'black',

    mobNavText: 'white',
    mobMainNavMenuBg: 'white',
    mobMainNavMenuText: '$gray12',
    mobMainNavBtnText: 'white',

    mainNavText: '$gray1',
    mainHeaderBorder: 'white',

    themeSwitcherTriggerText: '$gray1',
    themeSwitcherTriggerTextUserChoice: '$gray1',
    themeSwitcherMenuBg: 'white',
    themeSwitcherMenuBgHover: '$blackA7',
    themeSwitcherMenuText: '$gray12',
    themeSwitcherMenuSelectedText: '$gray1',
    themeSwitcherMenuSelectedBg: 'black',
  },
})

export const blackAndWhiteTheme = createTheme({
  colors: {
    skipMainNavText: '$gray12',
    skipMainNavBg: 'white',

    mainHeaderBg: 'black',

    mobNavText: 'white',
    mobMainNavMenuBg: 'white',
    mobMainNavMenuText: '$gray12',
    mobMainNavBtnText: 'white',

    mainNavText: '$gray1',
    mainHeaderBorderStart: 'white',
    mainHeaderBorderEnd: 'black',

    themeSwitcherTriggerText: '$gray1',
    themeSwitcherTriggerTextUserChoice: '$gray1',
    themeSwitcherMenuBg: 'white',
    themeSwitcherMenuBgHover: '$blackA7',
    themeSwitcherMenuText: '$gray12',
    themeSwitcherMenuSelectedText: '$gray1',
    themeSwitcherMenuSelectedBg: 'black',

    sectionHiBg1: '$gray12',
    sectionHiTitleSh1: 'white',
    sectionHiTitleSh2: '$whiteA11',
    sectionHiTitleSh3: '$whiteA8',

    sectionExpTitleSh1: 'black',
    sectionExpTitleSh2: '$blackA9',
    sectionExpTitleSh3: '$blackA9',
  },
})

export const theme = {
  light: lightTheme,
  dark: darkTheme,
  blackAndWhite: blackAndWhiteTheme,
}

export type ThemeType = keyof typeof theme

export const isValidTheme = (value?: string): value is ThemeType =>
  Boolean(theme[value])

export const animation = {
  fadeIn: keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 },
  }),

  fadeOut: keyframes({
    from: { opacity: 1 },
    to: { opacity: 0 },
  }),

  slideInLeft: keyframes({
    from: { transform: 'translateX(105%)' },
    to: { transform: 'translateX(0px)' },
  }),

  slideOutRight: keyframes({
    from: { transform: 'translateX(0px)' },
    to: { transform: 'translateX(105%)' },
  }),
}
