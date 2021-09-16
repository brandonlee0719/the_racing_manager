import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import View from 'components/routing/View'
import { PAGE_NOT_FOUND as title } from 'data/titles'

import Image from 'components/image'
import TextButton from 'components/buttons/TextButton'

import { pageNotFound } from 'assets/images'

class PageNotFound extends Component {
  // Absolutely no need to re-render this page as it's all static
  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <View title={title}>
        <div className='page-not-found'>
          <div className='container'>
            <div className='col-xs-12 col-md-6'>
              <h1 className='page-not-found__main-title uppercase'>
                404 error
              </h1>
              <h2 className='page-not-found__title uppercase'>
                ah, that's why the long face
              </h2>
              <p className='page-not-found__paragraph'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
              </p>
              <Link to='/'>
                <TextButton
                  text='Back to homepage'
                  className='page-not-found__button'
                  modifier={['md']}
                  onClick={() => {}}
                />
              </Link>
            </div>
            <div className='col-md-6 visible-md-up'>
              <Image
                className='page-not-found__image'
                imageSrc={pageNotFound}
              />
            </div>
          </div>
        </div>
      </View>
    )
  }
}

export default PageNotFound
