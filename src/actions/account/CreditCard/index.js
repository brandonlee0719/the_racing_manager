import { AUTHENTICATED_REQUEST } from 'middleware/AuthenticatedRequest'

import {
  addCreditCard,
  getCreditCards,
  deleteCreditCard
} from 'api/Services/'

import { addToastSuccess, addToastError } from 'actions/toast'

export const FORM_UPDATE = '@CREDIT_CARD/FORM_UPDATE'

export const FORM_RESET = '@CREDIT_CARD/FORM_RESET'

export const FORM_SUBMITTING = '@CREDIT_CARD/FORM_SUBMITTING'

export const FORM_ERROR = '@CREDIT_CARD/FORM_ERROR'

export const FORM_SUBMITTING_FAILED = '@CREDIT_CARD/FORM_SUBMITTING_FAILED'

export const FORM_SUBMITTED = '@CREDIT_CARD/FORM_SUBMITTED'

export const updateForm = (name, value, reducerName) => ({
  type: FORM_UPDATE,
  name,
  value,
  reducerName
})

export const resetForm = (reducerName) => ({
  type: FORM_RESET,
  reducerName
})

export const submitForm = (reducerName) => ({
  type: FORM_SUBMITTING,
  reducerName
})

export const submittedForm = (reducerName) => ({
  type: FORM_SUBMITTED,
  reducerName
})

export const failedToSubmitForm = (error, reducerName) => ({
  type: FORM_SUBMITTING_FAILED,
  error,
  reducerName
})

export const updateFormError = (errors, name, reducerName) => ({
  type: FORM_ERROR,
  errors,
  name,
  reducerName
})

export const submitFormData = (data, reducerName) => {
  return (dispatch, getState) => {
    return dispatch(submitForm())
  }
}

/* CARD GET CARDS */

export const GETTING_CARDS = '@CREDIT_CARD/GETTING_CARDS'
export const GOT_CARDS = '@CREDIT_CARD/GOT_CARDS'
export const GETTING_CARDS_FAILED = '@CREDIT_CARD/GETTING_CARDS_FAILED'

export const gettingCards = () => ({
  type: GETTING_CARDS
})

export const gotCards = data => ({
  type: GOT_CARDS,
  data
})

export const failedToGetCards = (error) => ({
  type: GETTING_CARDS_FAILED,
  error
})

export const fetchCards = () => {
  return (dispatch, getState) => {
    return dispatch({
      type: AUTHENTICATED_REQUEST,
      types: [gettingCards, gotCards, failedToGetCards],
      endpoint: getCreditCards,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .catch((e) => {
        if (e.message !== 'Empty sources') { // Only show an error if cards not empty
          dispatch(addToastError('There was an error fetching your cards'))
        }
      })
  }
}

/* ADD CARD */

export const CARD_SUBMITTING = '@CREDIT_CARD/CARD_SUBMITTING'
export const CARD_SUBMITTED = '@CREDIT_CARD/CARD_SUBMITTED'
export const CARD_SUBMITTING_FAILED = '@CREDIT_CARD/CARD_SUBMITTING_FAILED'

export const submitCard = () => ({
  type: CARD_SUBMITTING
})

export const submittedCard = () => ({
  type: CARD_SUBMITTED
})

export const failedToSubmitCard = (error) => ({
  type: CARD_SUBMITTING_FAILED,
  error
})

export const submitCardToServer = data => {
  return (dispatch, getState) => {
    return dispatch({
      type: AUTHENTICATED_REQUEST,
      types: [submitCard, submittedCard, failedToSubmitCard],
      endpoint: addCreditCard,
      payload: JSON.stringify({
        tokenId: data.token.id
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then(() => {
        dispatch(addToastSuccess('Card Successfully Added'))
        dispatch(fetchCards())
        Promise.resolve()
      })
      .catch((e) => {
        dispatch(addToastError('There was an error adding your card, please check your details and try again'))
      })
  }
}

/* DELETE CARD */

export const CARD_DELETE_SUBMITTING = '@CREDIT_CARD/CARD_DELETE_SUBMITTING'
export const CARD_DELETE_SUBMITTED = '@CREDIT_CARD/CARD_DELETE_SUBMITTED'
export const CARD_DELETE_SUBMITTING_FAILED = '@CREDIT_CARD/CARD_DELETE_SUBMITTING_FAILED'

export const submitCardDelete = () => ({
  type: CARD_DELETE_SUBMITTING
})

export const submittedCardDelete = () => ({
  type: CARD_DELETE_SUBMITTED
})

export const failedToSubmitCardDelete = (error) => ({
  type: CARD_DELETE_SUBMITTING_FAILED,
  error
})

export const deleteCard = cardAccountId => {
  return (dispatch, getState) => {
    return dispatch({
      type: AUTHENTICATED_REQUEST,
      types: [submitCardDelete, submittedCardDelete, failedToSubmitCardDelete],
      endpoint: deleteCreditCard,
      payload: JSON.stringify({
        cardAccountId
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then(() => {
        dispatch(addToastSuccess('Card successfully deleted'))
        dispatch(fetchCards())
        Promise.resolve()
      })
      .catch((e) => {
        dispatch(addToastError('There was an error deleting your card'))
      })
  }
}
