import { css, keyframes } from 'src/shared/theme'

const animation = {
  rotate: keyframes({
    to: {
      transform: 'rotate(1turn)',
    },
  }),

  move: keyframes({
    from: {
      transform: 'translateX(-100%)',
    },
    to: {
      transform: 'translateX(100%)',
    },
  }),
}

export const iconContainer = css({
  size: '$$iconSize',
  padding: '$$iconGap',
  $$duration: '20s',

  animation: `$$duration linear $$rotationDelay infinite alternate both running ${animation.move}`,

  '& svg': {
    color: '$whiteA9',
    size: '100%',
    animation: `$$duration linear $$rotationDelay infinite alternate both running ${animation.rotate}`,
    transition: 'color 5s ease-out',
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
