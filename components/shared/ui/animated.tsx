import React, { FC, useEffect, useState } from 'react'
import cn from 'clsx'

type Props = {
  show: boolean
  enter: string
  leave: string
  duration?: string
}

export const Animated: FC<Props> = ({
  children,
  enter,
  leave,
  show,
  duration = '1s',
}) => {
  const [shouldRender, setRender] = useState(show)

  useEffect(() => {
    if (show) setRender(true)
  }, [show])

  const onAnimationEnd = () => {
    if (!show) setRender(false)
  }

  return shouldRender ? (
    <div
      className={cn(show ? enter : leave)}
      onAnimationEnd={onAnimationEnd}
      style={{ animationDuration: duration }}
    >
      <div>{children}</div>
    </div>
  ) : null
}
