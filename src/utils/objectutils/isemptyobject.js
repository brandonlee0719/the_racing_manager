import hasProp from 'utils/objectutils/hasProp'

/**
 *  [isEmptyObject Check if an object is empty]
 *  @param  {Object} obj
 *  @return {Boolean}
 */
const isEmptyObject = obj => {
  for (let key in obj) {
    if (hasProp(obj, key)) {
      return false
    }
  }
  return true
}

export default isEmptyObject
