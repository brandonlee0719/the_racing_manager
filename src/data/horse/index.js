import React from 'react'

import {
  harryImage,
  johnImage,
  alexImage,
  alisonImage,
  horseHeroImage,
  trainerRoger,
  trainerFreddy,
  trainerLuca,
  trainerJohn,
  trainerNigel,
  trainerKevin
} from 'assets/dummyassets'

export const tableStatistics = {
  titles: [
    'Code',
    'Runs',
    'Wins',
    'Places',
    'ISP P/L',
    'Best TFR',
  ],
  data: [
    [
      'HURDLE',
      18,
      1,
      7,
      -13.5,
      109
    ],
    [
      'BUMPER',
      4,
      1,
      2,
      -2.6,
      87
    ]
  ]
}

export const tableEntries = {
  titles: [
    'Date',
    'Time',
    'Course',
    'Race',
    'DIS'
  ],
  data: [
    [
      '03/06/17',
      18,
      'HEX',
      7,
      -13.5
    ]
  ]
}

export const tableResults = {
  titles: [
    'Date',
    'Course',
    'Result',
    'Btn',
    'Type',
    'OR',
    'Dis',
    'Going',
    'EQ',
    'Jockey',
    'ISP',
    'BSP',
    'IP HI/LO',
    'IPS',
    'FS%',
    'TGIF',
    'TFR'
  ],
  data: [
    [
      '15 May 07',
      'Hun',
      '1/13',
      2.50,
      'Chase',
      'N',
      '20.5f',
      'Good',
      '-',
      'Felix de Giles (5)',
      '8/11f',
      '-',
      '-',
      '-',
      '-',
      '-',
      '-',
    ],
    [
      '15 May 07',
      'Hun',
      '1/13',
      2.50,
      'Chase',
      'N',
      '20.5f',
      'Good',
      '-',
      'Felix de Giles (5)',
      '8/11f',
      '-',
      '-',
      '-',
      '-',
      '-',
      '-',
    ],
  ]
}

export const racePlans = {
  title: 'Race plans',
  test: `The race plans for this filly will be determined by her level of ability shown at home and on the course in 2017. On breeding she is sprint bred, but she has already shown signs of stamina and we expect she could be running over a mile as a 3YO.
With this filly having already run enough times to qualify for nursery handicaps, she will continue in this vein through 2017 - eventually into full handicap company, or if she proves to be good enough, possibly better company. She showed at Chelmsford in November 2016 when finishing second on her handicap debut that she has ability and has progressed with every run to date.
This filly will be stabled in Lambourn, Berkshire throughout her 3YO career and will therefore be racing in the South at tracks such as Sandown, Windsor, Kempton, Lingfield, Newmarket, Ascot, Bath and others in the Midlands.
There are plenty of races available for her right from the start of the season. We will assess this filly’s progress and if Seamus believes she has the right level of ability she may get entries for some of the more prestigious handicap races in the racing calendar.
Your online Racehorse Manager will provide full details of all developments in terms of race planning as the season progresses.`
}

export const horseValue = {
  title: 'Horse value',
  text: (
    <div>
      <p className='horse-paragraphs'>
        We expect to get 3-6 runs and possibly more from this racehorse in her share period, however, you should expect periods of no racing as a result of recuperation from injury or training setbacks. This share period starts April 1st 2017 and runs through the summer turf season, finishing on November 1st 2017.
      </p>
      <p className='horse-paragraphs'>
        During the season the horse may be rested or have time away from the track to recover and it is quite normal for a racehorse to have periods of 3-6 weeks rest between races. Young horses are particularly susceptible to sore shins, bone chips and growing pains, and can need a greater time to recover between races.
      </p>
      <p className='horse-paragraphs'>
        For this filly we offer the following guarantee:  If due to injury or retirement, this filly's season is cut short and will not race again, and she has not raced at least twice, we will replace her with a similar horse for the remainder of the 2017 turf season. Please note that we are unable to pay prizemoney on any replacements and the replacement will be a horse of our own choosing.
      </p>
      <p className='horse-paragraphs'>
        As a shareholder you must understand that we cannot guarantee your horses performance, a specific volume of runs (beyond our minimum guarantee) or that runs will be evenly spaced throughout the share period.
      </p>
      <p className='horse-paragraphs'>
        This is the chance you take when owning any racehorse and participating in this ownership experience.  If you will be disappointed with only 2-3 runs from your racehorse during the season, then please DO NOT PARTICIPATE IN THIS OR ANY OTHER RACEHORSE.
      </p>
      <p className='horse-paragraphs'>
        We believe in being crystal clear with our shareholders - any participation in racehorse ownership is high risk, and we are unable to make any refunds because of share periods which finish early due to injury or retirement - as training and livery fees for the horse still remain whether they are racing or not.  This is the chance all shareholders take, as we do ourselves, when participating in the ownership of a racehorse.
      </p>
    </div>
  )
}

export const benefitsList = [
  'Pro rata prize money share',
  'Pro rata share of resale proceeds',
  'Regular yard visits',
  'Personalised messages and clips from the team',
  'Live content from the races'
]

