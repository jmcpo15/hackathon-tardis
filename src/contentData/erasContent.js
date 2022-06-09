import iplayerLogo from '../productLogos/iplayer.svg';
import soundsLogo from '../productLogos/sounds.svg';
import newsLogo from '../productLogos/news.svg';
import bitesizeLogo from '../productLogos/bitesize.svg';

const baseFields = {
  icon: '',
  iconStyle: { background: 'rgb(0, 0, 0)', color: '#eee' },
  contentStyle: { background: '#eeeeee', color: '#000' },
  contentArrowStyle: { borderRight: '7px solid  #eeeeee' },
}

// eslint-disable-next-line import/prefer-default-export
export const erasContent = [
  {
    title: 'Prehistoric',
    eraData: 'prehistoricBreakdown',
    subTitle: '',
    bodyText: 'The Dinosaurs are a group of ancient, non-human dinosaurs that lived in the late Jurassic period of the Cretaceous period. They were the first group of animals to exist in the world.',
    date: '300 million BC - 50 million BC',
    ...baseFields
  },
  {
    title: '1800s',
    eraData: 'eighteenBreakdown',
    subTitle: '',
    bodyText: 'The Dinosaurs are a group of ancient, non-human dinosaurs that lived in the late Jurassic period of the Cretaceous period. They were the first group of animals to exist in the world.',
    date: '1820-1850',
    ...baseFields
  },
  {
    title: '1900s',
    eraData: 'nineteenBreakdown',
    subTitle: '',
    bodyText: 'The Dinosaurs are a group of ancient, non-human dinosaurs that lived in the late Jurassic period of the Cretaceous period. They were the first group of animals to exist in the world.',
    date: '1960-1970',
    ...baseFields
  },
  {
    title: 'Future',
    eraData: 'futureBreakdown',
    subTitle: '',
    bodyText: 'The Dinosaurs are a group of ancient, non-human dinosaurs that lived in the late Jurassic period of the Cretaceous period. They were the first group of animals to exist in the world.',
    date: 'Future',
    ...baseFields
  },
];
