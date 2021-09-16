import React from 'react'

import { TRAILING_SPACES_REG } from 'utils/validation/ValidationTypes'

export const trim = (str = '') => {
  return str.replace(TRAILING_SPACES_REG, '')
}

export const toUpperCase = (str = '') => {
  if (typeof str !== 'string') {
    return str
  }

  return str.toUpperCase()
}

export const textToNewLineReactComponent = (text = '') => {
  return text.split('\n').map((item, key) => {
    return <span key={key}>{item}<br/></span>
  })
}
