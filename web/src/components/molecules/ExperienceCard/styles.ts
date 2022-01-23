import { css } from 'src/shared/theme'

export const container = css({
  background: '$whiteA10',
  p: '0.175rem',
  br: '$radii$lg',

  boxShadow: '$md',
})

export const contentHeader = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',

  px: '1.5rem',
  py: '0.66rem',

  bg: 'black',

  color: 'white',

  borderStartStartRadius: '$radii$md',
  borderStartEndRadius: '$radii$md',
  borderBlockEnd: '1px solid white',

  '.underline': {
    blockSize: 1.5,
    bg: 'white',
    br: '$full',

    transform: 'scale(0.001)',
    transition: 'transform 350ms ease, opacity 350ms linear',

    position: 'relative',
    '&:after': {
      content: '',
      position: 'absolute',
      inset: 0,
      boxShadow: '0px 1px 6px 0px white',
      transition: 'opacity 350ms linear',
    },
  },

  '.title': {
    gridColumn: 2,
    display: 'flex',
    justifyContent: 'center',
  },

  h3: {
    inlineSize: 'fit-content',
    textAlign: 'center',
  },

  a: {
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

  '.date-duration': {
    textAlign: 'right',
  },
})

export const contentInfo = css({
  px: '1.5rem',
  py: '2rem',
  minBlockSize: '300px',
  minInlineSize: '300px',

  background: 'linear-gradient(to right, $colors$whiteA12, $colors$blackA5)',
  borderBlock: '1px solid black',

  strong: {
    fontWeight: 'bold',
    pr: '6px',
  },

  '.date-info': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    pb: '1.5rem',
    borderBlockEnd: 'dashed 1.5px $colors$gray8',
  },

  ul: {
    display: 'grid',
    gap: '1.125rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',

    mt: '2rem',
  },

  li: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundImage:
      'linear-gradient(to right, white 38%, black 40%, black 88%, white 90%)',
    backgroundSize: '200% 100%',
    backgroundPosition: 'left',

    pl: '.875rem',
    blockSize: 40,
    br: '$md',
    boxShadow: '$md',

    transition: [
      'background-position 0.5s ease',
      'color 0.8s ease',
      'transform 350ms ease',
    ].join(','),

    position: 'relative',
    '&:before': {
      content: '',
      position: 'absolute',
      inset: 0,
      zIndex: -1,
      br: '$md',

      boxShadow: '0px 7px 10px -5px $colors$gray12',
      opacity: 0,
      transition: 'opacity 350ms ease',
    },

    '.name': {
      color: 'black',
      fontSize: '$md',
      transition: 'color 0.8s ease',
    },

    '.category': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      borderStartEndRadius: 'inherit',
      borderEndEndRadius: 'inherit',
      minInlineSize: 50,
      inlineSize: 'fit-content',
      blockSize: '100%',

      color: 'white',
      fontWeight: 'bold',
      fontSize: '$sm',

      transition: 'color 350ms ease',
    },

    '&:hover, &:focus': {
      backgroundPosition: 'right',
      transform: 'translateY(-10%) scale(1.05)',

      '&:before': {
        opacity: 1,
      },

      '.name': {
        color: 'white',
      },

      '.category': {
        color: 'black',
      },
    },
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

export const expNavBtn = css({
  br: '$full',
  py: 2,

  backgroundSize: '300% 100%',

  color: 'black',

  transition: 'background-position 0.8s ease',

  '.sr-only': {
    srOnly: true,
  },

  svg: {
    size: '1.5rem',
    transition: 'transform 300ms ease',
  },

  '.btn-content': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.125rem',

    br: 'inherit',
    py: '.15rem',
    px: '1.5rem',

    background: 'white',
  },

  variants: {
    navTo: {
      prev: {
        backgroundPosition: 'left',
        backgroundImage:
          'linear-gradient(to right, white 35%, black, white 65%)',

        svg: {
          transform: 'scale(0.8) translateX(3px)',
        },

        '&:hover, &:focus': {
          backgroundPosition: 'right',

          svg: {
            transform: 'translateX(-2px)',
          },
        },
      },

      next: {
        backgroundPosition: 'right',
        backgroundImage:
          'linear-gradient(to left, white 35%, black, white 65%)',

        svg: {
          transform: 'scale(0.8) translateX(-3px)',
        },

        '&:hover, &:focus': {
          backgroundPosition: 'left',

          svg: {
            transform: 'translateX(2px)',
          },
        },
      },
    },
  },
})

export const prevExpContainer = css({})

export const nextExpContainer = css({})
