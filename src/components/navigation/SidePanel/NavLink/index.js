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

    const modifiedClassNames = classNames('side-panel-nav-link', className)

    const modifiedLinkClassNames = classNames('side-panel-nav-link__link', linkClassName)

    return (
      <li className={modifiedClassNames}>
        <DefaultNavLink className={modifiedLinkClassNames} activeClassName='side-panel-nav-link__link--active' {...rest}>
          <h4 className='side-panel-nav-link__link-text capitalize'>
            {children}
          </h4>
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
