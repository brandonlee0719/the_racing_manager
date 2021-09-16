/**
 * Returns the same function but safe to call multiple times. The first time execution delays until
 * the next frame. All the next calls will trigger the function in the next frame as well.
 * @param {function} f - Function to de-bounce.
 * @param {number} rate - De-bouncing rate.
 * @returns {function}
 */
const debounce = (f, rate = 45) => {
  let timeout = 0
  return (...props) => {
    if (timeout !== 0) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      timeout = 0
      f(...props)
    }, rate)
  }
}

export default debounce
