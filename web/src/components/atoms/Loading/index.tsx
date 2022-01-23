import * as stl from './styles'

export default function Loading() {
  return (
    <div className={stl.container()}>
      <div className={stl.outerShadow()}>
        <div className={stl.backdrop()}>
          <div className={stl.circleColor()} />
          <div className={stl.innerShadow()} />
        </div>
      </div>

      <p className={stl.loadingText()}>loading</p>
    </div>
  )
}
