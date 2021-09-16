const hasProp = (obj, prop) => {
  return Object.prototype.hasOwnProperty.call(obj, prop)
}

export default hasProp
