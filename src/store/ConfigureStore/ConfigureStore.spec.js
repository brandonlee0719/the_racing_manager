/**
 * @module configureStore
 */
import configureStore from 'store/ConfigureStore'

/**
 * Testing utilities
 */
import { expect } from 'chai'

describe('Store - configuration', () => {
  it('it should exist', () => {
    expect(configureStore).to.exist
  })

  it('it should be an function', () => {
    expect(configureStore).to.be.an('function')
  })

  it('it should output an object', () => {
    expect(configureStore()).to.be.an('object')
  })
})
