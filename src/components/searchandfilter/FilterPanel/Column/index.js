import React from 'react'

import PropTypes from 'prop-types'

import classNames from 'classnames'

const FilterColumn = (props) => {
  const {
    className,
    modifier,
    children
  } = props

  const modifiedClassNames = classNames('filter-panel__column', className, modifier)

  return (
    <div className={modifiedClassNames}>
      {children}
    </div>
  )
}

FilterColumn.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.object
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.object
  ]),
  children: PropTypes.node
}

export default FilterColumn
