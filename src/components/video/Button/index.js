/**
 *  @module React
 */
import React from 'react'

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @name VideoButton
 *  @param  {Object} props
 *  @return {React.Component}
 */
const VideoButton = props => {
  const {
    className,
    modifier,
    show,
    onClick
  } = props

  const modifiedClassNames = classNames('video-button', className, modifier, {
    show
  })

  return (
    <div className={modifiedClassNames} onClick={onClick}>
      <div className='video-button__container'>
        <div className='video-button__play'></div>
      </div>
    </div>
  )
}

/**
 *  defaultProps
 *  @type {Object}
 */
VideoButton.defaultProps = {
  className: '',
  modifier: '',
  show: false
}

/**
 *  propTypes
 *  @type {Object}
 */
VideoButton.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  show: PropTypes.bool,
  onClick: PropTypes.func
}

/**
 *  @module VideoButton
 */
export default VideoButton
