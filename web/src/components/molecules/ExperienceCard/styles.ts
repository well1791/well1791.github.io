import { css, animation } from 'src/shared/theme'

export const container = css({
  bg: '$sectionExpCardBg',
  p: '0.175rem',
  br: '$radii$lg',

  boxShadow: '$md',
})

export const headerUnderline = css({
  display: 'block',
  blockSize: 1.5,

  bg: 'white',
  br: '$full',

  transform: 'scale(0.001)',
  transition: 'transform 350ms ease, opacity 350ms linear',

  position: 'relative',
  '&::after': {
    content: '',
    position: 'absolute',
    inset: 0,
    boxShadow: '0px 1px 6px 0px white',
    transition: 'opacity 350ms linear',
  },
})

export const headerLink = css({
  outline: 'unset',
  br: '$md',
  py: '0.3rem',
  px: '0.5rem',

  fontSize: '$md',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  letterSpacing: '1px',

  '&:hover, &:focus': {
    textShadow: '0px 0px 2px white',

    [`& + .${headerUnderline()}`]: {
      transform: 'scale(0.9)',
    },
  },
})

export const headerTitle = css({
  inlineSize: 'fit-content',
  textAlign: 'center',
})

export const header = css({
  display: 'flex',
  justifyContent: 'center',

  px: '1.5rem',
  py: '0.66rem',

  bg: '$sectionExpCardHeaderBg',
  color: '$sectionExpCardHeaderText',

  borderStartStartRadius: '$radii$md',
  borderStartEndRadius: '$radii$md',
  borderBlockEnd: '1px solid white',
})

export const expRole = css({})

export const expTime = css({
  position: 'relative',
})

export const tooltipArrow = css({
  $$size: '10px',
  $$halfSize: 'calc($$size / 2)',
  $$2ThirdsSize: 'calc($$size / 3 * 2)',

  size: '0',
  borderLeft: '$$size solid transparent',
  borderRight: '$$size solid transparent',
  borderBottom: '$$size solid $$bgColor',

  position: 'absolute',
  insetBlockStart: '-$$2ThirdsSize',
  insetInlineStart: 'calc(50% - $$halfSize)',
})

export const tooltip = css({
  $$bgColor: 'white',

  $$px: '1rem',
  $$duration: '350ms',

  position: 'absolute',
  insetBlockEnd: '-4.75em',
  insetInlineEnd: '-6.1em',
  zIndex: '$max',

  bg: '$$bgColor',

  py: '.5rem',
  br: '$md',
  boxShadow: [
    '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    '0 2px 4px -2px rgb(0 0 0 / 0.1)',
    ' inset -10px -10px 20px -20px $colors$blackA11',
  ].join(','),
  minInlineSize: '200px',

  color: 'black',
  fontSize: '.875rem',

  transition: 'opacity $$duration ease',

  variants: {
    isOpen: {
      true: {
        animation: `$$duration ${animation.fadeIn}`,
      },

      false: {
        opacity: 0,
      },
    },
  },
})

export const tooltipTrigger = css({
  svg: {
    size: 18,
    ml: '.25rem',
  },
})

export const tooltipContent = css({
  px: '1rem',
})

export const tooltipIcon = css({
  blockSize: '100%',
  inlineSize: '100%',

  overflow: 'hidden',
  position: 'absolute',
  insetBlockStart: 0,

  svg: {
    position: 'absolute',
    insetBlock: 0,
    insetInlineStart: '75%',

    transform: 'rotate(.03turn)',

    size: '75px',
    color: '$colors$blackA4',
  },
})

export const expContainer = css({
  display: 'flex',
  flexWrap: 'wrap',
  aligItems: 'center',

  px: '$$px',
  py: '1rem',
  boxShadow: [
    '0 2px 3px 0 rgb(0 0 0 / 0.1)',
    '0 1px 2px -1px rgb(0 0 0 / 0.1)',
  ].join(','),

  fontSize: '$md',
  color: '$sectionExpCardHeaderBg',

  position: 'relative',

  '&::before': {
    content: '',
    position: 'absolute',
    inset: 0,
    zIndex: -1,
    bg: 'rgba(255 255 255 / .85)',
  },

  '@mobile': {
    '&::before': {
      bg: 'transparent',
    },
  },

  [`.${expRole()}, .${expTime()}`]: {
    display: 'flex',
    '& strong': { pl: '.4em' },
    '& p': { lineHeight: '$relaxed' },
  },

  [`.${expRole()}`]: {
    width: '100%',

    '@laptop': {
      width: '40%',
    },
  },
})

export const techSkillsInfo = css({
  px: '$$px',
  display: 'grid',
  gap: '1.125rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',

  mt: '2rem',
})

export const contentInfo = css({
  $$px: '.75rem',
  pt: '2rem',
  pb: '2rem',
  minBlockSize: '40%',

  background:
    'linear-gradient(170deg, $colors$sectionExpCardContentBg1, $colors$sectionExpCardContentBg2 55%)',
  borderBlock: '1px solid black',

  '@laptop': {
    $$px: '1.5rem',
  },
})

export const footer = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  borderEndStartRadius: '$radii$md',
  borderEndEndRadius: '$radii$md',
  borderBlockStart: '1px solid white',

  bg: '$sectionExpCardHeaderBg',

  color: 'white',

  variants: {
    isEmpty: {
      true: {
        blockSize: 35,
      },
      false: {
        px: '1.5rem',
        py: '0.66rem',
      },
    },
  },
})
