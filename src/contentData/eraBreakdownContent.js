import iplayerLogo from '../productLogos/iplayer.svg';
import soundsLogo from '../productLogos/sounds.svg';
import newsLogo from '../productLogos/news.svg';
import bitesizeLogo from '../productLogos/bitesize.svg';

const baseFields = {
  icon: '',
  iconStyle: { background: 'rgb(0, 0, 0)', color: '#eee' },
  contentStyle: { background: 'transparent', color: '#fff' },
  contentArrowStyle: { borderRight: '7px solid  #eee' },
}


const contentImageBaseUrl = 'https://d3dqcjzalk876k.cloudfront.net/content-images/'
const videoBaseUrl = 'https://d3dqcjzalk876k.cloudfront.net/videos/'
const imageBaseUrl = 'https://d3dqcjzalk876k.cloudfront.net/thumnails/'
const mediaCardsBaseUrl = 'https://d3dqcjzalk876k.cloudfront.net/mediaCards/'

// eslint-disable-next-line import/prefer-default-export
export const prehistoricBreakdown = [
  {
    title: 'Prehistoric',
    mediaBlocksData: [
      {
        background: '',
        category: 'sounds',
        productLogo: soundsLogo,
        title: 'The KT Boundary',
        image: '',
        contentUrl: `${contentImageBaseUrl}dinosaur-breakdown-the-kt-boundary-s.png`,

      },
      {
        background: '',
        category: 'sounds',
        productLogo: soundsLogo,
        title: 'Feathered Dinosaurs',
        image: '',
        contentUrl: `${contentImageBaseUrl}dinosaur-breakdown-feathered-dinosaurs-s.png`
      },
      {
        background: '',
        category: 'iplayer',
        productLogo: iplayerLogo,
        title: 'Dinosaurs the final day with David Attenborough',
        image: '',
        contentUrl: `${contentImageBaseUrl}dinosaur-breakdown-the-final-day-i.png`,
        videoUrl: `${videoBaseUrl}dinosaur-breakdown-the-final-day-i.mp4`
      },
      {
        background: '',
        category: 'bitesize',
        productLogo: bitesizeLogo,
        title: 'Quiz - Dinosaurs: The Final Day',
        image: '',
        contentUrl:`${contentImageBaseUrl}dinosaur-breakdown-the-final-day-quiz-b.png`
      },
      {
        background: '',
        category: 'iplayer',
        productLogo: iplayerLogo,
        title: 'Deadly Dinosaurs',
        image: '',
        contentUrl:`${contentImageBaseUrl}dinosaur-breakdown-deadly-dinosaurs-i.png`
      },
      {
        background: '',
        category: 'iplayer',
        productLogo: iplayerLogo,
        title: 'Attenborough and the Giant Dinosaur',
        image: '',
        contentUrl:`${contentImageBaseUrl}dinosaur-breakdown-attenborough-giant-dinosaur-i.png`
      },
      {
        background: '',
        category: 'iplayer',
        productLogo: iplayerLogo,
        title: '',
        image: '',
        contentUrl:`${contentImageBaseUrl}`
      },
    ],
    ...baseFields
  },
];


export const eighteenBreakdown = [

];


