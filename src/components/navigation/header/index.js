/**
 * @module react
 */
import React from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module Link
 */
import { Link } from 'react-router-dom'

/**
 *  @module Image
 */
import Image from 'components/image'

/**
 *  @module logo
 */
import { logo } from 'assets/images'

/**
 * Header component
 * @param { Object } props
 * @returns { React.Component }
 * @constructor
 */
const Header = props => {
  const { children, logohref } = props
  return (
    <header className='header'>
      <Link to={logohref} className='header__logo'>
        <Image
          imageSrc={logo}
          className='header__logo-image image--background'/>
        <h5 className='header__logo-text'>
          <span className='visible-sm-up'>The Racing Manager</span>
          <span className='hidden-sm-up'>TRM</span>
        </h5>
      </Link>
      {children}
    </header>
  )
}

/**
 * Component prop types
 * @type { Object }
 */
Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node
  ]),
  logohref: PropTypes.string
}

/**
 * Component default props
 * @type { Object }
 */
Header.defaultProps = {}

export default Header
