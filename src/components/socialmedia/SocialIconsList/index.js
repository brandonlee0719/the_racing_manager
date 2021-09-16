/**
 *  @module React
 */
import React from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @module SocialIcon
 */
import SocialIcon from 'components/socialmedia/SocialIcon'

/**
 *  SocialIconsList
 *  @description Will group social icons and make them sit side by side
 *  @param  {Props} props
 *  @return {React.Component}
 */
const SocialIconsList = props => {
  const {
    className,
    modifier,
    socialIconNames
  } = props

  /**
   *  @type {String}
   */
  const modifiedClassNames = classNames('social-icons-list', className, modifier)

  return (
    <div className={modifiedClassNames}>
      {
        socialIconNames.map((icon, index) => {
          return <SocialIcon key={index} className='social-icons-list__icon' modifier={icon} />
        })
      }
    </div>
  )
}

SocialIconsList.defaultProps = {
  className: '',
  socialIconNames: []
}

SocialIconsList.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  socialIconNames: PropTypes.array
}

/**
 *  @module SocialIconsList
 */
export default SocialIconsList
