/**
 *  @module React
 */
import React from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @module Select
 */
import Select, { Option } from 'components/input/Select'

/**
 *  @module Icon
 */
import Icon from 'components/icon'

/**
 *  @module omit
 */
import omit from 'utils/objectutils/omit'

/**
 *  @name SortSelect
 */
const SortSelect = props => {
  const {
    title,
    children,
    className
  } = props

  const modifiedClassNames = classNames('sort-select', className)

  // Props for the select component
  const selectProps = omit(props, ['title', 'children'])

  return (
    <div className={modifiedClassNames}>
      <div className='sort-select__left visible-sm-up'>
        <h6 className='secondary-font uppercase'>
          {title}
        </h6>
      </div>
      <div className='sort-select__middle'>
        <Select
          className='sort-select__select-input'
          {...selectProps}>
          {children}
        </Select>
      </div>
      <div className='sort-select__right visible-sm-up'>
        <Icon
          className='sort-select__dropdown-icon'
          modifier='dropdown' />
      </div>
    </div>
  )
}

SortSelect.defaultProps = {
  title: ''
}

SortSelect.propTypes = {
  title: PropTypes.string
}

export {
  Option
}

/**
 *  @module SortSelect
 */
export default SortSelect
