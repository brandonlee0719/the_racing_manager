import memberDashboard from './MemberDashboard'

import messageDashboard from './MessageDashboard'

import { combineReducers } from 'redux'

const reducers = combineReducers({
  member: memberDashboard,
  message: messageDashboard
})

export default reducers
