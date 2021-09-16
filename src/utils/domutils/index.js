/**
*    @function
*    @return { DOMElement }
*    @param { string } id
*/
export const queryById = id => {
  return document.getElementById(id)
}

/**
 *  @name queryBySelector
 *  @param  {String} selector
 *  @return {DOMElement}
 */
export const queryBySelector = selector => {
  return document.querySelector(selector)
}

/**
 * Utility to detect if the device is a touch
 * @returns { Boolean }
 */
export const isTouchDevice = () => {
  return 'ontouchstart' in window ||
          navigator.maxTouchPoints > 0 ||
          navigator.msMaxTouchPoints > 0
}

/**
 *  Will return boolean if there is any highlighted text
 *  @return {Boolean}
 */
export const getTextSelection = () => {
  if (window.getSelection) {
    return window.getSelection()
  } else
  if (document.getSelection) {
    return window.getSelection()
  } else
  if (document.selection) {
    const selection = document.selection.createRange()

    if (selection.text) {
      return selection
    }
  }
}

export const hasTextSelection = () => {
  const selection = getTextSelection()

  // If there is no selection, return false
  if (!selection) {
    return false
  }

  // Cast selection to string and then cast to boolean
  return !!(selection.toString())
}

/**
 * @name addClass
 * @description  Adds a class to passed element
 * @param { HTMLElement } element
 * @param { String } className
 */
export const addClass = (element, className) => {
  if (element && element.classList) {
    const classNames = className.split(' ')
    for (let i = 0, len = classNames.length; i < len; i++) {
      element.classList.add(classNames[i])
    }
  }
}

/**
 *  @name toggleClass
 *  @description Toggles class to passed in element
 *  @param  {HTMLElement} element
 *  @param  {String} className
 *  @return {Void}
 */
export const toggleClass = (element, className) => {
  if (element && element.classList) {
    const classNames = className.split(' ')
    for (let i = 0, len = classNames.length; i < len; i++) {
      element.classList.toggle(classNames[i])
    }
  }
}

/**
 *  @name removeClass
 *  @description Removes class to passed in element
 *  @param  {HTMLElement} element
 *  @param  {String} className
 *  @return {Void}
 */
export const removeClass = (element, className = '') => {
  if (element && element.classList) {
    const classNames = className.split(' ')
    for (let i = 0, len = classNames.length; i < len; i++) {
      element.classList.remove(classNames[i])
    }
  }
}

/**
 *  getTop
 *  @param  {HTMLElement} elem
 *  @return {Object}
 */
export const getTop = (elem) => {
  var box = elem.getBoundingClientRect()
  var body = document.body
  var docEl = document.documentElement

  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft

  var clientTop = docEl.clientTop || body.clientTop || 0
  var clientLeft = docEl.clientLeft || body.clientLeft || 0

  var top = box.top + scrollTop - clientTop
  var left = box.left + scrollLeft - clientLeft

  return { top: Math.round(top), left: Math.round(left) }
}

/**
 *  stopPropagation
 *  @description Will stop the propagation of events going to the parent
 *  @param  {Event} e
 *  @return {Void}
 */
export const stopPropagation = (e) => {
  if (e && e.stopPropagation) {
    e.stopPropagation()
  } else
  if (e && e.nativeEvent) {
    e.nativeEvent.stopPropagation()
  }
}

/**
 *  testForPassiveScroll
 *  @description Will check to see if passive options is available with dom events
 *  @return {Boolean}
 */
export const testForPassiveScroll = () => {
  let supportsPassiveOption = false
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get: function () {
        supportsPassiveOption = true
      }
    })
    window.addEventListener('test', null, opts)
    window.removeEventListener('test', null, opts)
  } catch (e) {}
  return supportsPassiveOption
}
