import personalInformation from './PersonalInformation'

import contactDetails from './ContactDetails'

import resetPassword from './ResetPassword'

import addCreditCard from './AddCreditCard'

import { combineReducers } from 'redux'

const reducers = combineReducers({
  personalInformation,
  contactDetails,
  resetPassword,
  addCreditCard
})

export default reducers
