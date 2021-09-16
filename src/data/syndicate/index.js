import {
  syndicateUpperImage,
  syndicateLowerImage
} from 'assets/dummyassets'

import capitalize from 'utils/capitalize'

export const syndicateUpperHero = {
  title: `Europe's leading racehorse ownership company`,
  image: syndicateUpperImage
}

export const syndicateLowerHero = {
  title: 'Delivering the highest level of personal service',
  image: syndicateLowerImage
}

export const description = 'We put together small groups of people to share in a number of top quality racehorses in order to experience racing at the highest level in the UK and around the world. Highclere Thoroughbred Racing takes its name from Highclere Castle, Harry Herbert’s ancestral home and the location of Highclere Stud where we hold our annual Yearling Parade. We treat each owner as if he or she own their horses outright. We keep our owners fully up to date with every aspect of their bloodstock’s progress from training yard to racetrack. The number of shares available per syndicate varies between ten and twenty. The number of horses, purchased by John Warren and trained by the country’s top trainers, also varies in each syndicate.'

export const registerLeftDescription = 'In order to apply for a joint Ownership Syndicate, you must:'

export const registerLeftBenefits = [
  'Be aged 16 or above. Applicants under 18 will be required to submit a personal guarentee from a currently registered owner.',
  'Not have any criminal convictions',
  'Earn a salary of 20,000+'
]

export const registerRightDescription = 'Prior to this application, you may will need to have the following documents to hand.'

export const registerRightBenefits = [
  'Document X',
  'Document Y',
  'Document Z'
]

export const registerRequireTitle = 'REGISTRATION REQUIREMENTS'

export const registerRequireDescription = 'The below sections are mandatory details required by weatherbys and BHA.'

export const registerWaitingTitle = "WHILE YOU'RE WAITING"

export const registerWaitingDescription = "Waiting for approval on your application? Members engage more with syndicates who provide more detailed information about themselves, so let's get started with building your syndicate pages."

export const registerNameTitle = 'GIVE YOUR SYNDICATE A NAME'

export const registerNameDescription = 'Your syndicate will need a unique name, please check below to see if it is available. When you have selected a name and applied, it will be sent to the BHA for approval. We will notify and update your application with a response. Refrain from using the name of a person(s) not listed as a partner within the ownership, unless there are exceptional circumstances that you wish it to consider. Please note them'

export const registerColoursTitle = 'SELECT YOUR SYNDICATE COLOURS'

export const registerColoursDescription = 'The below tool allows you to choose, check for availability and register the racing colours your jockey will carry on your racehorse.'

export const registerMembersTitle = 'HOW MANY OWNERS?'

export const registerMembersDescription = 'Tell us how many owners will be involved in this joint ownership syndicate. The number of joint owners in any horse is limited to a maximum of twelve.'

export const registerDistributionTitle = 'DISTRIBUTING SHARES'

export const registerDistributionDescription = 'Set the distribution of the shares for your partners. The total must be 100% shared.'

export const registerConfirmTitle = 'CONFIRM DETAILS'

export const registerConfirmDescription = 'Congratulations - You have successfully built your team, please review your information below and confirm that all of the information is correct and accurate'

export const SaveMemberCheckboxDescription = 'I understand that the registration of Joint ownership form is prepared only to meet the requirements of the Rules of Racing and can be altered to suit individual cases; it has not been prepared as a legal document as such, and the interests of the parties concerned will therefore be best protected by an agreement drawn up with legal advice.'

export const registerMembersShareValidationDescription = 'MAX TOTAL SHARES REACHED - PLEASE REDUCE OTHER SHARES TO PROCEED'

export const benefits = [
  'Pro rata prize money share',
  'Pro rata share of resale proceeds',
  'Regular yard visits',
  'Personalised messages and clips from the team',
  'Live content from the races',
]

export const benefitsDescription = (name = '') => {
  return `${capitalize(name)} aims to offer a unique taste of racehorse ownership. Regular communication ensures that you are kept fully up-to-date with all the latest news.`
}

export const faqs = [
  {
    question: 'Are shares sold with VAT?',
    answer: 'Horses up to the end of their racing season, including all vets bills, entry fees'
  },
  {
    question: 'What does the price of a share include?',
    answer: `The share price covers all expenses including the purchase & training of the horses up to the end of their racing season, including all vets bills, entry fees, transport, owners badge for race days & stable visits. A smaller additional sum, which is clearly stated on the Terms & Conditions is due for the second & consecutive year after that for training fees & racing costs etc.`
  },
  {
    question: 'What happens on raceday?',
    answer: 'A smaller additional sum, which is clearly stated on the Terms & Conditions is'
  },
  {
    question: 'What are the types of payment you accept?',
    answer: 'Due for the second & consecutive year after that for training fees & costs '
  },
  {
    question: `I'm a part of a rival syndicate, can I still join?`,
    answer: 'Including all vets bills, entry fees, transport, owners badge for race days & visits.'
  }
]

export const onboardingDescription = 'Lorem ipsum dolor consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad'

export const onboardingOptionDescription = 'A partnership is a great option for those wanting to be more hands-on than members of a racing club, but in a more affordable way. A tried and tested method is to own a `leg` with three other people.'
