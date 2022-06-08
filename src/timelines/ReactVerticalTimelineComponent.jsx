import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import iplayerLogo from '../productLogos/iplayer.svg';
import soundsLogo from '../productLogos/sounds.svg';
import newsLogo from '../productLogos/news.svg';
import bitesizeLogo from '../productLogos/bitesize.svg';
import ReactPlayer from 'react-player';

function Logo(logo) {
  return (<img src={logo} alt="logo" />);
}

function player(content) {
  if ('videoUrl' in content) {
    return <ReactPlayer
      url={content.videoUrl}
      controls
      width='265px'
      height='150px'
    />
  } else {
    return null
  }
}

const timelineContent = [
  {
    title: 'The Dinosaurs',
    subTitle: 'BBC iPlayer',
    bodyText: 'The Dinosaurs are a group of ancient, non-human dinosaurs that lived in the late Jurassic period of the Cretaceous period. They were the first group of animals to exist in the world.',
    date: '1st Jan 1950',
    icon: iplayerLogo,
    iconStyle: { background: 'rgb(0, 0, 0)', color: '#eee' },
    contentStyle: { background: '#eeeeee', color: '#000' },
    contentArrowStyle: { borderRight: '7px solid  #eeeeee' },
    videoUrl: 'https://d3dqcjzalk876k.cloudfront.net/videos/Gentleman-Jack-OFFICIAL-TRAILER-BBC.mp4',
    thumbnail: 'https://ichef.bbci.co.uk/images/ic/1184x666/p0bz9zcl.jpg',
  },
  {
    title: 'England Win the World Cup',
    subTitle: 'BBC Sounds',
    bodyText: 'England won the World Cup in 1966, which was the first and only World Cup victory of their history.',
    date: '1st Jan 1966',
    icon: soundsLogo,
    iconStyle: { background: 'rgb(0, 0, 0)', color: '#eee' },
    contentStyle: { background: '#eeeeee', color: '#000' },
    contentArrowStyle: { borderRight: '7px solid  #eeeeee' },
    thumbnail: 'https://ichef.bbci.co.uk/images/ic/1184x666/p0bz9zcl.jpg',
  },
  {
    title: 'The Dinosaurs',
    subTitle: 'BBC News',
    bodyText: 'The Dinosaurs are a group of ancient, non-human dinosaurs that lived in the late Jurassic period of the Cretaceous period. They were the first group of animals to exist in the world.',
    date: '1st Jan 1950',
    icon: newsLogo,
    iconStyle: { background: 'rgb(0, 0, 0)', color: '#eee' },
    contentStyle: { background: '#eeeeee', color: '#000' },
    contentArrowStyle: { borderRight: '7px solid  #eeeeee' },
    thumbnail: 'https://ichef.bbci.co.uk/images/ic/1184x666/p0bz9zcl.jpg',
  },
  {
    title: 'England Win the World Cup',
    subTitle: 'BBC Bitesize',
    bodyText: 'England won the World Cup in 1966, which was the first and only World Cup victory of their history.',
    date: '1st Jan 1966',
    icon: bitesizeLogo,
    iconStyle: { background: 'rgb(0, 0, 0)', color: '#eee' },
    contentStyle: { background: '#eeeeee', color: '#000' },
    contentArrowStyle: { borderRight: '7px solid  #eeeeee' },
    thumbnail: 'https://ichef.bbci.co.uk/images/ic/1184x666/p0bz9zcl.jpg',
  },
  {
    title: 'The Dinosaurs',
    subTitle: 'BBC iPlayer',
    bodyText: 'The Dinosaurs are a group of ancient, non-human dinosaurs that lived in the late Jurassic period of the Cretaceous period. They were the first group of animals to exist in the world.',
    date: '1st Jan 1950',
    icon: iplayerLogo,
    iconStyle: { background: 'rgb(0, 0, 0)', color: '#eee' },
    contentStyle: { background: '#eeeeee', color: '#000' },
    contentArrowStyle: { borderRight: '7px solid  #eeeeee' },
    thumbnail: 'https://ichef.bbci.co.uk/images/ic/1184x666/p0bz9zcl.jpg',
  },
  {
    title: 'England Win the World Cup',
    subTitle: 'BBC Sounds',
    bodyText: 'England won the World Cup in 1966, which was the first and only World Cup victory of their history.',
    date: '1st Jan 1966',
    icon: soundsLogo,
    iconStyle: { background: 'rgb(0, 0, 0)', color: '#eee' },
    contentStyle: { background: '#eeeeee', color: '#000' },
    contentArrowStyle: { borderRight: '7px solid  #eeeeee' },
    thumbnail: 'https://ichef.bbci.co.uk/images/ic/1184x666/p0bz9zcl.jpg',
  },
  {
    title: 'The Dinosaurs',
    subTitle: 'BBC News',
    bodyText: 'The Dinosaurs are a group of ancient, non-human dinosaurs that lived in the late Jurassic period of the Cretaceous period. They were the first group of animals to exist in the world.',
    date: '1st Jan 1950',
    icon: newsLogo,
    iconStyle: { background: 'rgb(0, 0, 0)', color: '#eee' },
    contentStyle: { background: '#eeeeee', color: '#000' },
    contentArrowStyle: { borderRight: '7px solid  #eeeeee' },
    thumbnail: 'https://ichef.bbci.co.uk/images/ic/1184x666/p0bz9zcl.jpg',
  },
  {
    title: 'England Win the World Cup',
    subTitle: 'BBC Bitesize',
    bodyText: 'England won the World Cup in 1966, which was the first and only World Cup victory of their history.',
    date: '1st Jan 1966',
    icon: bitesizeLogo,
    iconStyle: { background: 'rgb(0, 0, 0)', color: '#eee' },
    contentStyle: { background: '#eeeeee', color: '#000' },
    contentArrowStyle: { borderRight: '7px solid  #eeeeee' },
  },
];

