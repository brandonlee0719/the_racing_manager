import {
  HORSE_NUMBERS,
  SELECTED_HORSE,
  HORSE_NAME_EDITOR,
  GET_SELECT_HORSE_CODE,
  SET_DURATION_VALUE,
  SET_OWNER_SHIP_TYPE_VALUE,
  SET_TEAM_SIZE_VALUE,
  GOT_HORSE_INFORMATION,
  GOT_HORSE_CONDITION,
  REGISTERED_IN_SYNDICATE,
  REGISTERING_SNDICATE_HORSES,
  REGISTERED_SNDICATE_HORSES,
  FAILED_TO_REGISTER_SNDICATE_HORSES,
  REGISTER_SUCCESS
} from 'actions/registerSyndicate/onboardingSyndicateJourney'

import _ from 'lodash'

import update from 'immutability-helper'

/**
 * @name initialState
 *  @type { object }
 *  @description - Initial state
 */
const initialState = {
  horseCount: 0,
  selectedHorse: null,
  currentValues: [],
  horses: [],
  selectedHorseName: '',
  horseName: [],
  horseCondition: [],
  registerResult: '',
  isSubmitting: false,
  error: false,
  registering: false,
  registered: false
}

const horseInfo = {
  horseCode: '',
  ownership: {
    type: ''
  },
  ownershipType: '',
  teamsize: null
}

/**
 *  @name reducer
 *  @type { function }
 *  @param { object } state
 *  @param { object } action
 *  @return { object }
 */
const reducer = (state = initialState, action) => {

  let newState = _.cloneDeep(state)
  let newHorseInfo = _.cloneDeep(horseInfo)
  /**
   *  @type { switch }
   *  @return { object }
   */
  switch (action.type) {
    case HORSE_NUMBERS:
      if (state.horseCount < action.value) {
        newState.horseCount = action.value
        newState.horses && newState.horses.push(newHorseInfo)
        newState.currentValues && newState.currentValues.push('')
        newState.horseCondition && newState.horseCondition.push('')

      } else if (state.horseCount > action.value) {
        newState.horseCount = action.value
        newState.horses && newState.horses.pop()
        newState.currentValues && newState.currentValues.pop()
        newState.horseCondition && newState.horseCondition.pop()
      }

      return newState

    case SELECTED_HORSE:
      newState.selectedHorse = action.value

      return newState

    case HORSE_NAME_EDITOR:
      newState.currentValues && (newState.currentValues[newState.selectedHorse && newState.selectedHorse - 1] = action.value)
      newState.isSubmitting = true

      return newState

    case GET_SELECT_HORSE_CODE:
      newState.currentValues && (newState.currentValues[newState.selectedHorse && newState.selectedHorse - 1] = action.value)
      newState.horses && (newState.horses[newState.selectedHorse && newState.selectedHorse - 1].horseCode = action.value)

      return newState

    case SET_DURATION_VALUE:
      newState.horses && (newState.horses[newState.selectedHorse && newState.selectedHorse - 1].ownership.type = action.value)

      return newState

    case SET_OWNER_SHIP_TYPE_VALUE:
      newState.horses && (newState.horses[newState.selectedHorse && newState.selectedHorse - 1].ownershipType = action.value)

      return newState

    case SET_TEAM_SIZE_VALUE:
      newState.horses && (newState.horses[newState.selectedHorse && newState.selectedHorse - 1].teamsize = action.value)

      return newState

    case GOT_HORSE_INFORMATION:
      newState.horseName = action.value && action.value.map((item) => ({ horseName: item.horseName, horseCode: item.horseCode }))
      newState.isSubmitting = false

      return newState

    case GOT_HORSE_CONDITION:
      if (action.value === 'false') {
        newState.horseCondition[newState.selectedHorse && newState.selectedHorse - 1] = 'success'
      } else if (action.value === 'true') {
        newState.horseCondition[newState.selectedHorse && newState.selectedHorse - 1] = 'failed'
      }


      return newState

    case REGISTERED_IN_SYNDICATE:
      newState.registerResult = action.value

      return newState
    case REGISTER_SUCCESS:
      newState.horseCount = 0
      newState.selectedHorse = null
      newState.currentValues = []
      newState.horses = []
      newState.selectedHorse = null
      newState.horseCondition = ''
      newState.horseName = []

      return newState

    case REGISTERING_SNDICATE_HORSES:
      return update(state, {
        registering: {
          $set: true
        },
        registered: {
          $set: false
        }
      })

    case REGISTERED_SNDICATE_HORSES:
      return update(state, {
        registering: {
          $set: false
        },
        error: {
          $set: false
        },
        registered: {
          $set: true
        }
      })

    case FAILED_TO_REGISTER_SNDICATE_HORSES:
      return update(state, {
        registering: {
          $set: false
        },
        error: {
          $set: true
        },
        registered: {
          $set: false
        }
      })

    default:
      return state
  }
}

/**
 *  @name reducer
 */
export default reducer