/**
*  @module react
*/
import React from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
*  @module classNames
*/
import classNames from 'utils/classnames'

/**
 *  @name InputError
 *  @param  {Array} options.errors
 *  @param  {Array | String | Object} options.className
 *  @param  {Array | String | Object} options.modifier
 *  @return {React.Component}
 */
const InputError = ({errors, className, modifier}) => {
  const modifiedClassNames = classNames('input-error', className, modifier)

  return (
    <p className={modifiedClassNames}>
      {
        errors.map((error, index) => {
          return (<span key={index}>{error}<br/></span>)
        })
      }
    </p>
  )
}

/**
 *  defaultProps
 *  @type {Object}
 */
InputError.defaultProps = {
  errors: []
}

/**
 *  propTypes
 *  @type {Object}
 */
InputError.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  errors: PropTypes.array
}

/**
 *  @module InputError
 */
export default InputError
