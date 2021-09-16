import React from 'react'

import { constructStaticUrl } from 'utils/horseutils'

import Hero from 'components/parallax/Hero'

import Image from 'components/image'

import PropTypes from 'prop-types'

import classNames from 'utils/classnames'

import ImageEditContainer from 'containers/ManagerEdit/ImageEditContainer'

import {submitSyndicateData} from 'actions/syndicate'

import { Link, Route } from 'react-router-dom'

import history from 'utils/locationutils'

const SyndicateHero = (props) => {
  const {
    owner = { name: '' },
    className,
    modifier,
    name,
    data = {}
  } = props

  const {featuredImage, logoImage} = data

  const modifiedClassNames = classNames('syndicate-hero', className, modifier)

  return (
    <div className={modifiedClassNames}>
      <Hero featuredImage={constructStaticUrl(featuredImage)} />
      <div className='syndicate-hero__logo'>
        <ImageEditContainer
          title='Image requirements'
          description='Images must be a minimum of 1200px wide, 800px tall and be no more than 2mb in size. The file format should be either PNG or JPEG, and importantly must be either your own image or one that you have been given permission to use. Most landscape smartphone camera photos will fit these criteria.'
          data={data}
          editLabel='update image'
          dataKey='logoImage'
          submitAction={submitSyndicateData}>
          {
            ({ value }) => {
              return (
                <span>
                  <div className='syndicate-hero__logo-img'>
                    {
                      logoImage ? (
                        <Image
                          className='syndicate-hero__logo-element absolute-center'
                          imageSrc={constructStaticUrl(logoImage)}
                        />
                      ) : (
                        <h1 className='horse-header__medium-title syndicate-hero__logo-title absolute-center'>
                          {name}
                        </h1>
                      )
                    }
                  </div>
                  <div className='syndicate-hero__logo-desc section-shadow--darker'>
                    <h6>Racing Club</h6>
                    <h6>Managed by {owner.name}</h6>
                    <Route exact path='/syndicate/:slug' render={() => {
                      if (data.canEdit) {
                        return (<h6><Link to={'/syndicate/' + data.slug + '/edit'}><span className="link micro link--italic">Edit Syndicate</span></Link></h6>)
                      } else {
                        return null
                      }
                    }}/>
                    <Route exact path='/syndicate/:slug/edit' render={() => (
                      <h6><Link to={'/syndicate/' + data.slug}><span className="link micro link--italic">View Syndicate</span></Link></h6>
                    )}/>
                  </div>
                </span>
              )
            }
          }
        </ImageEditContainer>
      </div>
    </div>
  )
}

SyndicateHero.propTypes = {
  data: PropTypes.object,
  logo: PropTypes.string,
  owner: PropTypes.shape({
    name: PropTypes.string
  }),
  className: PropTypes.string,
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  name: PropTypes.string
}

export default SyndicateHero
