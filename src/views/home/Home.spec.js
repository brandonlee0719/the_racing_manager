
/**
 * @module react
 */
import React from 'react'

/**
 * @module redux-thunk
 */
import thunk from 'redux-thunk'

/**
 * @module redux-mock-store
 */
import configureMockStore from 'redux-mock-store'

/**
 * @module Home
 */
import Home from 'views/Home'

/**
 * Testing utilities
 */
import { expect } from 'chai'
import { shallow } from 'enzyme'

describe('Views - Home', () => {
  const mockStore = configureMockStore([thunk])
  const store = mockStore({})
  const options = { context: { store } }

  let wrapper
  beforeEach(() => { wrapper = shallow(<Home />, options) })
  it('should exist', () => {
    expect(wrapper).to.exist
  })
})
