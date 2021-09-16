import React, { PureComponent } from 'react'

import classNames from 'utils/classnames'

import DefaultNavLink from 'components/links/NavLink'

import PropTypes from 'prop-types'

class NavLink extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      className,
      children,
      linkClassName,
      ...rest
    } = this.props

    const modifiedClassNames = classNames('secondary-nav-link', className)

    const modifiedLinkClassNames = classNames('secondary-nav-link__link', linkClassName)

    return (
      <li className={modifiedClassNames}>
        <DefaultNavLink className={modifiedLinkClassNames} activeClassName='secondary-nav-link__link--active' {...rest}>
          <h6 className='secondary-nav-link__link-text uppercase'>
            {children}
          </h6>
        </DefaultNavLink>
      </li>
    )
  }
}

NavLink.propTypes = {
  className: PropTypes.string,
  linkClassName: PropTypes.string
}

export default NavLink
