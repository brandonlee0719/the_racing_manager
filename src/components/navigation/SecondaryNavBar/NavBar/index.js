import React, { PureComponent } from 'react'

import classNames from 'utils/classnames'

import PropTypes from 'prop-types'

class NavBar extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      className,
      children,
      modifier
    } = this.props

    const modifiedClassNames = classNames('secondary-nav-bar', className, modifier)

    return (
      <nav role='navigation' className={modifiedClassNames}>
        <div className='container'>
          <ul className='secondary-nav-bar__list no-list-style'>
            {children}
          </ul>
        </div>
      </nav>
    )
  }
}

NavBar.propTypes = {
  className: PropTypes.string
}

export default NavBar
