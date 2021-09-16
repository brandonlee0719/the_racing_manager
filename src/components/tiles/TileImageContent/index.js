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
 *  @module Image
 */
import Image from 'components/image'

/**
 *  TileImageContent
 *  @param  {Object} props
 *  @return {React.Component}
 */
const TileImageContent = props => {
  const {
    rootPath,
    src,
    className,
    modifier,
    alt,
    useImageTag
  } = props

  const modifiedClassNames = classNames('tile-image-content', className, modifier, {
    'use-bg': !useImageTag
  })

  return (
    <div className={modifiedClassNames}>
      <Image
        isImage={useImageTag}
        className='tile-image-content__image'
        imageSrc={`${rootPath}${src}`}
        alt={alt} />
    </div>
  )
}

/**
 *  propTypes
 *  @type {Object}
 */
TileImageContent.propTypes = {
  rootPath: PropTypes.string,
  src: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  alt: PropTypes.string,
  useBg: PropTypes.bool
}

/**
 *  defaultProps
 *  @type {Object}
 */
TileImageContent.defaultProps = {
  alt: 'Horse racing',
  className: '',
  useImageTag: true
}

/**
 *  @module TileImageContent
 */
export default TileImageContent
