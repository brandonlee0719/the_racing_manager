import { setItem, removeItem } from 'utils/storageutils'

import { getInitialAppData } from 'api/Services'

import { USER_TOKEN } from 'data/consts'

import { formatUser } from 'utils/user'

export const LOG_OUT = 'USER_LOG_OUT'

export const STORE_USER_CREDENTIALS = 'STORE_USER_CREDENTIALS'

export const NO_AUTHENTICATION = 'NO_AUTHENTICATION'

export const logOut = () => {
  removeItem(USER_TOKEN)

  return {
    type: LOG_OUT
  }
}

export const storeUserCredentials = ({user, token}) => {
  // Store the user token
  setItem(USER_TOKEN, token)

  // Format the user
  const formattedUser = formatUser(user)

  return {
    type: STORE_USER_CREDENTIALS,
    user: formattedUser,
    token
  }
}

export const noAuthentication = () => {
  return (dispatch, getState) => {
    dispatch({ type: NO_AUTHENTICATION })
    dispatch(logOut())
  }
}

export const authenticateUserFromToken = (token) => {
  return (dispatch, getState) => {
    return getInitialAppData(token)
    .then(({user}) => {
      dispatch(storeUserCredentials({user, token}))
      return Promise.resolve(user, token)
    })
    .catch((error) => {
      dispatch(noAuthentication())
      return Promise.reject(error)
    })
  }
}
