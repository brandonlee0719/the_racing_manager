import addCreditCardReducer from './addCreditCardReducer'

import billingAddress from 'reducers/account/BillingAddress'

import creditCard from 'reducers/account/CreditCard'

import reducerFactory from 'reducers/reducerFactory'

import { combineReducers } from 'redux'

const combinedAccountReducers = combineReducers({
  billingAddress: reducerFactory(billingAddress, 'accountBillingAddress'),
  creditCard: creditCard,
  info: addCreditCardReducer
})

export default combinedAccountReducers
