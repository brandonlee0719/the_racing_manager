import React, { Component } from 'react'

import BurgerMenu from 'components/navigation/BurgerMenu'

import AccountSidePanel from 'components/account/AccountSidePanel'

import classNames from 'utils/classnames'

import Accordion from 'components/accordion/BaseAccordion'

class AccountMobileSidePanel extends Component {
  constructor (props) {
    super(props)

    this.state = {
      open: false
    }

    this.toggleBurgerMenu = this.toggleBurgerMenu.bind(this)
    this.hideBurgerMenu = this.hideBurgerMenu.bind(this)
  }

  toggleBurgerMenu () {
    this.setState(({ open }) => ({
      open: !open
    }))
  }

  hideBurgerMenu () {
    this.setState({
      open: false
    })
  }

  render () {
    const {
      className
    } = this.props

    const {
      open
    } = this.state

    const modifiedClassNames = classNames('account-mobile-side-panel', className)

    return (
      <div className={modifiedClassNames}>
        <div className='account-mobile-side-panel__burger'>
          <BurgerMenu
            modifier='secondary'
            isActive={open}
            onClick={this.toggleBurgerMenu} />
        </div>
        <Accordion isOpen={open} className='account-mobile-side-panel__container' >
          <AccountSidePanel
            onClick={this.hideBurgerMenu}
            className='account-mobile-side-panel__panel' />
        </Accordion>
      </div>
    )
  }
}

export default AccountMobileSidePanel
