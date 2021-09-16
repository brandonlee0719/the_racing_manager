import React from 'react'

import PropTypes from 'prop-types'

import classNames from 'utils/classnames'

const TileTitle = (props) => {
  const {
    className,
    title
  } = props

  const modifiedClassNames = classNames('tile-title', className)

  return (
    <h2 className={modifiedClassNames}>
      {title}
    </h2>
  )
}

TileTitle.propTypes = {
  className: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ])
}

TileTitle.defaultProps = {
  className: '',
  modifier: '',
  title: ''
}

export default TileTitle
