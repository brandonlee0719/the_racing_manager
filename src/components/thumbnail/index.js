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
 *  @module omit
 */
import omit from 'utils/objectutils/omit'

/**
 *  @name Thumbnail
 *  @param  {Object} props
 *  @return {React.Component}
 */
const Thumbnail = props => {
  const {
    className,
    modifier,
    handleDelete
  } = props

  // Container class names
  const modifiedClassNames = classNames('thumbnail', className, modifier)

  // image props.
  const imageProps = omit(props, ['className', 'modifier', 'userCanRemove'])

  return (
    <div className={modifiedClassNames}>
      <div className='thumbnail__delete' onClick={handleDelete}>
        <p className='micro'>x</p>
      </div>
      <Image
        {...imageProps}
        forceShow={true}
        className='thumbnail__image' />
    </div>
  )
}

/**
 *  propTypes
 *  @type {Object}
 */
Thumbnail.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  handleDelete: PropTypes.func
}

/**
 *  defaultProps
 *  @type {Object}
 */
Thumbnail.defaultProps = {
  className: ''
}

/**
 *  @module Thumbnail
 */
export default Thumbnail
