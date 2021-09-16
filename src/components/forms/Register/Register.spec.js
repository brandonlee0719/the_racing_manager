/**
 * @module react
 */
import React from 'react'

import { MemoryRouter } from 'react-router-dom'

/**
 *  @module RegisterForm
 */
import RegisterForm from 'components/forms/Register'

/**
 *  @module Form, Field
 */
import { Form, Field, Submit } from 'components/forms/BaseForm'

/**
 *  @module signUpFormValidators
 */
import { registerValidators } from 'utils/validation/Register'

/**
 *  @module expect
 */
import chai, { expect } from 'chai'

/**
 *  @module shallow
 */
import { mount } from 'enzyme'

/**
 *  @module ChaiEnzyme
 */
import chaiEnzyme from 'chai-enzyme'

import { spy } from 'sinon'

chai.use(chaiEnzyme())

describe('Components - forms - Register', () => {
  let wrapper
  let instance

  const initialProps = {
    onSubmitSuccess: spy(),
    onSubmitFail: spy(),
    values: {
      firstname: '',
      surname: '',
      email: '',
      password: '',
      username: '',
      overEighteen: false,
      termsAndConditions: false,
      isSubmitting: false,
      submitError: false,
    },
    errors: {
      firstname: [],
      surname: [],
      username: [],
      email: [],
      password: [],
      overEighteen: [],
      termsAndConditions: []
    },
    validators: registerValidators,
    canProgress: false,
    update: spy(),
    updateErrors: spy(),
    submitForm: spy()
  }

  const setUpMounts = (props = initialProps) => {
    instance = mount(<MemoryRouter><RegisterForm {...props} /></MemoryRouter>)
    wrapper = instance.find(RegisterForm)
  }

  beforeEach(() => {
    setUpMounts()
  })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should have <Form /> component', () => {
    expect(wrapper.find(Form)).to.have.length(1)
  })

  it('should have the 7 <Field /> components', () => {
    expect(wrapper.find(Field)).to.have.length(7)
  })

  it('should have the 1 <Submit /> component', () => {
    expect(wrapper.find(Submit)).to.have.length(1)
  })

  it('should not be able to click submit if canProgress is false', () => {
    wrapper.find(Submit).simulate('click')
    expect(initialProps.submitForm.calledOnce).to.be.false
  })

  it('updating a field should call the update prop', () => {
    wrapper.find(Field).find({name: 'email'}).find('input').simulate('change', { target: { value: 'test' } })
    expect(initialProps.update.calledOnce).to.be.true
  })

  it('updating a field with an invalid value should call updateErrors after a timeout', (done) => {
    wrapper.find(Field).find({name: 'email'}).find('input').simulate('blur', { target: { value: 'test' } })
    setTimeout(() => {
      expect(initialProps.updateErrors.called).to.be.true
      done()
    }, 0)
  })

  it('should be able to click submit if canProgress is true and all values are correct', () => {
    const props = {
      ...initialProps,
      canProgress: true,
      values: {
        firstname: 'nick',
        surname: 'nick',
        email: 'n@n.com',
        password: 'V1tam1nL0nd0n',
        username: 'nick',
        overEighteen: true,
        termsAndConditions: true
      }
    }

    setUpMounts(props)

    wrapper.find(Submit).find('button').simulate('click')

    expect(props.submitForm.calledOnce).to.be.true
  })
})
