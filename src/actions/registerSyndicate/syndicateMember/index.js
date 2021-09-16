export const SET_STEP_STATUS = 'SET_STEP_STATUS'
export const SET_MEMBERS_COUNT = 'SET_MEMBERS_COUNT'
export const SET_MEMBERS_DATA = 'SET_MEMBERS_DATA'
export const UPDATE_MEMBERS_DATA = 'UPDATE_MEMBERS_DATA'
export const DELETE_MEMBERS_DATA = 'DELETE_MEMBERS_DATA'
export const RESET_MEMBER_INFO = 'RESET_MEMBER_INFO'

export const setStepStatus = (step) => ({
  type: SET_STEP_STATUS,
  step
})

export const setMembersCount = (count) => ({
  type: SET_MEMBERS_COUNT,
  count
})

export const setMembersData = () => ({
  type: SET_MEMBERS_DATA
})

export const updateMembersData = () => ({
  type: UPDATE_MEMBERS_DATA
})

export const deleteMembersData = () => ({
  type: DELETE_MEMBERS_DATA
})

export const resetSyndicateMemberInfo = () => ({
  type: RESET_MEMBER_INFO
})

export const resetSyndicateMemberState = (value) => {
  return (dispatch, getState) => {
    dispatch(resetSyndicateMemberInfo())
    return Promise
  }
}