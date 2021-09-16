import hasProp from 'utils/objectutils/hasProp'

const defaultStateProp = 'isActive'

const toggleStateProp = (state, prop = defaultStateProp) => {
  if (!hasProp(state, prop)) return state

  return {
    [prop]: !state[prop]
  }
}

export default toggleStateProp
