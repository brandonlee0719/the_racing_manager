/**
 * @module react
 */
import React from 'react'

/**
 *  @module BaseTile
 */
import BaseTile from 'components/tiles/BaseTile'

/**
 *  @module expect
 */
import chai, { expect } from 'chai'

/**
 *  @module shallow
 */
import { mount } from 'enzyme'

/**
 *  @module Spy
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
const BaseTileChild = () => {
  return (
    <div className='base-tile-child'></div>
  )
}

describe('Components - tiles - [HOC] BaseTile', () => {
  let wrapper
  let onClickSpy = spy()

  beforeEach(() => {
    const Comp = BaseTile(BaseTileChild)
    wrapper = mount(<Comp id='tile-id' onClick={onClickSpy} />)
  })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('First child should have a classname "base-tile"', () => {
    expect(wrapper.find('.base-tile')).to.have.length(1)
  })

  it('should render the passed in component', () => {
    expect(wrapper.find(BaseTileChild)).to.have.length(1)
  })

  it('should render the styles passed in', () => {
    const style = {
      display: 'none'
    }

    const Comp = BaseTile(BaseTileChild)
    wrapper = mount(<Comp style={style} />)

    expect(wrapper.find('.base-tile')).to.have.attr('style').equal('display: none;')
  })

  it('should emit a click event', () => {
    expect(wrapper.simulate('click'))
    expect(onClickSpy.calledOnce).to.be.true
  })

  it('should have an id prop called "tile-id"', () => {
    expect(wrapper.instance().props.id).to.equal('tile-id')
  })
})
