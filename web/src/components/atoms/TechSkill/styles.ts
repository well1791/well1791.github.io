import { css } from 'src/shared/theme'

export const name = css({
  color: 'black',
  fontSize: '$md',
  transition: 'color 0.8s ease',
})

export const category = css({
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
})

export const bg = css({
  position: 'absolute',
  zIndex: -1,
  insetBlock: 0,
  insetInline: '-50%',
  br: 'inherit',
  backgroundImage:
    'linear-gradient(to right, white 38%, black 40%, black 88%, white 90%)',
  transform: 'translateX(25%)',

  transition: 'transform 0.5s ease',
})

export const container = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  pl: '.875rem',
  blockSize: 40,
  br: '$md',
  boxShadow: '$md',

  transition: ['color 350ms ease', 'transform 350ms ease'].join(','),
  overflowX: 'hidden',

  position: 'relative',
  zIndex: '$4',

  '&:hover, &:focus': {
    transform: 'translateY(-10%) scale(1.05)',
    [`.${name()}`]: { color: 'white' },
    [`.${category()}`]: { color: 'black' },
    [`.${bg()}`]: { transform: 'translateX(-25%)' },
  },
})
