/**
 * @module react
 */
import React from 'react'

/**
 *  @module CarouselArrow
 */
import CarouselArrow from './index'

/**
 *  @module Icon
 */
import Icon from 'components/icon'

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

describe('Component - Carousel - CarouselArrow', () => {
  let wrapper
  let clickSpy = spy()

  beforeEach(() => {
    wrapper = shallow(<CarouselArrow onClick={clickSpy}/>)
  })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should emit a onClick if the button has been clicked', () => {
    wrapper.simulate('click')
    expect(clickSpy.calledOnce).to.be.true
  })

  it('should have an <Icon /> component', () => {
    expect(wrapper.find(Icon)).to.have.length(1)
  })

  it('should have a button with class "carousel-arrow"', () => {
    expect(wrapper.find('.carousel-arrow')).to.have.length(1)
  })
})
