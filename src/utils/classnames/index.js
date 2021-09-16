/**
 *  @module constructClassNames
 */
import constructClassNames from 'classnames'

/**
 *  @module modifiersToClasses
 */
import modifiersToClasses from './modifiersToClasses'

/**
 *  @name  classNames
 *  @param  {String} cName [String]
 *  @param  {String | Array | Object} extraClassNames [String]
 *  @param  {String | Array | Object} modifiers [Array]
 *  @return {String}
 */
const classNames = (baseName = '', extraNames = '', ...modifiers) => {
  // Construct modifications to classes from passed in arguments.
  const classesMods = modifiersToClasses(baseName, modifiers)

  return constructClassNames(baseName, extraNames, ...classesMods)
}

/**
 *  @module classNames
 */
export default classNames
