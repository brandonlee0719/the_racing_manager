/**
*  @module React
*/
import React from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
*  @module classnames
*/
import classNames from 'utils/classnames'

/**
*  @name InputLine
*  @param { Object } props
*  @property { Object } [props.style]
*  @property { String | Boolean } [props.error = '']
*  @returns { React.Component }
*/
const InputLine = props => {
  /**
   *  @const
   */
  const { style, error, className, modifier } = props

  /**
  *  @private
  *  @type { string }
  */
  const modifiedClassNames = classNames('form-input-line', className, {error}, modifier)

  return (
    <div className={modifiedClassNames} style={{...style}} />
  )
}

/**
*  Component Default Props
*  @type { object }
*/
InputLine.propTypes = {
  style: PropTypes.object,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.object
  ])
}

/**
* Component Prop Types
*  @type { object }
*/
InputLine.defaultProps = {
  style: {},
  error: false,
  modifier: 'left',
  className: ''
}

/**
 *  @module InputLine
 */
export default InputLine
