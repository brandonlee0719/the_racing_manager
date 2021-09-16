/**
 *  appendBaseName
 *  @param  {String} baseName
 *  @param  {String} mod
 *  @return {String}
 */
const appendBaseName = (baseName, mod) => {
  return `${baseName}--${mod}`
}

/**
 *  modifiersToClasses
 *  @param  {String} baseClass
 *  @param  {Array} modifiers [Object, Array, String]
 *  @return {Array}
 */
const modifiersToClasses = (baseName, modifiers) => {
  // Check if a baseName exists and modifiers has a length of more then 1.
  if (!baseName || !modifiers.length) {
    return []
  }

  return modifiers.map(mod => {
    if (mod instanceof Array && mod.length) {
      // Loop around all names and append the base name.
      return mod.map(name => appendBaseName(baseName, name))
    } else if (typeof mod === 'string' && mod) {
      // Append the basename to the mod.
      return appendBaseName(baseName, mod)
    } else if (mod instanceof Object) {
      // Construct an array to hold the names of the object in which there value is true.
      let modArray = []

      for (let name in mod) {
        if (mod[name]) {
          modArray.push(appendBaseName(baseName, name))
        }
      }

      return modArray
    }
  })
}

/**
 *  @module modifiersToClasses
 */
export default modifiersToClasses
