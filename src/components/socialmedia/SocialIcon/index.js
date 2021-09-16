/**
 * @module react
 */
import React from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @module Icon
 */
import Icon from 'components/icon'

/**
 * @module getSocialMediaLinks
 */
import { getSocialMediaLinks } from 'utils/socialmedia'

/**
 *  SocialIcon
 *  @param  {Object} props
 *  @return {React.Component}
 */
const SocialIcon = props => {
  const {
    className,
    modifier
  } = props

  // Construct class names.
  const modifiedClassNames = classNames('social-icon', className)

  return (
    <a className={modifiedClassNames} target='_blank' href={getSocialMediaLinks(modifier)}>
      <Icon
        modifier={modifier} />
    </a>
  )
}

/**
 *  propTypes
 *  @type {Object}
 */
SocialIcon.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.string
}

/**
 *  defaultProps
 *  @type {Object}
 */
SocialIcon.defaultProps = {
  className: ''
}

/**
 *  @module SocialIcon
 */
export default SocialIcon
