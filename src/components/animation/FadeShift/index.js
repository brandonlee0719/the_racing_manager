import React from 'react'

import Animate from 'components/animation/Animate'

const FadeShift = (props) => {
  const {
    children,
    ...rest
  } = props

  return (
    <Animate
      name='fade-shift'
      {...rest}>
      {children}
    </Animate>
  )
}

export default FadeShift