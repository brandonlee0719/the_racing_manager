import isArray from './isArray'

const isObject = (val) => {
  return val !== null &&
    typeof val === 'object' &&
    isArray(val) === false
}

export default isObject
