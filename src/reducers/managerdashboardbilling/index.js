import bankDetails from './BankDetails'

import feeStructure from './FeeStructure'

import invoiceArchive from './InvoiceArchive'

import { combineReducers } from 'redux'

const reducers = combineReducers({
  bankDetails,
  feeStructure,
  invoiceArchive
})

export default reducers
