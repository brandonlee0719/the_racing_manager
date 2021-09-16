import React from 'react'

import ConnectedContainer from './index'

import renderedComponent from 'components/feed/FeedSubmitTile'

import thunk from 'redux-thunk'

import configureMockStore from 'redux-mock-store'

import chai, { expect } from 'chai'

import { mount } from 'enzyme'

import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

describe('Containers - submitFeedPost', () => {
  let wrapper
  let renderedComp

  const initialState = {
    testReducer: {
      text: '',
      maxCharCount: 400,
      files: {},
      charCount: 400
    }
  }

  const mockStore = configureMockStore([thunk])
  const store = mockStore(initialState)
  const options = { context: { store } }

  beforeEach(() => {
    store.clearActions()
    wrapper = mount(<ConnectedContainer store={store} reducerName='testReducer' />, options)
    renderedComp = wrapper.find(renderedComponent)
  })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('sets the updateFeedText from the rendered component', () => {
    const action = {
      type: 'UPDATE_FEED_TEXT',
      text: 'nick',
      reducerName: 'testReducer'
    }

    renderedComp.props().updateFeedText('nick')

    expect(store.getActions()[0]).to.deep.equal(action)
  })

  it('should clear feed data', () => {
    const action = {
      type: 'CLEAR_FEED_DATA',
      reducerName: 'testReducer'
    }

    renderedComp.props().clearFeedData('nick')

    expect(store.getActions()[0]).to.deep.equal(action)
  })
})
