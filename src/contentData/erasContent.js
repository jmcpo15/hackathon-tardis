import iplayerLogo from '../productLogos/iplayer.svg';
import soundsLogo from '../productLogos/sounds.svg';
import newsLogo from '../productLogos/news.svg';
import bitesizeLogo from '../productLogos/bitesize.svg';

const baseFields = {
  icon: '',
  iconStyle: { background: '#fff', color: '#eee' },
  contentStyle: { background: '#000', color: '#fff', margin: '0 0 4em 4em' },
  contentArrowStyle: { borderRight: '7px solid  #fff' },
}

const baseMediaPanelsUrl = 'https://d3dqcjzalk876k.cloudfront.net/eraPanels/';

// eslint-disable-next-line import/prefer-default-export
export const erasContent = [
  {
    background: `${baseMediaPanelsUrl}Prehistoric.png`,
    title: 'Prehistoric',
    eraData: 'prehistoricBreakdown',
    subTitle: '',
    bodyText: 'The Dinosaurs are a group of ancient, non-human dinosaurs that lived in the late Jurassic period of the Cretaceous period. They were the first group of animals to exist in the world.',
    date: '300 million BC - 50 million BC',
    ...baseFields
  },
  {
    background: `${baseMediaPanelsUrl}1800s.png`,
    title: '1800s',
    eraData: 'eighteenBreakdown',
    subTitle: '',
    bodyText: 'The Dinosaurs are a group of ancient, non-human dinosaurs that lived in the late Jurassic period of the Cretaceous period. They were the first group of animals to exist in the world.',
    date: '1820-1850',
    ...baseFields
  },
  {
    background: `${baseMediaPanelsUrl}1900s.png`,
    title: '1900s',
    eraData: 'nineteenBreakdown',
    subTitle: '',
    bodyText: 'The Dinosaurs are a group of ancient, non-human dinosaurs that lived in the late Jurassic period of the Cretaceous period. They were the first group of animals to exist in the world.',
    date: '1960-1970',
    ...baseFields
  },
  {
    background: `${baseMediaPanelsUrl}Future.png`,
    title: 'Future',
    eraData: 'futureBreakdown',
    subTitle: '',
    bodyText: 'The Dinosaurs are a group of ancient, non-human dinosaurs that lived in the late Jurassic period of the Cretaceous period. They were the first group of animals to exist in the world.',
    date: '2020s and Beyond',
    ...baseFields
  },
];
