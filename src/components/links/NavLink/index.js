import React, { Component } from 'react'

import classNames from 'utils/classnames'

import { NavLink as DefaultNavLink } from 'react-router-dom'

class NavLink extends Component {
  constructor (props) {
    super(props)

    this.handleIsActive = this.handleIsActive.bind(this)
  }

  handleIsActive (match, location) {
    const {
      pathname = ''
    } = location

    const {
      href = ''
    } = this.props

    return (pathname && pathname === href)
  }

  render () {
    const {
      activeClassName,
      className,
      modifier,
      children,
      href,
      ...rest
    } = this.props

    const modifiedClassNames = classNames('link', className, modifier)

    return (
      <DefaultNavLink
        {...rest}
        to={href}
        className={modifiedClassNames}
        isActive={this.handleIsActive}
        activeClassName={activeClassName}
      >
        {children}
      </DefaultNavLink>
    )
  }
}

export default NavLink
