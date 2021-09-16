/**
 * @module router
 */
import router from 'config/router'

/**
** @module testing utilities
*/
import { expect } from 'chai'

describe('App - Router', () => {
  it('should exist', () => {
    expect(router).to.exist
  })

  it('should be an object', () => {
    expect(router).to.be.an('object')
  })
})
