import { createStitches } from '@stitches/core'
import type Stitches from '@stitches/core'
import * as rc from '@radix-ui/colors'

export const breakpoint = {
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
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    borderStyles: {},
    borderWidths: {},
    colors: {
      // grays
      ...rc.gray,
      ...rc.slate,

      // brights
      ...rc.yellow,

      ...rc.grayA,
      ...rc.slateA,

      ...rc.whiteA,
      ...rc.blackA,

      // aliases
      skipMainNavText: '#1D3557',
      skipMainNavBg: '#F1FAEE',

      mainHeaderBg: 'rgba(38 70 83 / 0.9)',
      mainHeaderBgBlur: 'rgba(37 70 83 / 0.7)',

      mobMainNavMenuBg: 'rgb(241 255 246 / .7)',
      mobMainNavMenuText: '#1D3557',

      mainNavText: 'white',
      mainHeaderBorderStart: 'rgb(42, 157, 143)',
      mainHeaderBorderEnd: 'rgb(241, 250, 238)',

      themeSwitcherTriggerText: 'white',
      themeSwitcherTriggerTextUserChoice: '$yellow7',
      themeSwitcherMenuBg: 'rgb(241, 250, 238)',
      themeSwitcherMenuBgHover: '$blackA7',
      themeSwitcherMenuText: 'rgb(38, 70, 83)',
      themeSwitcherMenuSelectedText: 'rgb(241, 250, 238)',
      themeSwitcherMenuSelectedBg: 'rgb(38, 70, 83)',

      sectionHiBgTop: 'rgb(241, 250, 238)',
      sectionHiBgBot: '$slate8',
      sectionHiBgShadow1: 'rgb(2, 48, 71, .9)',
      sectionHiBgShadow2: 'rgb(2, 48, 71, .5)',
      sectionHiBgShadowFrame: 'rgb(2, 48, 71, .11)',
      sectionHiTitleShTop: 'rgb(29, 53, 87)',
      sectionHiTitleShMid: 'rgba(69, 123, 157, .8)',
      sectionHiTitleShBot: 'rgb(168, 218, 220)',

      sectionExpBg: '$gray1',
      sectionExpDividerBg: 'rgb(33, 54, 70)',
      sectionExpBgShadow1: 'rgba(2, 24, 43, .8)',
      sectionExpBgShadow2: 'rgb(125, 144, 153)',
      sectionExpBgShadow3: 'rgb(190, 196, 201)',
      sectionExpBgShadow4: 'transparent',
      sectionExpBgShadowLine1: '$colors$whiteA12',
      sectionExpBgShadowLine2: 'rgba(2, 24, 43, .25)',
      sectionExpTitleShTop: '#2b404f',
      sectionExpTitleShMid: 'rgb(97, 123, 132, .7)',
      sectionExpTitleShBot: 'rgb(183, 190, 195, .9)',
      sectionExpCardBg: 'rgba(241, 250, 238, .5)',
      sectionExpCardHeaderBg: 'rgba(2, 24, 43, .8)',
      sectionExpCardHeaderText: 'white',
      sectionExpCardContentText: 'black',
      sectionExpCardContentBg1: '$colors$whiteA12',
      sectionExpCardContentBg2: '$colors$blackA4',
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
      ...breakpoint,
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
    mobile: `(min-width: ${breakpoint.mobile})`,
    tablet: `(min-width: ${breakpoint.tablet})`,
    laptop: `(min-width: ${breakpoint.laptop})`,
    desktop: `(min-width: ${breakpoint.desktop})`,
    wide: `(min-width: ${breakpoint.wide})`,

    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
    touchable: '(hover: none) and (pointer: coarse)',
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
    ...rc.crimsonDark,
    ...rc.crimsonDarkA,
    ...rc.cyanDark,
    ...rc.cyanDarkA,
    ...rc.purpleDark,
    ...rc.purpleDarkA,
    ...rc.violetDark,
    ...rc.violetDarkA,
    ...rc.indigoDark,
    ...rc.indigoDarkA,
    ...rc.plumDark,
    ...rc.plumDarkA,
    ...rc.yellowDark,
    ...rc.pinkDark,
    ...rc.greenDarkA,
    ...rc.mintDark,
    ...rc.mintDarkA,
    ...rc.orangeDark,

    skipMainNavText: '$purple1',
    skipMainNavBg: 'white',

    mainHeaderBg: '$purple1',
    mainHeaderBgBlur: '$purple1',

    mobMainNavMenuBg: '$indigo2',
    mobMainNavMenuText: '$indigo12',

    mainNavText: 'white',
    mainHeaderBorderStart: '$cyan9',
    mainHeaderBorderEnd: '$pink8',

    themeSwitcherTriggerText: 'white',
    themeSwitcherTriggerTextUserChoice: '$cyan9',
    themeSwitcherMenuBg: '$cyan1',
    themeSwitcherMenuBgHover: '$whiteA6',
    themeSwitcherMenuText: '$cyan12',
    themeSwitcherMenuSelectedText: '$cyan12',
    themeSwitcherMenuSelectedBg: '$crimson7',

    sectionHiBgTop: '$purple2',
    sectionHiBgBot: '$orange6',
    sectionHiBgShadow1: '$cyanA7',
    sectionHiBgShadow2: '$indigoA3',
    sectionHiBgShadowFrame: '$cyanA2',
    sectionHiTitleShTop: '$mint8',
    sectionHiTitleShMid: '$pink8',
    sectionHiTitleShBot: '$blackA12',

    sectionExpBg: '$crimson1',
    sectionExpDividerBg: '$violet3',
    sectionExpBgShadow1: '$violet2',
    sectionExpBgShadow2: '$cyan4',
    sectionExpBgShadow3: '$purple3',
    sectionExpBgShadow4: '$crimson1',
    sectionExpBgShadowLine1: '$violet5',
    sectionExpBgShadowLine2: '$mintA5',
    sectionExpTitleShTop: '$yellow10',
    sectionExpTitleShMid: '$cyan10',
    sectionExpTitleShBot: '$pink9',
    sectionExpCardBg: '$violetA4',
    sectionExpCardHeaderBg: '$purple2',
    sectionExpCardHeaderText: 'white',
    sectionExpCardContentText: 'white',
    sectionExpCardContentBg1: '$greenA6',
    sectionExpCardContentBg2: '$cyanA3',
  },
})