export const syndicateMembers = [
  {
    image: harryImage,
    name: 'Harry Herbert',
    role: 'Chairman & MD',
    description: 'I have managed syndicates for 30 years, as have my family for 3 generations.'
  },
  {
    image: johnImage,
    name: 'John Warren',
    role: 'Director',
    description: 'I have managed syndicates for 30 years, as have my family for 3 generations.'
  },
  {
    image: alexImage,
    name: 'Alex Smith',
    role: 'Director',
    description: 'I have managed syndicates for 30 years, as have my family for 3 generations.'
  },
  {
    image: alisonImage,
    name: 'Alison Begley',
    role: 'Director',
    description: 'I have managed syndicates for 30 years, as have my family for 3 generations.'
  },
  {
    image: harryImage,
    name: 'Harry Herbert',
    role: 'Chairman & MD',
    description: 'I have managed syndicates for 30 years, as have my family for 3 generations.'
  },
  {
    image: johnImage,
    name: 'John Warren',
    role: 'Director',
    description: 'I have managed syndicates for 30 years, as have my family for 3 generations.'
  },
  {
    image: alexImage,
    name: 'Alex Smith',
    role: 'Director',
    description: 'I have managed syndicates for 30 years, as have my family for 3 generations.'
  },
  {
    image: alisonImage,
    name: 'Alison Begley',
    role: 'Director',
    description: 'I have managed syndicates for 30 years, as have my family for 3 generations.'
  }
]

export const trainerMembers = [
  {
    image: trainerRoger,
    name: 'roger charlton',
    role: 'wiltshire',
    description: 'Roger is no stranger to success having trained nine individual Group 1 winners.'
  },

  {
    image: trainerFreddy,
    name: 'freddy head',
    role: 'chantilly',
    description: 'Freddy is the only man to have won Breeder’s Cups both as a jockey, on Miesque and as a '
  },
  {
    image: trainerLuca,
    name: 'luca camani',
    role: 'newmarket',
    description: 'Luca Cumani was born and raised in Italy and comes from a family steeped in racing.'
  },
  {
    image: trainerJohn,
    name: 'john gosden',
    role: 'wiltshire',
    description: 'John is no stranger to success having trained nine individual Group 1 winners.'
  },
  {
    image: trainerNigel,
    name: 'nigel twiston-davies',
    role: 'watford',
    description: 'Nigel is having his best season to date and looks certain of recording his first century. '
  },
  {
    image: trainerKevin,
    name: 'kevin ryan',
    role: 'hemel-hempstead',
    description: 'Kevin Ryan rode 47 winners as a conditional jockey before assisting Jack Berry.'
  }
]

