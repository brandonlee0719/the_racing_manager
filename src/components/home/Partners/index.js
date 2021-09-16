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
 *  @module Carousel
 */
import Carousel from 'components/carousel'

/**
 * @module Image
 */
import Image from 'components/image'

/**
 *  @module images
 */
import * as partnerImages from 'assets/home/partners'

/**
 * Partners component
 * @param { Object } props
 * @property { String } props.featuredImage
 * @property { String | Array } [props.modifier = '']
 * @return { React.Component }
 */
const Partners = props => {
  const { className } = props

  const modifiedClassNames = classNames('partners', className)

  const slides = () => {
    let result = []

    for (let i = 1; i <= 6; i++) {
      result.push(
        <div
          key={i}
          className='partners__partner'>
          <Image
            forceShow={true}
            className='partners__partner-image image-background'
            imageSrc={partnerImages[`p${i}`]} />
        </div>
      )
    }
    return result
  }

  return (
    <div className={modifiedClassNames}>
      <div className='partners__carousel-wrapper hidden-md-up'>
        <Carousel
          cellAlign='center'
          containerClassName='partners__carousel'
          slideWidth={0.4}
          arrowModifier={['middle']}
          showArrows>
          {slides()}
        </Carousel>
      </div>
      <div className='container visible-md-up'>
        <div className='partners__carousel-desktop'>
          {slides()}
        </div>
      </div>
    </div>
  )
}

/**
 * propTypes
 * @type { Object }
 */
Partners.propTypes = {
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
}

/**
 * defaultProps
 * @type { Object }
 */
Partners.defaultProps = {
  modifier: '',
  className: ''
}

/**
 *  @module Partners
 */
export default Partners
