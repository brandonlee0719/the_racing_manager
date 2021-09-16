/**
 *  @module react
 */
import React, { PureComponent } from 'react'

/**
 * @module react-redux
 */
import { connect } from 'react-redux'

/**
 *  @module RegisterFormContainer
 */
import RegisterFormContainer from 'containers/RegisterForm'

/**
 *  @module ViewHeader
 */
import ViewHeader from 'components/common/ViewHeader'

/**
 *  @module resetRegisterForm
 */
import {
  resetRegisterForm
} from 'actions/register'

import View from 'components/routing/View'

import { REGISTER as title } from 'data/titles'

import SocialButton from 'components/socialmedia/SocialButton'

import {
  FACEBOOK_REGISTER,
  TWITTER_REGISTER,
  LINKEDIN_REGISTER
} from 'texts/forms'

import AjaxLoader from 'components/gui/Loaders/Ajaxloader'

/**
 * @name Register
 * @class
 * @extends PureComponent
 */
export class Register extends PureComponent {
  /**
   * @constructor
   * @param { Object } props
   */
  constructor (props) {
    super(props)
  }

  componentWillUnmount () {
    this.props.resetForm()
  }

  /**
   * Render method
   * @returns { React.Component }
   */
  render () {
    const {
      isSubmitting
    } = this.props

    return (
      <View title={title}>
        <div className='register'>
          <ViewHeader
            title='JOIN THE CROWD' />
          <div className='container'>
            <div className='row register__content'>
              <div className='col-xs-12 no-padding'>
                <div className='col-sm-7 col-md-7 register__form-container register__form-container--heading'>
                  <p className='small extra-light register__form-opening-text'>
                    We only need a few details to get you started with a profile. You’ll be able to add more info when you join a club.
                  </p>
                </div>
              </div>
              <div className='col-sm-5 col-md-5 col-sm-push-7 col-md-push-7 register__quick-register'>
                <div className='register__quick-register-container col-sm-10 col-sm-push-1 col-md-8 col-md-push-2'>
                  <div className='form__group'>
                    <h2 className='extra-light secondary-font text-center'>
                      Quick sign up with
                    </h2>
                  </div>
                  <div className='form__group'>
                    <SocialButton
                      text={FACEBOOK_REGISTER}
                      modifier='facebook' />
                  </div>
                  <div className='form__group'>
                    <SocialButton
                      text={TWITTER_REGISTER}
                      modifier='twitter' />
                  </div>
                  <div className='form__group'>
                    <SocialButton
                      text={LINKEDIN_REGISTER}
                      modifier='linked-in' />
                  </div>
                </div>
              </div>
              <div className='col-sm-7 col-md-7 col-sm-pull-5 col-md-pull-5 no-padding'>
                <div className='register__form-container'>
                  <RegisterFormContainer
                    onSubmitSuccess={this.submitFormDataSuccess}
                    onSubmitFail={this.submitFormDataFail} />
                </div>
              </div>
            </div>
          </div>
          <AjaxLoader isVisible={isSubmitting} />
        </div>
      </View>
    )
  }
}

/**
 *  mapStateToProps
 *  @param  {Object} state
 *  @param  {Object} ownProps
 *  @return {Object}
 */
const mapStateToProps = (state, ownProps) => {
  return {
    email: state.register.email,
    isSubmitting: state.register.isSubmitting
  }
}

/**
 *  @name mapDispatchToProps
 *  @param  {Function} dispatch
 *  @param  {Object} ownProps
 *  @return {Object}
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    resetForm: () => {
      dispatch(resetRegisterForm())
    }
  }
}

/**
 *  @module connect
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)
