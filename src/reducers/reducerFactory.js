/**
 *  reducerFactory
 *  @description The aim of this is to create reusable reducers which is the case for most common reducers
 *               For example a counter reducer might need to be reused throughout the project.
 *               When the function is invoked by an action the action object needs to have a 'name' variable
 *               which will then filter through to the correct instance of the reducer.
 *  @param  {Function} reducerFunction
 *  @param  {String} reducerName
 *  @return {Function}
 *  {@link http://redux.js.org/docs/recipes/reducers/ReusingReducerLogic.html}
 */
const reducerFactory = (reducerFunction, reducerId) => {
  return (state, action) => {
    const {reducerName} = action

    const isInitializationCall = state === undefined

    if (reducerName !== reducerId && !isInitializationCall) {
      return state
    }

    return reducerFunction(state, action)
  }
}

export default reducerFactory
