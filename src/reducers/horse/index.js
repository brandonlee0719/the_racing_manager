import horseReducer from './horseReducer'

import { combineReducers } from 'redux'

const combinedHorseReducers = combineReducers({
  horseInfo: horseReducer,
})

export default combinedHorseReducers
