import React from 'react'

import PropTypes from 'prop-types'

import classNames from 'utils/classnames'

const BurgerMenu = (props) => {
  const {
    isActive,
    className,
    modifier,
    onClick
  } = props

  const modifiedClassNames = classNames('burger-menu', className, modifier, {
    'active': isActive
  })

  return (
    <div className={modifiedClassNames} onClick={onClick}>
      <span className='burger-menu__middle' />
    </div>
  )
}

BurgerMenu.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func
}

BurgerMenu.defaultProps = {
  isActive: false
}

export default BurgerMenu
