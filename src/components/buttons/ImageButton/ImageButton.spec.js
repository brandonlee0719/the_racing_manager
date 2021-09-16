/**
 * @module react
 */
import React from 'react'

/**
 * @module Button
 */
import Button from 'components/buttons/Button'

/**
 * Testing utilities
 */
import { expect } from 'chai'
import { shallow } from 'enzyme'

describe('Components - Button', () => {
  let wrapper
  beforeEach(() => { wrapper = shallow(<Button />) })

  it('should exist', () => {
    expect(wrapper).to.exist
  })
})
