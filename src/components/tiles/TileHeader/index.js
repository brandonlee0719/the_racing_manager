import React from 'react'

import PropTypes from 'prop-types'

import classNames from 'utils/classnames'

import Image from 'components/image'

import Icon from 'components/icon'

const TileHeader = props => {
  const {
    className,
    modifier,
    name,
    date,
    src,
    isIcon,
    iconModifier
  } = props

  const modifiedClassNames = classNames('tile-header', className, modifier)

  const modifiedAvatarClassNames = classNames('tile-header__section', '', {
    hidden: (!src && !isIcon),
    avatar: true
  })
  return (
    <div className={modifiedClassNames}>
      <div className={modifiedAvatarClassNames}>
        {
          isIcon
          ? (
              <Icon className='tile-header__icon' modifier={iconModifier} />
            )
          : (
              <Image isImage imageSrc={src} />
            )
        }
      </div>
      <div className='tile-header__section tile-header__section--middle'>
        <p className='micro regular'>
          {name}
        </p>
      </div>
      <div className='tile-header__section'>
        <p className='micro regular'>
          {date}
        </p>
      </div>
    </div>
  )
}

/**
 *  propTypes
 *  @type {Object}
 */
TileHeader.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  name: PropTypes.string,
  date: PropTypes.string,
  src: PropTypes.string,
  isIcon: PropTypes.bool,
  iconModifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
}

/**
 *  defaultProps
 *  @type {Object}
 */
TileHeader.defaultProps = {
  className: '',
  modifier: '',
  isIcon: false
}

/**
 *  @module TileHeader
 */
export default TileHeader
