import { useOverlay, usePreventScroll, useModal } from '@react-aria/overlays'
import { FocusScope } from '@react-aria/focus'
import { useDialog } from '@react-aria/dialog'
import { AriaDialogProps } from '@react-types/dialog'

type OverlayProps = Parameters<typeof useOverlay>[0]

export type Props = OverlayProps &
  AriaDialogProps & {
    title: string
    children: React.ReactNode
    titleCss?: string
    underlayCss?: string
    overlayCss?: string
  }

export default function ModalDialog(props: Props) {
  usePreventScroll()

  const ref = React.useRef()
  const { overlayProps, underlayProps } = useOverlay(props, ref)
  const { dialogProps, titleProps } = useDialog(props, ref)
  const { modalProps } = useModal()

  return (
    <div {...underlayProps} className={props.underlayCss}>
      {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
      <FocusScope contain restoreFocus autoFocus>
        <div
          {...overlayProps}
          {...dialogProps}
          {...modalProps}
          ref={ref}
          className={props.overlayCss}
        >
          <h3 {...titleProps} className={props.titleCss}>
            {props.title}
          </h3>
          {props.children}
        </div>
      </FocusScope>
    </div>
  )
}
