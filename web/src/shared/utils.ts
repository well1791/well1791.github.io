import type { TimeAbbr } from './types'

type TT = (base: number) => { [Key in TimeAbbr]: (value: number) => number }
export const tt: TT = (b) => {
  const t: ReturnType<TT> = {
    s: (v) => v * b,
    m: (v) => v * t.s(60),
    h: (v) => v * t.m(60),
    d: (v) => v * t.h(24),
    w: (v) => v * t.d(7),
    y: (v) => v * t.w(365),
  }

  return t
}
