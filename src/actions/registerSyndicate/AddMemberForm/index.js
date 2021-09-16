
import {
  registerSyndicateMembers,
  updateMembersDistribution
} from 'api/Services'

import { REGISTER_SYNDICATE_MEMBERS, REGISTER_SYNDICATE_DISTRIBUTION } from 'texts/successmessages'

import { addToastSuccess, addToastError } from 'actions/toast'

import { AUTHENTICATED_REQUEST } from 'middleware/AuthenticatedRequest'

export const FORM_UPDATE = '@MEMBER_FORM/FORM_UPDATE'

export const FORM_RESET = '@MEMBER_FORM/FORM_RESET'

export const FORM_SUBMITTING = '@MEMBER_FORM/FORM_SUBMITTING'

export const FORM_ERROR = '@MEMBER_FORM/FORM_ERROR'

export const FORM_SUBMITTING_FAILED = '@MEMBER_FORM/FORM_SUBMITTING_FAILED'

export const FORM_SUBMITTED = '@MEMBER_FORM/FORM_SUBMITTED'

export const FORM_SUBMITDATA = '@MEMBER_FORM/FORM_SUBMITDATA'

export const SAVE_DB_MEMBERS_DATA = 'SAVE_DB_MEMBERS_DATA'

export const REGISTERING_SNDICATE_MEMBERS = 'REGISTERING_SNDICATE_MEMBERS'

export const REGISTERED_SNDICATE_MEMBERS = 'REGISTERED_SNDICATE_MEMBERS'

export const FAILED_TO_REGISTER_SNDICATE_MEMBERS = 'FAILED_TO_REGISTER_SNDICATE_MEMBERS'

export const RESET_MEMBERS_DATA = 'RESET_MEMBERS_DATA'

export const registeringSyndicateMembers = () => ({
  type: REGISTERING_SNDICATE_MEMBERS
})

export const registeredSyndicateMembers = () => ({
  type: REGISTERED_SNDICATE_MEMBERS
})

export const failedToRegisterSyndicateMembers = () => ({
  type: FAILED_TO_REGISTER_SNDICATE_MEMBERS
})

export const updateForm = (dataKey, name, value) => ({
  type: FORM_UPDATE,
  key: dataKey,
  name,
  value
})

export const resetForm = (dataKey) => ({
  type: FORM_RESET,
  key: dataKey
})

export const submitForm = () => ({
  type: FORM_SUBMITTING
})

export const saveDBMembersData = (data) => ({
  type: SAVE_DB_MEMBERS_DATA,
  data
})

export const submittedForm = () => ({
  type: FORM_SUBMITTED
})

export const failedToSubmitForm = (error) => ({
  type: FORM_SUBMITTING_FAILED,
  error
})

export const updateFormError = (errors, name) => ({
  type: FORM_ERROR,
  errors,
  name
})

export const submitFormData = (key, data) => ({
  type: FORM_SUBMITDATA,
  data: data,
  key: key
})

export const resetSyndicateMemberData = () => ({
  type: RESET_MEMBERS_DATA
})

export const registerSyndicateMembersData = (slug, payload) => {
  return (dispatch, getState) => {
    return dispatch({
      type: AUTHENTICATED_REQUEST,
      types: [registeringSyndicateMembers, registeredSyndicateMembers, failedToRegisterSyndicateMembers],
      endpoint: registerSyndicateMembers,
      headers: {'Content-Type': 'application/json'},
      payload,
      urlParams: {slug}
    })
      .then((data) => {
        dispatch(addToastSuccess(REGISTER_SYNDICATE_MEMBERS))
        dispatch(saveDBMembersData(data))
        return Promise.resolve()
      })
      .catch((error) => {
        if (error && error.message) {
          dispatch(addToastError(error.message))
        }
      })
  }
}

export const updateSyndicateMembersDistribution = (slug, payload) => {
  return (dispatch, getState) => {
    return dispatch({
      type: AUTHENTICATED_REQUEST,
      types: [registeringSyndicateMembers, registeredSyndicateMembers, failedToRegisterSyndicateMembers],
      endpoint: updateMembersDistribution,
      headers: {'Content-Type': 'application/json'},
      payload,
      urlParams: {slug}
    })
      .then(() => {
        dispatch(addToastSuccess(REGISTER_SYNDICATE_DISTRIBUTION))
        return Promise.resolve()
      })
      .catch((error) => {
        if (error && error.message) {
          dispatch(addToastError(error.message))
        }
      })
  }
}