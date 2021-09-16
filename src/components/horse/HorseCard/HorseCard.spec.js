/**
 * @module react
 */
import React from 'react'

/**
 *  @module HorseCard
 */
import HorseCard from 'components/horse/HorseCard'

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

describe('Components - cards - HorseCard', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<HorseCard src='' isPending={false} />)
  })

  it('should exist', () => {
    expect(wrapper).to.exist
  })
})
