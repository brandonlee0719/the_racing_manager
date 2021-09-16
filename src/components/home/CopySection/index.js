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
 * @module Image
 */
import Image from 'components/image'

/**
 * CopySection component
 * @param { Object } props
 * @property { String } props.text
 * @returns { React.Component }
 */
const CopySection = props => {
  const { children, className, headline, featuredImage } = props

  const modifiedClassNames = classNames('copy-section', className)

  return (
    <div className={modifiedClassNames}>
      <div className="container relative">
        <div className="row">
          <Image
            className="copy-section__featured-image"
            imageSrc={featuredImage}
          />
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
      <h1 className="copy-section__overlapping-headline">{headline}</h1>
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
  headline: PropTypes.string.isRequired,
  featuredImage: PropTypes.string
}

/**
 * defaultProps
 * @type { Object }
 */
CopySection.defaultProps = {
  className: ''
}

export default CopySection
