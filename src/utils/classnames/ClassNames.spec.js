/**
 *  @module expect
 */
import { expect } from 'chai'

/**
 *  @name classNames
 */
import classNames from 'utils/classnames'

describe('ClassNames', () => {
  it('should return an empty string', () => {
    expect(classNames()).to.equal('')
  })

  it('should return a string equal to "baseclass"', () => {
    expect(classNames('baseclass')).to.equal('baseclass')
  })

  it('should return a string equal to "baseclass extraclassname"', () => {
    expect(classNames('baseclass', 'extraclassname')).to.equal('baseclass extraclassname')
  })

  it('should return a string equal to "baseclass extraclassname extraextraclassname"', () => {
    expect(classNames('baseclass', ['extraclassname', 'extraextraclassname'])).to.equal('baseclass extraclassname extraextraclassname')
  })

  it('should return a string equal to "baseclass extraclassname"', () => {
    expect(classNames('baseclass', {extraclassname: true, extraextraclassname: false})).to.equal('baseclass extraclassname')
  })

  it('should return a string equal to "baseclass extraclassname baseclass--green"', () => {
    expect(classNames('baseclass', 'extraclassname', 'green')).to.equal('baseclass extraclassname baseclass--green')
  })

  it('should return a string equal to "baseclass baseclass--green"', () => {
    expect(classNames('baseclass', '', 'green')).to.equal('baseclass baseclass--green')
  })

  it('should return a string equal to "baseclass"', () => {
    expect(classNames('baseclass', ['green', 'yellow'])).to.equal('baseclass green yellow')
  })

  it('should return a string equal to "baseclass baseclass--green baseclass--yellow"', () => {
    expect(classNames('baseclass', '', ['green', 'yellow'])).to.equal('baseclass baseclass--green baseclass--yellow')
  })

  it('should return a string equal to "baseclass extraclassname baseclass--green baseclass--yellow"', () => {
    expect(classNames('baseclass', 'extraclassname', ['green', 'yellow'])).to.equal('baseclass extraclassname baseclass--green baseclass--yellow')
  })

  it('should return a string equal to "baseclass baseclass--green baseclass--yellow baseclass--extrayellow"', () => {
    expect(classNames('baseclass', '', ['green', 'yellow'], ['extrayellow'])).to.equal('baseclass baseclass--green baseclass--yellow baseclass--extrayellow')
  })

  it('should return a string equal to "baseclass baseclass--green baseclass--yellow baseclass--extrayellow baseclass--extraextrayellow"', () => {
    expect(classNames('baseclass', '', ['green', 'yellow'], ['extrayellow'], ['extraextrayellow'])).to.equal('baseclass baseclass--green baseclass--yellow baseclass--extrayellow baseclass--extraextrayellow')
  })

  it('should return a string equal to "baseclass extraclassname baseclass--green"', () => {
    expect(classNames('baseclass', 'extraclassname', {
      'green': true,
      'yellow': false
    })).to.equal('baseclass extraclassname baseclass--green')
  })

  it('should return a string equal to "baseclass extraclassname baseclass--green baseclass--yellow"', () => {
    expect(classNames('baseclass', 'extraclassname', {
      'green': true,
      'yellow': false
    }, [
      'yellow'
    ])).to.equal('baseclass extraclassname baseclass--green baseclass--yellow')
  })
})
