import React from 'react'

import { CSSTransitionGroup } from 'react-transition-group'

import PropTypes from 'prop-types'

const Animate = (props) => {
  const {
    children,
    name,
    appearTimeout,
    enterTimeout,
    leaveTimeout
  } = props

  return (
    <CSSTransitionGroup
      transitionName={name}
      transitionEnterTimeout={appearTimeout}
      transitionAppearTimeout={enterTimeout}
      transitionLeaveTimeout={leaveTimeout}
    >
      {children}
    </CSSTransitionGroup>
  )
}

Animate.propTypes = {
  name: PropTypes.string.isRequired,
  appearTimeout: PropTypes.number,
  enterTimeout: PropTypes.number,
  leaveTimeout: PropTypes.number
}

Animate.defaultProps = {
  appearTimeout: 400,
  enterTimeout: 400,
  leaveTimeout: 400
}

export default Animate
