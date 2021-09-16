/**
 *  @module React
 */
import React from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 * @module classNames
 */
import classNames from 'utils/classnames'

/**
 * @module Parallax
 */
import Parallax from 'components/parallax/BaseParallax'

/**
 *  @module Image
 */
import Image from 'components/image'

/**
 * @name Hero
 * @param { Object } props
 * @property { String } props.featuredImage
 * @property { String | Array } [props.modifier = '']
 * @return { React.Component }
 */
const Hero = props => {
  const { children, className, featuredImage, modifier } = props

  const modifiedClassNames = classNames('parallax-hero', className, modifier)

  return (
    <div className={modifiedClassNames}>
      <div className='parallax-hero__parallax'>
        <Parallax
          speed={0.75}
          scope={400}>
          <div>
            <Image
              className='parallax-hero__image full-height'
              imageSrc={featuredImage}/>
          </div>
        </Parallax>
        {children}
      </div>
    </div>
  )
}

/**
 * Component props types
 * @type { Object }
 */
Hero.propTypes = {
  featuredImage: PropTypes.string.isRequired,
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
 * Default component props
 * @type { Object }
 */
Hero.defaultProps = {
  modifier: '',
  className: ''
}

export default Hero
