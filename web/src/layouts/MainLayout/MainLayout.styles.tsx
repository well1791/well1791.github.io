import { css } from 'src/shared/theme'
import type { CSS } from 'src/shared/theme'

export const vars: Record<string, [number, string]> = {
  headerHeight: [80, 'px'],
  footerHeight: [65, 'vh'],
}

export const props: CSS = {
  $$headerHeight: vars.headerHeight.join(''),
  $$footerHeight: vars.footerHeight.join(''),
}

export const header = css({
  ...props,

  h: '$$headerHeight',

  position: 'fixed',
  insetT: 0,
  insetX: 0,
  zIndex: '$max',

  '@md': {
    $$headerHeight: `calc(${vars.headerHeight.join('')} + $sizes$4})`,
  },
})

export const footer = css({
  ...props,

  h: 'max($$footerHeight, $52)',
  bgClr: '$footerBg',

  position: 'fixed',
  insetX: 0,
  insetB: 0,
})

export const main = css({
  ...props,

  position: 'relative',
  zIndex: '$4',

  bgClr: '$mainBg',
  boxShadow: '$shadows$xl',
  borderEndStartRadius: '$radii$md',
  borderEndEndRadius: '$radii$md',
})
