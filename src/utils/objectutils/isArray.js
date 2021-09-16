const ARRAY_PROTO = '[object Array]'

const _isArray = (value) => {
  return toString.call(value) === ARRAY_PROTO
}

const isArray = Array.isArray || _isArray

export default isArray