const generateTimelineBlocks = (tlContent) => tlContent.map((content, index) => (
  <VerticalTimelineElement
    key={`${index + 5}-${content.title}`}
    className="vertical-timeline-element--work"
    contentStyle={content.contentStyle}
    contentArrowStyle={content.contentArrowStyle}
    date={content.date}
    iconStyle={content.iconStyle}
    icon={Logo(content.icon)}
  >
    <h3 className="vertical-timeline-element-title">{content.title}</h3>
    <h4 className="vertical-timeline-element-subtitle">{content.subTitle}</h4>
    <div><CarouselEntry videoUrl={content.videoUrl} thumbnail={content.thumbnail}/></div>
    <p>
      {content.bodyText}
    </p>
  </VerticalTimelineElement>
));

const openModal = () => {
  console.log("Open Modal")
}

class CarouselEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'showVideo': false,
      // 'swollen': false
    }
  }

  handleClick = (e) => {
    this.setState({'showVideo': true});
  }

  // handleMouseOver = (e) => {
  //   this.setState({'swollen': true});
  // }

  // handleMouseOut = (e) => {
  //   this.setState({'swollen': false});
  // }

  render() {
    if (!this.state.showVideo) {
      return <div className={'thumbnail'/* + (this.state.swollen ? ' swollen' : '')*/}
        onClick={this.handleClick}
        // onMouseOver={this.handleMouseOver}
        // onMouseOut={this.handleMouseOut}
        ><img src={this.props.thumbnail}/></div>
    } else {
      if (this.props.videoUrl == null) {
        console.log("no video url");
      } else {
        return (
          <div className='player'>
            <ReactPlayer
              url={this.props.videoUrl}
              controls
              width='265px'
              height='150px'
            />
          </div>
        )
      }
    }
  }
}
  
export default function ReactVerticalTimelineComponent() {
  return (
    <VerticalTimeline lineColor="#000" animate layout="1-column-left">
      {generateTimelineBlocks(timelineContent)}
    </VerticalTimeline>
  );
}
