import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import TextCtaButton from 'components/buttons/TextCtaButton'

import CtaLink from 'components/links/CtaLink'

import enhanceWithClickOutside from 'react-click-outside'

import classNames from 'utils/classnames'

import { navigation } from 'data/account'

class AccountDropdown extends PureComponent {
  constructor (props) {
    super(props)
  }

  handleClickOutside (e) {
    if (e) {
      e.stopPropagation()
    }

    this.props.closeAccount()
  }

  render () {
    const {
      onLogout,
      className,
      closeAccount
    } = this.props

    const modifiedClassNames = classNames('account-dropdown', className)

    return (
      <div className={modifiedClassNames}>
        <ul className='account-dropdown__list no-list-style section-shadow--tile'>
          {
            navigation.map(({name, link}, index) => {
              return (
                <li className='account-dropdown__list-item' key={index}>
                  <CtaLink href={link} onClick={closeAccount}>
                    <TextCtaButton
                      modifier='gray'
                      className='uppercase semi-bold'
                      text={name} />
                  </CtaLink>
                </li>
              )
            })
          }

          <li className='account-dropdown__list-item'>
            <TextCtaButton
              modifier='gray'
              onClick={onLogout}
              className='uppercase semi-bold italic'
              text={'log out'} />
          </li>
        </ul>
      </div>
    )
  }
}

AccountDropdown.propTypes = {
  onLogout: PropTypes.func.isRequired,
  closeAccount: PropTypes.func.isRequired
}

export default enhanceWithClickOutside(AccountDropdown)
