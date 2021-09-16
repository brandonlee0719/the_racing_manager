import jwtDecode from 'jwt-decode'

/**
 *  @name  isJwtValid
 *  @description Will check the expiry date of a JWT token
 *  @param  {String} token
 *  @return {Boolean}
 */
export const isJwtValid = (token) => {
  if (!token) {
    return false
  }

  try {
    const { exp } = jwtDecode(token)

    return exp > (new Date().getTime() / 1000)
  } catch (e) {
    return false
  }
}
