/**
 * @module react
 */
import React from 'react'

/**
 * @module BurgerMenu
 */
import BurgerMenu from 'components/navigation/BurgerMenu'

/**
 * Testing utilities
 */
import chai, { expect } from 'chai'

import { shallow } from 'enzyme'

import chaiEnzyme from 'chai-enzyme'

import { spy } from 'sinon'

chai.use(chaiEnzyme())

describe('Components - BurgerMenu', () => {
  let wrapper
  const itemSpy = spy()

  beforeEach(() => {
    wrapper = shallow(<BurgerMenu isActive={false} onClick={itemSpy} />)
  })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should have a prop called isActive and be set to false', () => {
    expect(wrapper.instance().props.isActive).to.be.false
  })

  it('should have a prop called isActive and should be true', () => {
    wrapper.setProps({
      isActive: true
    })

    expect(wrapper.instance().props.isActive).to.be.true
  })

  it('should call the onClick event when pressed', () => {
    wrapper.simulate('click')
    expect(itemSpy.calledOnce).to.be.true
  })

  it('should append "burger-menu--active" class if active', () => {
    wrapper.setProps({
      isActive: true
    })

    expect(wrapper.find('.burger-menu--active')).to.have.length(1)
  })
})
