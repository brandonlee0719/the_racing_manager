import React from 'react'

import horseView from 'views/Horse/View'

import HorseHero from 'components/horse/HorseHero'
import HorseNavBar from 'components/horse/HorseNavBar'
import HorseAbout from 'components/horse/HorseAbout'
import HorseInvolvement from 'components/horse/HorseInvolvement'
import HorseTeamMember from 'components/horse/HorseTeamMember'

import {showEditOptions} from 'utils/managerutils'

import SyndicateSplitSection from 'components/syndicate/SyndicateSplitSection'

import { timestampToDate } from 'utils/dateutils'

import TitleDescriptionSection from 'components/common/TitleDescriptionSection'

import {multilineTextToJSX} from 'utils/textutils'

import {
  benefitsList,
  syndicateMembers,
  horseHero
} from 'data/horse'

/**
 *  Edit
 */
import {submitHorseData} from 'actions/horse'

import TextEditContainer from 'containers/ManagerEdit/TextEditContainer'

import ImageEditContainer from 'containers/ManagerEdit/ImageEditContainer'

import CardImageEditContainer from 'containers/ManagerEdit/CardImageEditContainer'

import HorseParallaxContent from 'components/horse/HorseParallaxContent'

const HorseInformation = (props) => {
  const {
    data,
    match,
  } = props

  const {
    description,
    timeformComments,
    owner,
    shares,
    syndicateLink,
    percentShares,
    racePlans,
    horseValue,
    slug
  } = data

  const ownershipYears = 2

  const ownershipEndDate = timestampToDate(
    new Date(new Date().setFullYear(new Date().getFullYear() + ownershipYears))
  )

  return (
    <div className='horse-information' key={'HORSE_INFORMATION_' + showEditOptions()}>
      <ImageEditContainer
        title='Image requirements'
        description='Images must be a minimum of 1200px wide, 800px tall and be no more than 2mb in size. The file format should be either PNG or JPEG, and importantly must be either your own image or one that you have been given permission to use. Most landscape smartphone camera photos will fit these criteria.'
        data={data}
        editLabel='update image'
        dataKey='featuredImage'
        submitAction={submitHorseData}>
        {
          ({ value }) => {
            return (
              <HorseHero
                data={data} />
            )
          }
        }
      </ImageEditContainer>

      <div className='horse-information__section--shadow section-shadow--bottom'>
        <HorseNavBar
          data={data}/>
      </div>

      <SyndicateSplitSection
        leftComponent={(
          <TextEditContainer
            title='About the horse'
            editLabel='update description'
            data={data}
            placeholder={horseHero.title(owner.name)}
            dataKey='description'
            maxLength={2000}
            submitAction={submitHorseData}>
            {
              ({ value }) => {
                return (
                  <HorseAbout
                    description={value || multilineTextToJSX(description)}
                    timeformComments={timeformComments}
                    syndicateLink={syndicateLink} />
                )
              }
            }
          </TextEditContainer>
        )}
        rightComponent={(
          <HorseInvolvement
            benefits={benefitsList}
            shares={shares}
            ownershipYears={ownershipYears}
            ownershipEndDate={ownershipEndDate}
            percentShares={percentShares} />
        )}
      />

      <div className='container'>
        <div className="horse-information__section row">
          <div className='col-xs-12 col-md-6 col-lg-5'>
            <CardImageEditContainer
              title='Image requirements'
              description='Images must be a minimum of 500px wide, 700px tall and be no more than 2mb in size. The file format should be either PNG or JPEG, and importantly must be either your own image or one that you have been given permission to use. Most landscape smartphone camera photos will fit these criteria.'
              dataKey='thumbnailImage'
              editLabel='update image'
              submitAction={submitHorseData}
              data={data}
            />
          </div>
        </div>
        {/*<div className='horse-information__section'>
          <TitleDescriptionSection
            title={'key members'}
            colorModifier='blue'>
            <div className='row'>
              {syndicateMembers.map((member, index) => {
                return (
                  <div
                    key={index}
                    className='horse-information__grid-item col-lg-2 col-md-3 col-sm-4 col-xs-12'>
                    <HorseTeamMember
                      className='horse-information__member'
                      image={member.image}
                      name={member.name}
                      role={member.role}
                      description={member.description} />
                  </div>
                )
              })}
            </div>
          </TitleDescriptionSection>
        </div>*/}

        <div className='horse-information__section row'>
          <div className='col-xs-12 col-md-7'>
            <TextEditContainer
              title='Race plans'
              editLabel='update race plans'
              data={data}
              dataKey='racePlans'
              maxLength={2000}
              submitAction={submitHorseData}>
              {
                ({ value }) => {
                  return (
                    <TitleDescriptionSection
                      title={'Race plans'}
                      colorModifier='blue'>
                      {multilineTextToJSX(racePlans)}
                    </TitleDescriptionSection>
                  )
                }
              }
            </TextEditContainer>
          </div>
        </div>
      </div>

      {/* Edit section */}

      <TextEditContainer
        title='Edit quote'
        data={data}
        editLabel='update quote'
        placeholder={horseHero.title(owner.name)}
        dataKey='quote'
        maxLength={75}
        modifier='text-edit__big'
        submitAction={submitHorseData}>
        {
          ({ value }) => {
            return (
              <HorseParallaxContent
                title={data.quote || horseHero.title(owner.name)}
                image={horseHero.image}
              />
            )
          }
        }
      </TextEditContainer>

      <div className='container'>
        <div className='horse-information__section row'>
          <div className='col-xs-12 col-md-7'>
            <TextEditContainer
              title='Horse valuation'
              editLabel='update horse value'
              data={data}
              placeholder={''}
              dataKey='horseValue'
              maxLength={2000}
              submitAction={submitHorseData}>
              {
                ({ value }) => {
                  return (
                    <TitleDescriptionSection
                      title={'Horse valuation'}
                      colorModifier='blue'>
                      {multilineTextToJSX(horseValue)}
                    </TitleDescriptionSection>
                  )
                }
              }
            </TextEditContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default horseView(HorseInformation)
