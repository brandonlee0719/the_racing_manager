import React from 'react'
import Checkbox from './index'

import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

const props = {
  label: '',
  name: ''
}

describe('Components - Checkbox', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Checkbox { ...props } />)
  })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render a container element', () => {
    expect(wrapper.find('.checkbox')).to.have.length(1)
  })

  it('should render a input field', () => {
    expect(wrapper.find('.checkbox__input')).to.have.length(1)
  })

  it('should render a input label', () => {
    expect(wrapper.find('.checkbox__label')).to.have.length(1)
  })

  it('should contain the label passed to it from "label" prop', () => {
    const label = 'My sample label'
    wrapper.setProps({ label })
    expect(wrapper.find('.checkbox__label').text()).to.equal(label)
  })

  it('should contain the name passed to it from "name" prop', () => {
    const name = 'my-field'
    wrapper.setProps({ name })
    expect(wrapper.find('.checkbox__input')).to.have.attr('id', name)
    expect(wrapper.find('.checkbox__label')).to.have.attr('for', name)
  })

  it('should contain the class name passed to it from its "className" prop', () => {
    const className = 'sample-class'
    wrapper.setProps({ className })
    expect(wrapper.find('.checkbox').hasClass(className)).to.equal(true)
  })

  it('should contain the modifier passed to it from its "modifier" prop', () => {
    const modifier = 'modifier'
    wrapper.setProps({ modifier })
    expect(wrapper.find('.checkbox').hasClass(`checkbox--${modifier}`)).to.equal(true)
  })

  it('should contain the checked state passed to it from "checked" prop (true)', () => {
    const value = true
    const handleChange = () => {}
    wrapper.setProps({ value, handleChange })
    expect(wrapper.find('.checkbox__input')).to.be.checked()
  })

  it('should contain the checked state passed to it from "checked" prop (false)', () => {
    const value = false
    const handleChange = () => {}
    wrapper.setProps({ value, handleChange })
    expect(wrapper.find('.checkbox__input')).to.not.be.checked()
  })
})
