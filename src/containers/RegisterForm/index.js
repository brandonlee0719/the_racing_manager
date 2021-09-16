/**
 *  @module connect
 */
import { connect } from 'react-redux'

/**
 *  @module RegisterForm
 */
import RegisterForm from 'components/forms/Register'

/**
 *  @module updateRegisterForm, submitRegisterForm, updateRegisterFormError
 */
import {
  updateRegisterForm,
  submitFormData,
  updateRegisterFormError
} from 'actions/register'

/**
 *  @module trim
 */
import { trim } from 'utils/stringutils'

/**
 *  @module signUpFormValidators
 */
import { registerValidators } from 'utils/validation/Register'

/**
 *  @module withRouter
 */
import { withRouter } from 'react-router-dom'

/**
 *  mapStateToProps
 *  @param  {Object} state
 *  @param  {Object} ownProps
 *  @return {Object}
 */
const mapStateToProps = (state, ownProps) => {
  /**
   *  canProgress
   *  @const
   *  @description If all fields are met, allow user to progress
   *  @type {Boolean}
   */

  let canProgress = true

  // Items to ommit from form checking.
  const ommittedItems = ['isSubmitting', 'submitError', 'errors', 'username']

  for (let key in state.register) {
    if (!state.register[key] && !~ommittedItems.indexOf(key)) {
      canProgress = false
    }
  }

  for (let errorKey in state.register.errors) {
    if (state.register.errors[errorKey].length > 0) {
      canProgress = false
    }
  }

  return {
    values: state.register,
    errors: state.register.errors,
    validators: registerValidators,
    canProgress
  }
}

/**
 *  mapDispatchToProps
 *  @param  {Function} dispatch
 *  @param  {Object} ownProps
 *  @return {Object}
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    update: (name, value) => {
      dispatch(updateRegisterForm(name, value))
    },
    updateErrors: (errors, name) => {
      dispatch(updateRegisterFormError(errors, name))
    },
    submitForm: (values) => {
      /**
       *  @const
       */
      const {
        onSubmitSuccess,
        onSubmitFail
      } = ownProps

      dispatch(submitFormData({
        firstname: values.firstname,
        surname: values.surname,
        password: values.password,
        email: trim(values.email),
        username: values.username
      }))
      .then(() => {
        ownProps.history.replace('/registration-successful', { email: values.email })
      })
      .then(onSubmitSuccess)
      .catch(onSubmitFail)
    }
  }
}

/**
 *  @module connect
 */
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm))
