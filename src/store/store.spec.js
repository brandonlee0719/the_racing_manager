/**
 * @module store
 */
import store from 'store/InitialStore'

/**
 * Testing utilities
 */
import { expect } from 'chai'

describe('Store - actual store', () => {
  it('it should exist', () => {
    expect(store).to.exist
  })

  it('it should be an object', () => {
    expect(store).to.be.an('object')
  })
})