export const horse = {
  '_id': '594a734c371c882d01addd24',
  'name': 'CONTENTMENT',
  'age': '3',
  'gender': 'filly',
  'color': 'bay',
  'foalingDate': '2014-04-10T00:00:00.000Z',
  'style': 'flat',
  'description': 'This filly is a real queen. She is out of the Stakes winning mare Cartimandua and by Cacique who covers a limited book of mares, but he has a fantastic strike rate with those foals he does get on the ground. He has produced 21% black type performers from foals of racing age and having raced two of his best progeny; Dominant and Census, we are extremely happy to be adding this stunning filly into our syndicates. Contentment ran three times as a two-year-old and was unlucky not to break her maiden having bumped into the subsequent Oh So Sharp Stakes (Gr 3) winner Poet’s Vanity when second at Salisbury. She is a filly with plenty of class about her and is an exciting prospect for 2017.',
  'thumbnailImage': '/uploads/horses/1498051404601/CARD_contentment.jpg',
  'trainer': {
    'name': 'William Haggas'
  },
  'dam': {
    'sireName': 'MEDICEAN',
    'name': 'CARTIMANDUA'
  },
  'sire': {
    'name': 'CACIQUE (IRE)'
  },
  'owner': {
    'name': 'HIGHCLERE',
    'slug': 'highclere'
  },
  'timeformComments': {
    'flat': '160,000Y: useful-looking filly: fifth foal: half-sister to useful 2-y-o 6f winner Elronaq (by Invincible Spirit): dam 6f winner: fairly useful performer: won maiden at Goodwood (by 1½ lengths from Music Lesson) in May: 13/8, improved when ¾-length second of 5 to Miss Sheridan on handicap debut at Carlisle last time: stays 7f: tried in tongue tie: sometimes slowly away.'
  },
  'featuredImage': '/uploads/horses/1498051404601/HERO_contentment.jpg',
  'slug': 'contentment',
  'runs': 5,
  'wins': 1,
  'places': 2,
  'messages': [
    {
      '_id': '594d1702b16c9908c035e979',
      'text': 'Hello',
      'createdAt': '2017-06-23T13:26:26.610Z',
      'attachment': [
        {
          'path': '/uploads/messages/594a734c371c882d01addd24/1498224386611/attachment-1498224382066.jpg',
          'type': 'image'
        }
      ]
    },
    {
      '_id': '594a74599f3c437b9e03a8b1',
      'text': 'Lovely outing for Contentment on the gallops this morning, looking strong.',
      'createdAt': '2017-06-21T13:27:53.360Z',
      'attachment': [
        {
          'path': '/uploads/messages/594a734c371c882d01addd24/1498051673360/attachment-1498051673326.jpg',
          'type': 'image'
        }
      ]
    },
    {
      '_id': '594a74389f3c437b9e03a8b0',
      'text': 'The current race record for Contentment is 10 wins from 28 starts with prizemoney of $34,064,600.00',
      'createdAt': '2017-06-21T13:27:20.080Z',
      'attachment': [
        {
          'path': '/uploads/messages/594a734c371c882d01addd24/1498051640080/attachment-1498051639974.jpg',
          'type': 'image'
        }
      ]
    },
    {
      '_id': '594a734ee8a94a7b755f0f3b',
      'text': 'Few racehorses can have possessed such a belligerent, bullying ... Speed, Beauty Only, Joyful Trinity, Helene Paragon and Contentment.',
      'createdAt': '2017-06-21T13:23:26.055Z',
      'attachment': [
        {
          'path': '/uploads/messages/594a734c371c882d01addd24/1498051406055/messages/ContentmentQSJC2016.jpg',
          'type': 'image'
        }
      ]
    },
    {
      '_id': '594a734ee8a94a7b755f0f3a',
      'text': 'The current race record for Contentment is 10 wins from 28 starts with prizemoney of $34,064,600.00',
      'createdAt': '2017-06-21T13:23:26.054Z',
      'attachment': [
        {
          'path': '/uploads/messages/594a734c371c882d01addd24/1498051406054/messages/contentment3.JPG',
          'type': 'image'
        }
      ]
    },
    {
      '_id': '594a734ee8a94a7b755f0f39',
      'text': 'Contentment wins dramatic 2017 Champions Mile',
      'createdAt': '2017-06-21T13:23:26.053Z',
      'attachment': [
        {
          'path': '/uploads/messages/594a734c371c882d01addd24/1498051406053/messages/contentment4.jpg',
          'type': 'image'
        }
      ]
    },
    {
      '_id': '594a734ee8a94a7b755f0f38',
      'text': 'This filly is a real queen. She is out of the Stakes winning mare Cartimandua and by Cacique who covers a limited book of mares, but he has a fantastic strike rate with those foals he does get on the ground. He has produced 21% black type performers from foals of racing age and having raced two of his best progeny; Dominant and Census, we are extremely happy to be adding this stunning filly into our syndicates. Contentment ran three times as a two-year-old and was unlucky not to break her maiden having bumped into the subsequent Oh So Sharp Stakes (Gr 3) winner Poet’s Vanity when second at Salisbury. She is a filly with plenty of class about her and is an exciting prospect for 2017.',
      'createdAt': '2017-06-21T13:23:26.045Z',
      'attachment': [
        {
          'path': '/uploads/messages/594a734c371c882d01addd24/1498051406050/messages/contentment1.jpg',
          'type': 'image'
        }
      ]
    }
  ],
  'shares': {
    'owned': 1,
    'total': 26
  }
}

export const horseHero = {
  title: (name) => `The most incredible horse in ${name}’s history. ever.`,
  image: horseHeroImage
}

export const requestToJoin = 'https://projects.invisionapp.com/share/PRCFNZTC8#/screens/242040942_Request-To-Join-Syndicate-P1'

export const fakeHorses = [{
  _id: '599702453285d91940f28b35',
  name: 'DARTMOUTH',
  age: 5,
  gender: 'horse',
  style: 'flat',
  racingType: 'National Hunt',
  trainer: {
    name: 'Sir Michael Stoute'
  },
  owner: {
    name: 'THE QUEEN',
    color: '#b30337',
    slug: 'the-queen'
  },
  ownership: {
    type: 'Open Ended Period',
    years: 2
  },
  cost: {
    monthly: 5795,
    initial: 19430
  },
  shares: {
    owned: 3,
    total: 19
  },
  manager: {
    name: 'John Warren'
  },
  thumbnailImage: '/uploads/horses/1505127817008/CARD_dartmouth.jpg',
  featuredImage: '/uploads/horses/1505127817008/CARD_dartmouth.jpg',
  slug: 'dartmouth',
  runs: 17,
  wins: 8,
  places: 4,
  syndName: 'highclere'
},
{
  _id: '599702453285d91940f28b40',
  name: 'NEPTUNE STAR',
  age: 3,
  gender: 'filly',
  racingType: 'Flat Racing',
  trainer: {
    name: 'Michael Easterby'
  },
  owner: {
    name: 'SHEEP AS A LAMB',
    color: '#12242f',
    slug: 'sheep-as-a-lamb'
  },
  ownership: {
    type: 'Fixed Period'
  },
  cost: {
    monthly: 3590,
    initial: 18415
  },
  shares: {
    owned: 3,
    total: 23
  },
  thumbnailImage: '/uploads/horses/1505127817251/CARD_neptunestar1.jpg',
  featuredImage: '/uploads/horses/1505127817251/CARD_neptunestar1.jpg',
  slug: 'neptune-star',
  runs: 9,
  wins: 0,
  places: 0,
  syndName: 'highclere'
}]
