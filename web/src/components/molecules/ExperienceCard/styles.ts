import { css } from 'src/shared/theme'

export const container = css({
  background: '$whiteA10',
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
  textTransform: 'uppercase',
  outline: 'unset',
  br: '$md',
  py: '0.3rem',
  px: '0.5rem',

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

  bg: 'black',
  color: 'white',

  borderStartStartRadius: '$radii$md',
  borderStartEndRadius: '$radii$md',
  borderBlockEnd: '1px solid white',
})

export const expRole = css({})

export const expTime = css({
  position: 'relative',
})

export const tooltip = css({
  position: 'absolute',
  bottom: '-4.5em',
  right: '-10em',
  overflow: 'hidden',
  zIndex: '$max',

  backgroundColor: 'white',

  py: '.5rem',
  px: '1rem',
  br: '$md',
  boxShadow: '$md, inset -5px -5px 20px -10px $colors$blackA11',
  minInlineSize: '200px',

  color: 'black',
  fontSize: '.875rem',

  transition: 'opacity 350ms ease',

  svg: {
    position: 'absolute',
    insetBlock: 0,
    insetInlineStart: '75%',

    transform: 'rotate(.03turn)',

    size: '75px',
    color: '$colors$blackA7',
  },

  variants: {
    isOpen: {
      true: {
        opacity: 1,
      },

      false: {
        opacity: 0,
        visibility: 'hidden',
      },
    },
  },
})

export const tooltipTrigger = css({
  cursor: 'default',
  svg: {
    size: 18,
    ml: '.25rem',
  },
})

export const expContainer = css({
  display: 'flex',
  flexWrap: 'wrap',
  aligItems: 'center',

  pb: '1.5rem',
  borderBlockEnd: 'dashed 1.5px $colors$gray8',

  [`.${expRole()}, .${expTime()}`]: {
    display: 'flex',
    strong: { pr: '.5em' },
  },

  [`.${expRole()}`]: {
    width: '100%',

    '@laptop': {
      width: '40%',
    },
  },
})

export const techSkillsInfo = css({
  display: 'grid',
  gap: '1.125rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',

  mt: '2rem',
})

export const contentInfo = css({
  px: '1.5rem',
  py: '2rem',
  minBlockSize: '300px',
  minInlineSize: '300px',

  background: 'linear-gradient(to right, $colors$whiteA12, $colors$blackA5)',
  borderBlock: '1px solid black',
})

export const footer = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  px: '1.5rem',
  py: '0.66rem',
  borderEndStartRadius: '$radii$md',
  borderEndEndRadius: '$radii$md',
  borderBlockStart: '1px solid white',

  bg: 'black',

  color: 'white',
})
