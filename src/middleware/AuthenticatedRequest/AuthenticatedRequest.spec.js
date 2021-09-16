import { assert } from 'chai'

import authenticatedRequestMiddleware from './index'

import { spy } from 'sinon'

describe('middleware - authenticatedRequest', () => {
  const doDispatch = spy()
  const doGetState = spy()
  const nextHandler = authenticatedRequestMiddleware({dispatch: doDispatch, getState: doGetState})

  it('must call next action if AUTHENTICATED_REQUEST is different', (done) => {
    const actionObj = {
      type: '@@FAKE'
    }

    const actionHandler = nextHandler(action => {
      assert.strictEqual(action, actionObj)
      done()
    })

    actionHandler(actionObj)
  })
})
