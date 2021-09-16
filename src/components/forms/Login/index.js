/**
 *  @module React
 */
import React from 'react'

import Input from 'components/input/Input'

import TextButton from 'components/buttons/TextButton'

import CtaLink from 'components/links/CtaLink'

import Checkbox from 'components/input/Checkbox'

import SocialButton from 'components/socialmedia/SocialButton'

import classNames from 'utils/classnames'

import omit from 'utils/objectutils/omit'

import Smallloader from 'components/gui/Loaders/Smallloader'

import {
  FACEBOOK_LOGIN,
  TWITTER_LOGIN,
  LINKEDIN_LOGIN
} from 'texts/forms'

/**
 *  @module Form, Field
 */
import { Form, Field, Submit } from 'components/forms/BaseForm'

const LoginForm = (props) => {
  const {
    submitForm,
    values,
    className,
    modifier,
    toggleLoggedIn,
    isSubmitting
  } = props

  const modifiedClassNames = classNames('login-form', className, modifier)

  const formProps = omit(props, ['className', 'modifier', 'handleSubmit'])

  return (
    <div className={modifiedClassNames}>
      <Form
        className='login-form__form'
        handleSubmit={() => { submitForm(values) }}
        {...formProps}>

        <div className='form__group'>
          <Field
            component={Input}
            type='email'
            placeholder='EMAIL ADDRESS'
            validate={[]}
            name='email' />
        </div>
        <div className='form__group'>
          <Field
            component={Input}
            type='password'
            placeholder='PASSWORD'
            validate={[]}
            name='password' />
        </div>
        <div className='row-sm'>
          <div className='col-xs-12 col-sm-6 align-middle form__group text-center'>
            <Submit
              disabled={isSubmitting}
              component={TextButton}
              modifier={['fluid']}
              className='login-form__submit'
              text={isSubmitting ? (<Smallloader isVisible modifier='sm' />) : 'log in'} />
          </div>
          <div className='col-xs-12 col-sm-6 align-middle form__group text-center'>
            <CtaLink modifier={['italic']}>
              <h6>Forgotten details</h6>
            </CtaLink>
          </div>
        </div>
        <div className='form__group'>
          <Checkbox
            value={values.keepLoggedIn}
            handleChange={toggleLoggedIn}
            label='Keep me logged in'
            name='keepLoggedIn' />
        </div>
        <div className='form__group'>
          <SocialButton
            modifier='facebook'
            text={FACEBOOK_LOGIN} />
        </div>
        <div className='form__group'>
          <SocialButton
            modifier='twitter'
            text={TWITTER_LOGIN} />
        </div>
        <div className='form__group'>
          <SocialButton
            text={LINKEDIN_LOGIN}
            modifier='linked-in' />
        </div>
      </Form>
    </div>
  )
}

export default LoginForm
