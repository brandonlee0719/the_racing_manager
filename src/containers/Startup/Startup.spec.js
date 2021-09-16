import React from 'react'

import { Startup } from 'containers/Startup'

import thunk from 'redux-thunk'

import AuthenticatedRequest from 'middleware/AuthenticatedRequest'

import configureMockStore from 'redux-mock-store'

import chai, { expect } from 'chai'

import { shallow } from 'enzyme'

import { spy } from 'sinon'

import chaiEnzyme from 'chai-enzyme'

const invalidDatetoken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmb28iOiJiYXIiLCJleHAiOjEzOTMyODY4OTMsImlhdCI6MTM5MzI2ODg5M30.4-iaDojEVl0pJQMjrbM1EzUIfAZgsbK_kgnVyVxFSVo'

const invalidToken = 'tH1sIsaF4K3T0ken'

chai.use(chaiEnzyme())

describe('Containers - Startup', () => {
  let wrapper

  const initialState = {
    isReady: false,
    authenticateUser: spy(),
    noAuthentication: spy()
  }

  const mockStore = configureMockStore([thunk, AuthenticatedRequest])
  const store = mockStore(initialState)
  const options = { context: { store } }

  beforeEach(() => {
    store.clearActions()
    wrapper = shallow(<Startup {...initialState}><div className='test-child'/></Startup>, options)
  })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should no render children if props isReady is false', () => {
    expect(wrapper.find('.test-child')).to.have.length(0)
  })

  it('should render children if props isReady is true', () => {
    wrapper.setProps({isReady: true})
    expect(wrapper.find('.test-child')).to.have.length(1)
  })

  it('should fail token validity as its expired', () => {
    global.localStorage.setItem('user_token', invalidDatetoken)
    expect(initialState.noAuthentication.called).to.be.true
  })

  it('should fail token validity as its a fake key', () => {
    global.localStorage.setItem('user_token', invalidToken)
    expect(initialState.noAuthentication.called).to.be.true
  })
})
