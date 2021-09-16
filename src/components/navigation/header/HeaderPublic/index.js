/**
 *  @module React
 */
import React from 'react'

/**
 *  @module TextButton
 */
import TextButton from 'components/buttons/TextButton'

/**
 *  @module Link
 */
import { Link } from 'react-router-dom'

import LoginFormContainer from 'containers/LoginForm'

import TextCtaButton from 'components/buttons/TextCtaButton'

import { FadeIn } from 'components/animation'

import Icon from 'components/icon'

const HeaderPublic = (props) => {
  const {
    onLoginButtonClick,
    showLogin
  } = props

  return (
    <div className='header__content'>
      <div className='visible-sm-up'>
        <div className='header__search'>
          <Link to='/browse-horses'>
            <Icon
              modifier='magnifying-glass' />
          </Link>
        </div>

        <TextCtaButton
          onClick={onLoginButtonClick}
          className='header__login-button uppercase semi-bold'
          text={'log in'}
          active={!showLogin} />

        <Link to='/register'>
          {
          !showLogin
          ? (
              <TextButton
                className='header__register-button'
                modifier='sm'
                text='register free' />
            )
          : (
              <TextCtaButton
                className='header__register-button uppercase semi-bold'
                text={'register free'} />
            )
          }
        </Link>
      </div>
      <div className='hidden-sm-up'>
        <div className='header__search'>
          <Link to='/browse-horses'>
            <Icon
              modifier='magnifying-glass' />
          </Link>
        </div>
        <div className='header__search' onClick={onLoginButtonClick}>
          <Icon
            modifier='account' />
        </div>
      </div>

      <div className='hidden-sm-up'>
        <FadeIn>
            <div className='header__mobile-register section-shadow'>
              {
               !showLogin
               ? (
                  <Link to='/register'>
                    <TextButton
                      className='header__register-button'
                      modifier='md'
                      text='register free' />
                  </Link>
                )
               : (
                  <Link to='/register'>
                    <TextCtaButton
                      className='header__register-button uppercase semi-bold align-middle'
                      text={'register free'} />
                  </Link>
                )
              }
            </div>
        </FadeIn>
      </div>
      <div>
        <FadeIn>
          {
            showLogin && (
              <LoginFormContainer
                className='section-shadow'
                closeLogin={onLoginButtonClick} />
            )
          }
        </FadeIn>
      </div>
    </div>
  )
}

export default HeaderPublic
