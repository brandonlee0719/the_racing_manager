/**
 * @module configureStore
 */
import configureStore from 'store/ConfigureStore'

/**
 * @module initialStore
 */
import initialStore from 'store/InitialStore'

/**
 * @type { Store }
 */
const store = configureStore(initialStore)

export default store
