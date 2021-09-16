import React from 'react'

import classNames from 'utils/classnames'

import PropTypes from 'prop-types'

const SyndicateTitleDescriptionCard = (props) => {
  const {
    className,
    children
  } = props

  const modifiedClassNames = classNames('syndicate-title-desc-card', className)

  return (
    <div className={modifiedClassNames}>
      {children}
    </div>
  )
}

SyndicateTitleDescriptionCard.propTypes = {
  className: PropTypes.string
}

export default SyndicateTitleDescriptionCard
