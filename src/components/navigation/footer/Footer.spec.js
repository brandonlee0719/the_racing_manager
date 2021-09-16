/**
 * @module react
 */
import React from 'react'

/**
 * @module Footer
 */
import Footer from 'components/navigation/footer'

/**
 * Testing utilities
 */
import { expect } from 'chai'
import { shallow } from 'enzyme'

describe('Components - Footer', () => {
  let wrapper
  beforeEach(() => { wrapper = shallow(<Footer />) })

  it('should exist', () => {
    expect(wrapper).to.exist
  })
})
