import React from 'react'

import PropTypes from 'prop-types'

import classNames from 'utils/classnames'

import { Link } from 'react-router-dom'

import { HashLink } from 'react-router-hash-link'

const CtaLink = props => {
  const {
    className,
    modifier,
    href,
    children,
    nativeLink,
    hashLink,
    ...rest
  } = props

  const modifiedClassNames = classNames('link', className, modifier)

  if (nativeLink) {
    return (
      <a href={href} className={modifiedClassNames} {...rest}>
        {children}
      </a>
    )
  } else
  if (hashLink) {
    return (
      <HashLink to={href} className={modifiedClassNames} {...rest}>
        {children}
      </HashLink>
    )
  } else {
    return (
      <Link to={href} className={modifiedClassNames} {...rest}>
        {children}
      </Link>
    )
  }
}

CtaLink.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  href: PropTypes.string,
  nativeLink: PropTypes.bool,
  hashLink: PropTypes.bool
}

CtaLink.defaultProps = {
  className: '',
  modifier: '',
  href: '/',
  nativeLink: false,
  hashLink: false
}

export default CtaLink
