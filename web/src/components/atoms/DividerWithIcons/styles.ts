import { css, keyframes } from 'src/shared/theme'

const animation = {
  rotate: keyframes({
    to: {
      transform: 'rotate(1turn)',
    },
  }),

  move: keyframes({
    from: {
      transform: 'translateX(-200%)',
    },
    to: {
      transform: 'translateX(200%)',
    },
  }),
}

export const iconContainer = css({
  size: '$$iconSize',
  padding: '$$iconGap',

  animation: `10s linear $$rotationDelay infinite alternate both running ${animation.move}`,

  '& svg': {
    color: '$whiteA8',
    size: '100%',
    animation: `20s linear $$rotationDelay infinite alternate both running ${animation.rotate}`,
    transition: 'color 3s cubic-bezier(0, 1.2, 1, 0.98)',

    '&:hover': {
      color: '$whiteA12',
      filter: 'drop-shadow(0 0px 10px white)',
    },
  },
})

export const divider = css({
  display: 'flex',
  flexWrap: 'wrap',

  bg: '$sectionExpDividerBg',
  pl: '$$pl',
  pr: '$$pr',
  inlineSize: '120vw',
  blockSize: 'max(7vh, 7vw)',
  boxShadow: '0px 0px 15px -7px $colors$blackA12',
  overflow: 'hidden',

  transform: 'translateX(-10%) translateY(-25%) rotate(.005turn)',
})
