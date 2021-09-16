export const ADD_TOAST = '@TOAST/ADD_TOAST'
export const REMOVE_TOAST = '@TOAST/REMOVE_TOAST'

let uniqueId = 0

const addToast = ({ toastType, text }) => ({
  type: ADD_TOAST,
  payload: {
    toastType,
    text,
    id: (++uniqueId)
  }
})

export const addToastSuccess = (text) => addToast({
  toastType: 'success',
  text
})

export const addToastError = (text) => addToast({
  toastType: 'error',
  text
})

export const addToastWarning = (text) => addToast({
  toastType: 'warning',
  text
})

export const addToastInfo = (text) => addToast({
  toastType: 'info',
  text
})

export const removeToast = (removeId) => ({
  type: REMOVE_TOAST,
  payload: {
    removeId
  }
})
