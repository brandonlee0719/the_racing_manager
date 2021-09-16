/**
 * @module rootReducer
 */
import rootReducer from 'reducers/rootReducer'

/**
 ** @module testing utilities
 */
import { expect } from 'chai'

describe('Reducers - Root', () => {
  it('should exist', () => {
    expect(rootReducer).to.exist
  })

  it('should be an function', () => {
    expect(rootReducer).to.be.an('function')
  })
})
