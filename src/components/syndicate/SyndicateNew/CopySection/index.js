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
 * @module CopyCard
 */
import CopyCard from 'components/cards/CopyCard'

/**
 * CopySection component
 * @param { Object } props
 * @property { String } props.text
 * @returns { React.Component }
 */
const CopySection = props => {
  const { children, className, headline } = props

  const modifiedClassNames = classNames('copy-section', className)

  return (
    <div className={modifiedClassNames}>
      <div className="container relative">
        <div className="row">
          <div className="copy-section__copy-card-container col-md-offset-0 col-md-6 col-sm-9">
            <div className="copy-section__copy-card-background wave-bg"></div>
            <CopyCard
              className="copy-section__copy-card-card"
              headline={headline}>
              {children}
            </CopyCard>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * propTypes
 * @type { Object }
 */
CopySection.propTypes = {
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
CopySection.defaultProps = {
  className: ''
}

export default CopySection