export const blackAndWhiteTheme = createTheme({
  colors: {
    skipMainNavText: '$gray12',
    skipMainNavBg: 'white',

    mainHeaderBg: 'black',
    mainHeaderBgBlur: '$blackA11',

    mobMainNavMenuBg: '$whiteA12',
    mobMainNavMenuText: '$gray12',

    mainNavText: '$gray1',
    mainHeaderBorderStart: 'white',
    mainHeaderBorderEnd: 'black',

    themeSwitcherTriggerText: '$gray1',
    themeSwitcherTriggerTextUserChoice: '$gray1',
    themeSwitcherMenuBg: 'white',
    themeSwitcherMenuBgHover: '$blackA8',
    themeSwitcherMenuText: '$gray12',
    themeSwitcherMenuSelectedText: '$gray1',
    themeSwitcherMenuSelectedBg: 'black',

    sectionHiBgTop: '$gray12',
    sectionHiBgBot: '$gray1',
    sectionHiBgShadow1: '$blackA12',
    sectionHiBgShadow2: '$blackA11',
    sectionHiBgShadowFrame: '$blackA6',
    sectionHiTitleShTop: 'white',
    sectionHiTitleShMid: '$whiteA11',
    sectionHiTitleShBot: '$whiteA8',

    sectionExpBg: '$gray1',
    sectionExpDividerBg: 'black',
    sectionExpBgShadow1: '$colors$blackA11',
    sectionExpBgShadow2: '$colors$blackA9',
    sectionExpBgShadow3: '$colors$blackA8',
    sectionExpBgShadow4: 'transparent',
    sectionExpBgShadowLine1: '$colors$whiteA12',
    sectionExpBgShadowLine2: '$colors$blackA8',
    sectionExpTitleShTop: 'black',
    sectionExpTitleShMid: '$blackA9',
    sectionExpTitleShBot: '$blackA9',
    sectionExpCardBg: '$whiteA10',
    sectionExpCardHeaderBg: 'black',
    sectionExpCardHeaderText: 'white',
    sectionExpCardContentText: 'black',
    sectionExpCardContentBg1: '$colors$whiteA12',
    sectionExpCardContentBg2: '$colors$blackA6',
  },
})

export const themes = {
  light: theme,
  dark: darkTheme,
  blackAndWhite: blackAndWhiteTheme,
}

export type ThemeType = keyof typeof themes

export const isValidTheme = (value?: string): value is ThemeType =>
  Boolean(themes[value])

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

  slideInRight: keyframes({
    from: { transform: 'translateX(-105%)' },
    to: { transform: 'translateX(0px)' },
  }),

  slideOutRight: keyframes({
    from: { transform: 'translateX(0px)' },
    to: { transform: 'translateX(105%)' },
  }),
}
