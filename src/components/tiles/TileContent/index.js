/**
 * @module react
 */
import React from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 * @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @name TileContent
 *  @param  {Object} props
 *  @return {React.Component}
 */
const TileContent = props => {
  const {
    className,
    modifier,
    text
  } = props

  const modifiedClassNames = classNames('tile-content', className, modifier)

  if (!text) {
    return null
  }

  return (
    <p className={`tiny ${modifiedClassNames}`}>
      {text}
    </p>
  )
}

/**
 *  propTypes
 *  @type {Object}
 */
TileContent.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
}

/**
 *  defaultProps
 *  @type {Object}
 */
TileContent.defaultProps = {
  className: '',
  modifier: ''
}

/**
 *  @module TileContent
 */
export default TileContent
