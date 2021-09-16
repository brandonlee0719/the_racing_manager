/**
 *  setItem
 *  @param  {String} id
 *  @param  {Any} value
 *  @return {Void | Undefined}
 */
export const setItem = (id, value) => {
  try {
    localStorage.setItem(id, value)
  } catch (e) {
    console && console.error('Could not save to local storage')
    return undefined
  }
}

/**
 *  getItem
 *  @param  {String} id
 *  @return {Undefined | Any}
 */
export const getItem = id => {
  try {
    let serializedItem = localStorage.getItem(id)

    if (serializedItem === null) {
      return undefined
    }

    return serializedItem
  } catch (e) {
    console && console.error('could not get local storage')
    return undefined
  }
}

/**
 *  removeItem
 *  @param  {String} id
 *  @return {Void}
 */
export const removeItem = id => {
  try {
    localStorage.removeItem(id)
  } catch (e) {
    console && console.error('could not remove item!')
  }
}
