/**
 *  @module fetch
 */
import 'whatwg-fetch'

import { verifyServerFormat, isParseable, constructQuery } from 'utils/request'

/**
 *  request
 *  @param  {Object} params
 *  @return {Promise}
 */
const request = params => {
  let method = params.method || 'GET'
  let qs = ''
  let body
  let headers = params.headers || {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }

  if (['GET', 'DELETE'].indexOf(method) > -1) {
    if (params.data) {
      qs = constructQuery(params.data)
    }
  } else { // POST or PUT
    body = params.data

    if (params.query) {
      qs = constructQuery(params.query)
    }
  }

  let url = params.url + qs

  if (params.urlParams) {
    for (let urlParam in params.urlParams) {
      url = url.replace(`:${urlParam}`, params.urlParams[urlParam])
    }
  }

  let opts = {
    headers,
    method,
    body
  }

  return fetch(url, opts)
    .then(isParseable)
    .then(verifyServerFormat)
    .catch(error => Promise.reject(error))
}

export const get = params => request(Object.assign({ method: 'GET' }, params))
export const post = params => request(Object.assign({ method: 'POST' }, params))
export const put = params => request(Object.assign({ method: 'PUT' }, params))
export const del = params => request(Object.assign({ method: 'DELETE' }, params))
export const patch = params => request(Object.assign({ method: 'PATCH' }, params))
