/**
 * @module react
 */
import React from 'react'

/**
 * @module Footer
 */
import BasePopup from 'components/popup/BasePopup'

/**
 *  @module CloseButton
 */
import CloseButton from 'components/buttons/CloseButton'

/**
 *  @module expect
 */
import chai, { expect } from 'chai'

/**
 *  @module shallow
 */
import { mount } from 'enzyme'

/**
 *  @module spy
 */
import { spy } from 'sinon'

/**
 *  @module ChaiEnzyme
 */
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

/**
 *  @description - Create a dummy component
 */
const BasePopUpChild = () => {
  return (
    <div className='popup-child'></div>
  )
}

describe('HOC - BasePopup', () => {
  let wrapper
  let clickSpy = spy()

  beforeEach(() => {
    const Comp = BasePopup(BasePopUpChild)
    wrapper = mount(<Comp isOpen={true} onClick={clickSpy}/>)
  })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('Should have one child', () => {
    expect(wrapper.children).to.have.length(1)
  })

  it('First child should have a classname "popup"', () => {
    expect(wrapper.find('.popup')).to.have.length(1)
  })

  it('should have a <CloseButton /> Component', () => {
    expect(wrapper.find(CloseButton)).to.have.length(1)
  })

  it('should emit a onClick if the button has been clicked', () => {
    wrapper.find(CloseButton).simulate('click')
    expect(clickSpy.calledOnce).to.be.true
  })

  it('First child should have a classname "popup-child"', () => {
    expect(wrapper.find('.popup-child')).to.have.length(1)
  })

  it('Should not render container with class "popup" if prop isOpen is false', () => {
    const Comp = BasePopup(BasePopUpChild)
    wrapper = mount(<Comp isOpen={false} onClick={clickSpy}/>)

    expect(wrapper.find('.popup')).to.have.length(0)
  })
})
