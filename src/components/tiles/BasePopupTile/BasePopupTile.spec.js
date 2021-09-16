/**
 * @module react
 */
import React from 'react'

/**
 *  @module BasePopupTile
 */
import BasePopupTile from 'components/tiles/BasePopupTile'

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

chai.use(chaiEnzyme())

/**
 *  @description - Create a dummy component
 */
const BasePopUpTileChild = () => {
  return (
    <div className='popup-tile-child'></div>
  )
}

describe('HOC - BasePopupTile', () => {
  let wrapper

  beforeEach(() => {
    const Comp = BasePopupTile(BasePopUpTileChild)
    wrapper = mount(<Comp />)
  })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('First child should have a classname "base-popup-tile"', () => {
    expect(wrapper.find('.base-popup-tile')).to.have.length(1)
  })

  it('should render the passed in component', () => {
    expect(wrapper.find(BasePopUpTileChild)).to.have.length(1)
  })
})
