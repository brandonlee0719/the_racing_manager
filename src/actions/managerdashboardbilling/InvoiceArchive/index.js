import {
  getUploadedData
} from 'api/Services'

/*
 Action Types
 */
export const FETCH_UPLOADED_FILES = '@INVOICE_ARCHIVE/FETCH_UPLOADED_FILES'

export const getUploadedfiles = () => {
  return (dispatch, getState) => {
    return getUploadedData()
    .then((response) =>
      dispatch({
        type: FETCH_UPLOADED_FILES,
        data: response
      })
    )
  }
}