export const nineteenBreakdown = [
  {
    title: '1960s',
    mediaBlocksData: [
      {
        background: `${mediaCardsBaseUrl}60s-2.png`,
        category: 'bitesize',
        productLogo: newsLogo,
        title: 'Delia Derbyshire – Doctor Who Theme',
        image: `${imageBaseUrl}sixties-breakdown-doctor-who-theme-thumb.jpg`,
        contentUrl:`${contentImageBaseUrl}sixties-breakdown-doctor-who-theme-w.png`
      },
      {
        background: `${mediaCardsBaseUrl}60s-3.png`,
        category: 'sounds',
        productLogo: soundsLogo,
        title: 'Sounds of the 60s with Tony Blackburn',
        image: `${imageBaseUrl}sixties-breakdown-tony-blackburn-thumb.jpg`,
        contentUrl:`${contentImageBaseUrl}sixties-breakdown-tony-blackburn-s.png`
      },
      {
        background: `${mediaCardsBaseUrl}60s-4.png`,
        category: 'iplayer',
        productLogo: iplayerLogo,
        title: 'The Rolling Stones at the BBC',
        image: `${imageBaseUrl}sixties-breakdown-rolling-stones-thumb.jpg`,
        contentUrl:`${contentImageBaseUrl}sixties-breakdown-rolling-stones-i.png`

      },
      {
        background: `${mediaCardsBaseUrl}60s-5.png`,
        category: 'news',
        productLogo: newsLogo,
        title: 'England in 1966',
        image: `${imageBaseUrl}sixties-breakdown-england-1966-thumb.jpg`,
        contentUrl:`${contentImageBaseUrl}sixties-breakdown-england-1966-n.png`

      },
      {
        background: `${mediaCardsBaseUrl}ctm.png`,
        category: 'iplayer',
        productLogo: iplayerLogo,
        title: 'Call the Midwife',
        image: `${imageBaseUrl}sixties-breakdown-call-the-midwife-thumb.jpg`,
        contentUrl:`${contentImageBaseUrl}sixties-breakdown-call-the-midwife-i.png`,
        videoUrl:`${videoBaseUrl}sixties-breakdown-call-the-midwife.mp4`
      },
      {
        background: `${mediaCardsBaseUrl}60s-6.png`,
        category: 'sounds',
        productLogo: soundsLogo,
        title: 'The World Festival of Black Arts',
        image: `${imageBaseUrl}sixties-breakdown-world-festival-black-arts-thumb.jpg`,
        contentUrl: `${contentImageBaseUrl}sixties-breakdown-world-festival-black-arts-s.png`,

      },
      {
        background: `${mediaCardsBaseUrl}60s-7.png`,
        category: 'iplayer',
        productLogo: newsLogo,
        title: "Tomorrow's World - Laser Eye Surgery",
        image: ''
      },
      {
        background: `${mediaCardsBaseUrl}60s-8.png`,
        category: 'iplayer',
        productLogo: newsLogo,
        title: '1967: Colour television',
        image: ''
      }
    ],
    ...baseFields
  },
  {
    title: '1970s',
    mediaBlocksData: [
      {
        background: `${mediaCardsBaseUrl}70s-1.png`,
        category: 'iplayer',
        title: 'content...',
        image: ''
      },
      {
        background: `${mediaCardsBaseUrl}70s-2.png`,
        category: 'iplayer',
        title: 'content...',
        image: ''
      },
      {
        background: `${mediaCardsBaseUrl}70s-3.png`,
        category: 'bitesize',
        title: 'content...',
        image: ''
      },
      {
        background: `${mediaCardsBaseUrl}70s-4.png`,
        category: 'sounds',
        title: 'content...',
        image: ''
      },
    ],
    ...baseFields
  },
  {
    title: '1980s',
    mediaBlocksData: [
      {
        background: `${mediaCardsBaseUrl}80s-1.png`,
        category: 'iplayer',
        title: 'content...',
        image: ''
      },
      {
        background: `${mediaCardsBaseUrl}80s-2.png`,
        category: 'iplayer',
        title: 'content...',
        image: ''
      },
      {
        background: `${mediaCardsBaseUrl}80s-3.png`,
        category: 'bitesize',
        title: 'content...',
        image: ''
      },
      {
        background: `${mediaCardsBaseUrl}80s-4.png`,
        category: 'sounds',
        title: 'content...',
        image: ''
      },
      {
        background: `${mediaCardsBaseUrl}60s-9.png`,
        category: 'bitesize',
        title: 'content...',
        image: ''
      },
      {
        background: `${mediaCardsBaseUrl}70s-2.png`,
        category: 'iplayer',
        title: 'content...',
        image: ''
      },
      {
        background: '',
        category: 'iplayer',
        title: 'content...',
        image: ''
      },
      {
        background: '',
        category: 'news',
        title: 'content...',
        image: ''
      }
    ],
    ...baseFields
  },
  {
    title: '1990s',
    mediaBlocksData: [
      {
        background: '',
        category: 'sounds',
        productLogo: soundsLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        category: 'bitesize',
        productLogo: bitesizeLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        category: 'iplayer',
        productLogo: iplayerLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        category: 'news',
        productLogo: newsLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        category: 'sounds',
        productLogo: soundsLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        category: 'bitesize',
        productLogo: bitesizeLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        category: 'iplayer',
        productLogo: iplayerLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        category: 'news',
        productLogo: newsLogo,
        title: 'content...',
        image: ''
      }
    ],
    ...baseFields
  },
];


