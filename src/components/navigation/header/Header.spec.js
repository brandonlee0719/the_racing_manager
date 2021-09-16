/**
 * @module react
 */
import React from 'react'

/**
 * @module Header
 */
import Header from 'components/navigation/header'

/**
 * Testing utilities
 */
import { expect } from 'chai'
import { shallow } from 'enzyme'

describe('Components - Header', () => {
  let wrapper

  const initialProps = {
    to: '/'
  }

  beforeEach(() => { wrapper = shallow(<Header {...initialProps} />) })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render a logo element', () => {
    expect(wrapper.find('.header__logo')).to.have.length(1)
  })

  it('should render a passed content', () => {
    const children = <div className='header__content' />
    wrapper.setProps({children})
    expect(wrapper.find('.header__content')).to.have.length(1)
  })
})
