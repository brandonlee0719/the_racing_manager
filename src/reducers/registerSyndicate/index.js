import registerSyndicateName from './registerSyndicateName'
import registerSyndicateColours from './registerSyndicateColours'
import registerSyndicateMembers from './registerSyndicateMembers'
import onboardingSyndicateJourney from './onboardingSyndicateJourney'

import { combineReducers } from 'redux'

const combinedRegisterSyndicateReducers = combineReducers({
  syndicateName: registerSyndicateName,
  syndicateColours: registerSyndicateColours,
  syndicateMembers: registerSyndicateMembers,
  onboardingSyndicateJourney: onboardingSyndicateJourney
})

export default combinedRegisterSyndicateReducers
