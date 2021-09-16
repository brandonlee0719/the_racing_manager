import addMemberForm from './AddMemberForm'
import membersInfo from './MembersInfo'

import { combineReducers } from 'redux'

const combinedRegisterSyndicateMemberReducers = combineReducers({
  membersInfo: membersInfo,
  membersData: addMemberForm
})

export default combinedRegisterSyndicateMemberReducers
