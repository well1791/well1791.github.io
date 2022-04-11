import * as stl from './MainHero.styles'

export type Props = React.HTMLAttributes<HTMLDivElement>

const MainHero = ({ ...props }: Props) => {
  return (
    <div {...props} className={stl.container({ className: props.className })}>
      <div className={stl.content()}>
        <p>
          <span data-emoji>👋</span>
          {"I'm"}
        </p>

        <h1 className={stl.title()}>
          <span data-firsthalf>Well</span>
          <span data-lasthalf>ington</span>
        </h1>

        <p>{'and I code ¯_(ツ)_/¯'}</p>
      </div>
    </div>
  )
}

export default MainHero
