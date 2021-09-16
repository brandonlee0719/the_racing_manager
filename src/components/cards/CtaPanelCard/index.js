import React from 'react'

import classNames from 'utils/classnames'

import PropTypes from 'prop-types'

const CtaPanelCard = (props) => {
  const {
    className,
    children
  } = props

  const modifiedClassNames = classNames('cta-panel-card', className, ['section-shadow section-shadow--tile section-shadow--bottom'])

  return (
    <div className={modifiedClassNames}>
      {children}
    </div>
  )
}

CtaPanelCard.propTypes = {
  className: PropTypes.string
}

export default CtaPanelCard
