
import React from 'react'

import ConnectedRegisterForm from './index'

import RegisterForm from 'components/forms/Register'

import thunk from 'redux-thunk'

import configureMockStore from 'redux-mock-store'

import chai, { expect } from 'chai'

import { mount } from 'enzyme'

import chaiEnzyme from 'chai-enzyme'

import { Field } from 'components/forms/BaseForm'

import { MemoryRouter } from 'react-router-dom'

chai.use(chaiEnzyme())

describe('Containers - RegisterForm', () => {
  let wrapper
  let instance

  const initialState = {
    register: {
      firstname: '',
      surname: '',
      email: '',
      password: '',
      username: '',
      overEighteen: false,
      termsAndConditions: false,
      isSubmitting: false,
      submitError: false,
      errors: {
        firstname: [],
        surname: [],
        username: [],
        email: [],
        password: [],
        overEighteen: [],
        termsAndConditions: []
      }
    }
  }

  const mockStore = configureMockStore([thunk])
  const store = mockStore(initialState)
  const options = { context: { store } }

  beforeEach(() => {
    store.clearActions()
    instance = mount(<MemoryRouter><ConnectedRegisterForm store={store} /></MemoryRouter>, options)
    wrapper = instance.find(ConnectedRegisterForm)
  })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('call the updateRegisterForm action if a value is updated', () => {
    wrapper.find(RegisterForm).find(Field).find({name: 'email'}).find('input').simulate('change', { target: { value: 'nick@test.com' } })

    expect(store.getActions()[0]).to.deep.equal({
      type: 'REGISTER_UPDATE',
      name: 'email',
      value: 'nick@test.com'
    })
  })

  it('call the updateErrors action if a value is invalid', (done) => {
    wrapper.find(RegisterForm).find(Field).find({name: 'surname'}).find('input').simulate('blur', { target: { value: '44' } })

    setTimeout(() => {
      expect(store.getActions()[0]).to.deep.equal({
        type: 'REGISTER_ERROR',
        errors: ['Please enter a valid name; It can contain capital letters, hyphens and a min 2 characters'],
        name: 'surname'
      })
      done()
    }, 0)
  })
})
