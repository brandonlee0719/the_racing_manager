/**
 *  processMediaPayload
 *  @param  {Object} payload
 *  @return {FormData}
 */
const processMediaPayload = payload => {
  const body = new FormData()

  Object.keys(payload).forEach(key => {
    const value = payload[key]

    if (value) {
      if (key === 'attachment' || Array.isArray(value)) {
        for (let i = 0, len = value.length; i < len; i++) {
          body.append(key, value[i])
        }
      } else {
        body.append(key, value)
      }
    }
  })
  return body
}

/**
 *  @module processPayload
 */
export default processMediaPayload
