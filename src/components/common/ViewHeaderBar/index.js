import React from 'react'

import classNames from 'utils/classnames'

import PropTypes from 'prop-types'

const ViewHeaderBar = (props) => {
  const {
    className,
    title
  } = props

  const modifiedClassNames = classNames('view-header-bar', className)

  return (
    <div className={modifiedClassNames}>
      <div className='container'>
        <h1 className='uppercase'>{title}</h1>
      </div>
    </div>
  )
}

ViewHeaderBar.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  title: PropTypes.string
}

ViewHeaderBar.defaultProps = {
  title: ''
}

export default ViewHeaderBar
