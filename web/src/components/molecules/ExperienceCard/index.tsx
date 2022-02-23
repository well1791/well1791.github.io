import clsx from 'clsx'
import { QuestionMarkCircledIcon, InfoCircledIcon } from '@radix-ui/react-icons'

import NavBtn from 'src/components/atoms/ExperienceNavBtn'
import TechSkill from 'src/components/atoms/TechSkill'
import Tooltip from 'src/components/atoms/Tooltip'
import usePresenter from './usePresenter'
import * as stl from './styles'
import type { ExpData, NavAction } from './types'

export type Props = React.HTMLAttributes<HTMLElement> & {
  data: ExpData
  isActive?: boolean
  prevBtn?: NavAction
  nextBtn?: NavAction
}

export default React.forwardRef<HTMLDivElement, Props>(
  ({ data, isActive = false, prevBtn, nextBtn, ...props }: Props, ref) => {
    const {
      tooltip,
      isTouchDev,
      isMobile,
      durationLgFmt,
      durationSmFmt,
      inView,
      header,
      touchDev,
    } = usePresenter({ data })

    return (
      <div
        ref={ref}
        {...props}
        role="group"
        aria-hidden={!isActive}
        aria-disabled={!isActive}
        aria-current={isActive}
        aria-describedby={header.id}
        className={stl.container({ className: props.className })}
      >
        <header className={stl.header()}>
          <h3 id={header.id} className={stl.headerTitle()}>
            <a
              className={stl.headerLink()}
              href={data.url}
              target={header.target}
              rel="noreferrer"
              aria-label={header.label}
            >
              {data.title}
            </a>

            <span className={stl.headerUnderline()} />
          </h3>
        </header>

        <div className={stl.contentInfo()}>
          <div className={stl.expContainer({ inView })}>
            <div className={stl.expRole()}>
              <p>
                <span className={clsx({ inView: 'sr-only' })}>{'Role: '}</span>
                <strong>{data.role}</strong>
              </p>
            </div>

            <div className={stl.expTime()}>
              <p className="inline">
                <span className={clsx({ inView: 'sr-only' })}>
                  {'Duration: '}
                </span>
                <strong
                  aria-hidden="true"
                  className={clsx(inView && !isMobile && 'hidden')}
                >
                  {durationSmFmt}
                </strong>
                <strong className={clsx((!inView || isMobile) && 'sr-only')}>
                  {durationLgFmt}
                </strong>
              </p>

              {!isTouchDev && (
                <div className="relative inline">
                  <button
                    ref={tooltip.ref}
                    {...tooltip.triggerProps}
                    type="button"
                    className={stl.tooltipTrigger()}
                  >
                    <span className="sr-only">time period</span>
                    <QuestionMarkCircledIcon
                      aria-hidden="true"
                      focusable="false"
                    />
                  </button>

                  <Tooltip
                    state={tooltip.state}
                    {...tooltip.overlayProps}
                    className={stl.tooltip({ isOpen: tooltip.state.isOpen })}
                  >
                    <div className={stl.tooltipArrow()} />

                    <div className={stl.tooltipContent()}>
                      <p>
                        {'Started: '}
                        <strong>{tooltip.startDate}</strong>
                      </p>

                      <p>
                        {'Ended: '}
                        <strong>{tooltip.endDate}</strong>
                      </p>
                    </div>

                    <div className={stl.tooltipIcon()}>
                      <InfoCircledIcon aria-hidden="true" focusable="false" />
                    </div>
                  </Tooltip>
                </div>
              )}
            </div>

            {isTouchDev && (
              <>
                <div className={clsx({ inView: 'sr-only' })}>
                  <p>
                    <span>{'Started: '}</span>
                    <strong>{touchDev.startDate}</strong>
                  </p>
                </div>

                <div className={clsx({ inView: 'sr-only' })}>
                  <p>
                    <span>{'Ended: '}</span>
                    <strong>{touchDev.endDate}</strong>
                  </p>
                </div>
              </>
            )}
          </div>

          <h4 className="sr-only">List of skills learned</h4>
          <ul title="Skills learned" className={stl.techSkillsInfo()}>
            {data.skills.map((skill) => (
              <TechSkill key={skill.name} {...skill} />
            ))}
          </ul>
        </div>

        <div className={stl.footer()}>
          <div>
            {prevBtn && (
              <NavBtn
                title={prevBtn.title}
                nav="prev"
                onClick={prevBtn.onClick}
              />
            )}
          </div>
          <div>
            {nextBtn && (
              <NavBtn
                title={nextBtn.title}
                nav="next"
                onClick={nextBtn.onClick}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
)
