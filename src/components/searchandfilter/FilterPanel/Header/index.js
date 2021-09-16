import React from 'react'

import PropTypes from 'prop-types'

import classNames from 'classnames'

const FilterHeader = (props) => {
  const {
    className,
    modifier,
    children
  } = props

  const modifiedClassNames = classNames('filter-panel__title', 'uppercase', className, modifier)

  return (
    <h5 className={modifiedClassNames}>
      {children}
    </h5>
  )
}

FilterHeader.propTypes = {
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

export default FilterHeader
