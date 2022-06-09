import iplayerLogo from '../productLogos/iplayer.svg';
import soundsLogo from '../productLogos/sounds.svg';
import newsLogo from '../productLogos/news.svg';
import bitesizeLogo from '../productLogos/bitesize.svg';

const baseFields = {
  icon: '',
  iconStyle: { background: 'rgb(0, 0, 0)', color: '#eee' },
  contentStyle: { background: '#fff', color: '#000' },
  contentArrowStyle: { borderRight: '7px solid  #eee' },
}


const contentImageBaseUrl = 'https://d3dqcjzalk876k.cloudfront.net/content-images/'
const videoBaseUrl = 'https://d3dqcjzalk876k.cloudfront.net/videos/'
const imageBaseUrl = 'https://d3dqcjzalk876k.cloudfront.net/thumnails/'
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
        background: '',
        category: 'news',
        productLogo: newsLogo,
        title: 'Delia Derbyshire – Doctor Who Theme',
        image: `${imageBaseUrl}NineteenHundreds-breakdown-doctor-who-theme-thumb.jpg`,
        contentUrl:`${contentImageBaseUrl}NineteenHundreds-breakdown-doctor-who-theme-s.png`
      },
      {
        background: '',
        category: 'sounds',
        productLogo: soundsLogo,
        title: 'Sounds of the 60s with Tony Blackburn',
        image: `${imageBaseUrl}NineteenHundreds-breakdown-tony-blackburn-thumb.jpg`,
        contentUrl:`${contentImageBaseUrl}NineteenHundreds-breakdown-tony-blackburn-s.png`
      },
      {
        background: '',
        category: 'iplayer',
        productLogo: iplayerLogo,
        title: 'The Rolling Stones at the BBC',
        image: `${imageBaseUrl}NineteenHundreds-breakdown-rolling-stones-thumb.jpg`,
        contentUrl:`${contentImageBaseUrl}NineteenHundreds-breakdown-rolling-stones-i.png`

      },
      {
        background: '',
        category: 'news',
        productLogo: newsLogo,
        title: 'England in 1966',
        image: `${imageBaseUrl}NineteenHundreds-breakdown-england-1966-thumb.jpg`,
        contentUrl:`${contentImageBaseUrl}NineteenHundreds-breakdown-england-1966s-n.png`

      },
      {
        background: '',
        category: 'iplayer',
        productLogo: iplayerLogo,
        title: 'Call the Midwife',
        image: `${imageBaseUrl}NineteenHundreds-breakdown-call-the-midwife-thumb.jpg`,
        contentUrl:`${contentImageBaseUrl}NineteenHundreds-breakdown-call-the-midwife-i.png`,
        videoUrl:`${videoBaseUrl}NineteenHundreds-breakdown-call-the-midwife.mp4`
      },
      {
        background: '',
        category: 'sounds',
        productLogo: soundsLogo,
        title: 'The World Festival of Black Arts',
        image: `${imageBaseUrl}NineteenHundreds-breakdown-world-festival-black-arts-thumb.jpg`,
      },
      {
        background: '',
        category: 'news',
        productLogo: newsLogo,
        title: "Tomorrow's World - Laser Eye Surgery",
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
  {
    title: '1970s',
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
  {
    title: '1980s',
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

