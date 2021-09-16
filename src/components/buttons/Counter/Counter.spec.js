/**
 * @module react
 */
import React from 'react'

/**
 *  @module  Counter
 */
import Counter from 'components/buttons/Counter'

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
 *  @module ChaiEnzyme
 */
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

describe('Components - buttons - Counter', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Counter />)
  })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should have default count state of 0', () => {
    expect(wrapper.state('count')).to.equal(0)
  })

  it('should have default min prop to be 0', () => {
    expect(wrapper.instance().props.min).to.equal(0)
  })

  it('should have default max prop to be 50', () => {
    expect(wrapper.instance().props.max).to.equal(50)
  })

  it('should update count state to 10 if the default count prop is initially set to 10', () => {
    wrapper = shallow(<Counter defaultCount={10} />)
    expect(wrapper.state('count')).to.equal(10)
  })

  it('should update count state to 5 if the default count prop is initially set to 10 but the max is 5', () => {
    wrapper = shallow(<Counter defaultCount={10} max={5} />)
    expect(wrapper.state('count')).to.equal(5)
  })

  it('should update count state to 2 if the default count prop is initially set to 1 but the min is 2', () => {
    wrapper = shallow(<Counter defaultCount={1} min={2} />)
    expect(wrapper.state('count')).to.equal(2)
  })

  it('should update count state to 10 if the min prop changes to 10', () => {
    wrapper = shallow(<Counter defaultCount={8} />)
    wrapper.setProps({
      min: 10
    })
    expect(wrapper.state('count')).to.equal(10)
  })

  it('should update count state to 10 if the max prop changes to 10', () => {
    wrapper = shallow(<Counter defaultCount={12} />)
    wrapper.setProps({
      max: 10
    })
    expect(wrapper.state('count')).to.equal(10)
  })

  it('should increment by 1 if the plus icon is clicked', () => {
    wrapper.find(Icon).last().simulate('click')
    expect(wrapper.state('count')).to.equal(1)
  })

  it('should decrement by 1 if the plus icon is clicked', () => {
    wrapper.find(Icon).first().simulate('click')
    expect(wrapper.state('count')).to.equal(0)
  })

  it('should have a count of an empty string', () => {
    wrapper.instance().handleInputChange({
      target: {
        value: ''
      }
    })

    expect(wrapper.state('count')).to.equal('')
  })

  it('should have a count of 10', () => {
    wrapper.instance().handleInputChange({
      target: {
        value: 10
      }
    })

    expect(wrapper.state('count')).to.equal(10)
  })
})
