import { constructStaticUrl } from 'utils/horseutils'

import { timestampToDate } from 'utils/dateutils'

import isObject from 'utils/objectutils/isObject'

import update from 'immutability-helper'

export const formatUser = (user = {}) => {
  if (!isObject(user)) {
    return user
  }

  const clonedUser = update(user, {})

  const {
    avatarImage,
    birthDate
  } = clonedUser

  if (avatarImage) {
    clonedUser.avatarImage = constructStaticUrl(avatarImage)
  }

  if (birthDate) {
    clonedUser.birthDate = timestampToDate(birthDate)
  }

  return clonedUser
}