export const futureBreakdown = [
  {
    title: '1960',
    mediaBlocksData: [
      {
        background: '',
        productLogo: soundsLogo,
        category: 'sounds',
        productLogo: soundsLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: bitesizeLogo,
        category: 'bitesize',
        productLogo: bitesizeLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: iplayerLogo,
        category: 'iplayer',
        productLogo: iplayerLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: newsLogo,
        category: 'news',
        productLogo: newsLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: soundsLogo,
        category: 'sounds',
        productLogo: soundsLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: bitesizeLogo,
        category: 'bitesize',
        productLogo: bitesizeLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: iplayerLogo,
        category: 'iplayer',
        productLogo: iplayerLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: newsLogo,
        category: 'news',
        productLogo: newsLogo,
        title: 'content...',
        image: ''
      }
    ],
    ...baseFields
  },
  {
    title: '1962',
    mediaBlocksData: [
      {
        background: '',
        productLogo: soundsLogo,
        category: 'sounds',
        productLogo: soundsLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: bitesizeLogo,
        category: 'bitesize',
        productLogo: bitesizeLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: iplayerLogo,
        category: 'iplayer',
        productLogo: iplayerLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: newsLogo,
        category: 'news',
        productLogo: newsLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: soundsLogo,
        category: 'sounds',
        productLogo: soundsLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: bitesizeLogo,
        category: 'bitesize',
        productLogo: bitesizeLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: iplayerLogo,
        category: 'iplayer',
        productLogo: iplayerLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: newsLogo,
        category: 'news',
        productLogo: newsLogo,
        title: 'content...',
        image: ''
      }
    ],
    ...baseFields
  },
  {
    title: '1964',
    mediaBlocksData: [
      {
        background: '',
        productLogo: soundsLogo,
        category: 'sounds',
        productLogo: soundsLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: bitesizeLogo,
        category: 'bitesize',
        productLogo: bitesizeLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: iplayerLogo,
        category: 'iplayer',
        productLogo: iplayerLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: newsLogo,
        category: 'news',
        productLogo: newsLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: soundsLogo,
        category: 'sounds',
        productLogo: soundsLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: bitesizeLogo,
        category: 'bitesize',
        productLogo: bitesizeLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: iplayerLogo,
        category: 'iplayer',
        productLogo: iplayerLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: newsLogo,
        category: 'news',
        productLogo: newsLogo,
        title: 'content...',
        image: ''
      }
    ],
    ...baseFields
  },
  {
    title: '1966',
    mediaBlocksData: [
      {
        background: '',
        productLogo: soundsLogo,
        category: 'sounds',
        productLogo: soundsLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: bitesizeLogo,
        category: 'bitesize',
        productLogo: bitesizeLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: iplayerLogo,
        category: 'iplayer',
        productLogo: iplayerLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: newsLogo,
        category: 'news',
        productLogo: newsLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: soundsLogo,
        category: 'sounds',
        productLogo: soundsLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: bitesizeLogo,
        category: 'bitesize',
        productLogo: bitesizeLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: iplayerLogo,
        category: 'iplayer',
        productLogo: iplayerLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: newsLogo,
        category: 'news',
        productLogo: newsLogo,
        title: 'content...',
        image: ''
      }
    ],
    ...baseFields
  },
  {
    title: '1968',
    mediaBlocksData: [
      {
        background: '',
        productLogo: soundsLogo,
        category: 'sounds',
        productLogo: soundsLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: bitesizeLogo,
        category: 'bitesize',
        productLogo: bitesizeLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: iplayerLogo,
        category: 'iplayer',
        productLogo: iplayerLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: newsLogo,
        category: 'news',
        productLogo: newsLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: soundsLogo,
        category: 'sounds',
        productLogo: soundsLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: bitesizeLogo,
        category: 'bitesize',
        productLogo: bitesizeLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: iplayerLogo,
        category: 'iplayer',
        productLogo: iplayerLogo,
        title: 'content...',
        image: ''
      },
      {
        background: '',
        productLogo: newsLogo,
        category: 'news',
        productLogo: newsLogo,
        title: 'content...',
        image: ''
      }
    ],
    ...baseFields
  }
];

