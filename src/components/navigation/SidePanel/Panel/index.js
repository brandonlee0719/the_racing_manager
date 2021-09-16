import React from 'react'

import classNames from 'utils/classnames'

import PropTypes from 'prop-types'

const SidePanel = (props) => {
  const {
    className,
    children
  } = props

  const modifiedClassName = classNames('side-panel', className)

  return (
    <nav role='navigation' className={modifiedClassName}>
      <ul className='side-panel__list no-list-style'>
        {children}
      </ul>
    </nav>
  )
}

SidePanel.propTypes = {
  className: PropTypes.string
}

export default SidePanel
