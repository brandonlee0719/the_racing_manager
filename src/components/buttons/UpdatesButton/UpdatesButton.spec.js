/**
 * @module react
 */
import React from 'react'

/**
 *  @module UpdatesButton
 */
import UpdatesButton from 'components/buttons/UpdatesButton'

/**
 *  @module TextButton
 */
import TextButton from 'components/buttons/TextButton'

/**
 *  @module expect
 */
import chai, { expect } from 'chai'

/**
 *  @module shallow
 */
import { shallow } from 'enzyme'

/**
 *  @module spy
 */
import { spy } from 'sinon'

/**
 *  @module ChaiEnzyme
 */
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

describe('Component - buttons - UpdatesButton', () => {
  let wrapper
  let clickSpy = spy()

  beforeEach(() => {
    wrapper = shallow(<UpdatesButton onClick={clickSpy}/>)
  })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should emit a onClick if the button has been clicked', () => {
    wrapper.find(TextButton).simulate('click')
    expect(clickSpy.calledOnce).to.be.true
  })

  it('should not render <div className="updates-button__amount">', () => {
    expect(wrapper.find('.updates-button__amount')).to.have.length(0)
  })

  it('should render <div className="updates-button__amount">', () => {
    wrapper.setProps({
      amount: 1
    })
    expect(wrapper.find('.updates-button__amount')).to.have.length(1)
  })
})
