import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'utils/classnames'

const List = props => {
  const { items, className, modifier } = props

  const modifiedClassNames = classNames('list', className, modifier)

  return (
    <ul className={modifiedClassNames}>
      {
        items.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))
      }
    </ul>
  )
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.any
  ).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
}

List.defaultProps = {
  className: '',
  modifier: ''
}

export default List
