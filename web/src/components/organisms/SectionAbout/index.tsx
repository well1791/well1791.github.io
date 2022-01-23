import { ParallaxLayer } from '@react-spring/parallax'

export type Props = React.HTMLAttributes<HTMLElement> & { page: number }

export default function SectionAbout(props: Props) {
  return (
    <section id={props.id}>
      <ParallaxLayer offset={props.page}>About me?</ParallaxLayer>
    </section>
  )
}
