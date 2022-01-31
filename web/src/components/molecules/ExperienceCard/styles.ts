import { css } from 'src/shared/theme'

export const container = css({
  background: '$whiteA10',
  p: '0.175rem',
  br: '$radii$lg',

  boxShadow: '$md',
})

export const contentHeader = css({
  display: 'flex',
  justifyContent: 'center',

  px: '1.5rem',
  py: '0.66rem',

  bg: 'black',
  color: 'white',

  borderStartStartRadius: '$radii$md',
  borderStartEndRadius: '$radii$md',
  borderBlockEnd: '1px solid white',

  '.underline': {
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
  },

  '& h3': {
    inlineSize: 'fit-content',
    textAlign: 'center',
  },

  '& a': {
    textTransform: 'uppercase',
    outline: 'unset',
    br: '$md',
    py: '0.3rem',
    px: '0.5rem',

    '&:hover, &:focus': {
      textShadow: '0px 0px 2px white',

      '& + .underline': {
        transform: 'scale(0.9)',
      },
    },
  },
})

export const expInfo = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  pb: '1.5rem',
  borderBlockEnd: 'dashed 1.5px $colors$gray8',

  '& p': {
    textTransform: 'capitalize',
  },
})

export const techSkills = css({
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

  '& strong': {
    fontWeight: 'bold',
    pr: '6px',
  },
})

export const contentFooter = css({
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
