import React from 'react'

import Animate from 'components/animation/Animate'

const FadeIn = (props) => {
  const {
    children,
    ...rest
  } = props

  return (
    <Animate
      name='fade-in'
      {...rest}>
      {children}
    </Animate>
  )
}

export default FadeIn
