type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

enum Abbr {
  SizeN = 's',
  SizeFluid = 'sf',
  SizeContent = 'sc',
  SizeHeader = 'sh',
  SizeRelative = 'sr',

  BorderSizeN = 'bs',
  BorderRadius = 'r',
  BorderRadiusRound = 'rr',
  BorderRadiusBlob = 'rb',

  Layer = 'l',
  LayerImportant = 'li',

  FontSizeN = 'fs',
  FontSizeFluid = 'fsf',
  FontWeight = 'fw',
  FontLetterspacing = 'fls',
  FontLineheight = 'flh',
}

type SizeN = `${Abbr.SizeN}-${Range<1, 16> | '00' | '000'}`
type SizeFluid = `${Abbr.SizeFluid}-${Range<1, 11>}`
type SizeContent = `${Abbr.SizeContent}-${Range<1, 4>}`
type SizeHeader = `${Abbr.SizeHeader}-${Range<1, 4>}`
type SizeRelative = `${Abbr.SizeRelative}-${Range<1, 16> | '00' | '000'}`
type Size = SizeN | SizeFluid | SizeContent | SizeHeader | SizeRelative

type BorderSizeN = `${Abbr.BorderSizeN}-${Range<1, 6>}`
type BorderRadius = `${Abbr.BorderRadius}-${Range<1, 7>}`
type BorderRadiusRound = `${Abbr.BorderRadiusRound}`
type BorderRadiusBlob = `${Abbr.BorderRadiusBlob}-${Range<1, 6>}`
type Border =
  | BorderSizeN
  | BorderRadius
  | BorderRadiusRound
  | BorderRadiusBlob

type FontSizeN = `${Abbr.FontSizeN}-${Range<1, 9> | '00'}`
type FontSizeFluid = `${Abbr.FontSizeFluid}-${Range<0, 4>}`
type FontWeight = `${Abbr.FontWeight}-${Range<1, 10>}`
type FontLetterspacing = `${Abbr.FontLineheight}-${Range<0, 8>}`
type FontLineheight = `${Abbr.FontLetterspacing}-${Range<1, 6> | '00'}`
type Font =
  | FontSizeN
  | FontSizeFluid
  | FontWeight
  | FontLetterspacing
  | FontLineheight

type LayerN = `${Abbr.Layer}-${Range<1, 6>}`
type LayerImportant = `${Abbr.LayerImportant}`
type Layer = LayerN | LayerImportant

const abbrs: {[K in Abbr]: string} = {
  // sizes
  s: 'size-',
  sf: 'size-fluid-',
  sc: 'size-content-',
  sh: 'size-header-',
  sr: 'size-relative-',

  // borders
  bs: 'border-size-',
  r: 'radius-',
  rr: 'radius-round',
  rb: 'radius-blob-',

  // layers
  l: 'layer-',
  li: 'layer-important',

  // fonts
  fs: 'font-size-',
  fsf: 'font-size-fluid',
  fw: 'font-weight-',
  fls: 'font-letterspacing-',
  flh: 'font-lineheight-',
} as const

export const op = (a: Size | Border | Layer | Font) => {
  const [prop, val] = a.split('-') as [Abbr, string]
  const openProps = [abbrs[prop], val].join('')
  return `var(--${openProps})`
}

export default op
