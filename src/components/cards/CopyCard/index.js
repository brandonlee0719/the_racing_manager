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
 * @name CopyCard
 * @param { Object } props
 * @property { String } props.text
 * @return { React.Component }
 */
const CopyCard = props => {
  const { children, className, headline } = props

  const modifiedClassNames = classNames('copy-card', className)

  return (
    <div className={modifiedClassNames}>
      <h1 className="copy-card__headline uppercase">{headline}</h1>
      <hr className="copy-card__hr"/>
      {children}
    </div>
  )
}

/**
 * propTypes
 * @type { Object }
 */
CopyCard.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  headline: PropTypes.string.isRequired
}

/**
 * defaultProps
 * @type { Object }
 */
CopyCard.defaultProps = {
  className: ''
}

export default CopyCard
