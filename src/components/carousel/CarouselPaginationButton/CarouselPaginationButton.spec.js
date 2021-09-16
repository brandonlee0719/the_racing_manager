/**
 * @module react
 */
import React from 'react'

/**
 *  @module CarouselPaginationButton
 */
import CarouselPaginationButton from './index'

/**
 *  @module expect
 */
import chai, { expect } from 'chai'

/**
 *  @module shallow
 */
import { shallow } from 'enzyme'

/**
 *  @module ChaiEnzyme
 */
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

describe('Component - buttons - CarouselPaginationButton', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<CarouselPaginationButton />)
  })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should have an <ul> as the root element', () => {
    expect(wrapper.find('ul')).to.have.length(1)
  })

  it('should not have any children', () => {
    expect(wrapper.find('.carousel-pagination__btn')).to.have.length(0)
  })

  it('should render 5 children', () => {
    wrapper.setProps({
      length: 5
    })
    expect(wrapper.find('.carousel-pagination__btn')).to.have.length(5)
  })

  it('should mark the second child as active', () => {
    wrapper.setProps({
      length: 5,
      activeIndex: 1
    })
    expect(wrapper.find('ul').childAt(1).hasClass('carousel-pagination__btn--active')).to.equal(true)
  })
})
