
// import NavigationHeader, { navigationHeaderItemClass } from '@bbc/igm-navigation-header';
// import '@bbc/igm-navigation-header/dist/NavigationHeader.css';
/* eslint-disable max-len */
import { useState } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import Modal from "./components/modal/Modal";
// import logo from './logo.svg';
import './App.css';
import ReactVerticalTimelineComponent from './components/timelines/ReactVerticalTimelineComponent';
import { erasContent } from './contentData/erasContent';
import {dinosaursBreakdown, sixtysBreakdown} from './contentData/eraBreakdownContent'

const eraBreakdowns = {
  'The Dinosaurs': dinosaursBreakdown,
  'Sixtys': sixtysBreakdown
}

function TimelineWrapper(props) {
  const { type, era, clickHandler, modalState, modalHandler, category } = props;
  if (type === 'eras') {
    return (<ReactVerticalTimelineComponent inputData={erasContent} type={'era'} clickHandler={clickHandler}/>);
  }
  if (type === 'eraBreakdown') {
    console.log(category)
    const filterdEraBreakdowns = JSON.parse(JSON.stringify(eraBreakdowns));
    if (category !== "none") {
      filterdEraBreakdowns[era].map((e) => e.mediaBlocksData = e.mediaBlocksData.filter(m => m.category === category));
    }
    return (<ReactVerticalTimelineComponent inputData={filterdEraBreakdowns[era]} type={'eraBreakdown'} era={era} clickHandler={clickHandler}  modalState={modalState} modalHandler={modalHandler} />);
  }
  return <> </>;
}

TimelineWrapper.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  type: PropTypes.string.isRequired,
  era: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
  modalState: PropTypes.bool.isRequired,
  modalHandler: PropTypes.func.isRequired,
  category: PropTypes.string,
};

function App() {
  const [currentType, setCurrentType] = useState('eras');
  const [selectedEra, setSelectedEra] = useState('The Dinosaurs');
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState('no modal content');
  const [category, setCategory] = useState('none')


  const modalHandler = (newModalState, newModalContent) => {
    setModalContent(newModalContent);
    setModalShow(newModalState);
  };

  const handleClick = (era, back) => {
    if (currentType === 'eras') { 
      setCurrentType('eraBreakdown')
      setSelectedEra(era)
    };
    if (currentType === 'eraBreakdown' || back) setCurrentType('eras');
  };
  
  return (
    <div className="App">
      <header role="banner">
        <div className="wrapper">
          <div className="sideHeader" />
          <div className="middleHeader">
            <h1>Navigation bar would be here....</h1>
          </div>
          <div className="sideHeader" />
        </div>
      </header>

      <div className="wrapper">
        <div className="sideBody" />
        <div className="middleBody">

          <h1>Welcome to BBC T.A.R.D.I.S.</h1>

          <p>
            BBC T.A.R.D.I.S. is a fun tool to discover BBC
            content about different key points in history!
          </p>
            <button id="none" onClick={() => setCategory("none")}>all</button>
            <button id="news" onClick={() => setCategory("news")}>news</button>
            <button id="bitesize" onClick={() => setCategory("bitesize")}>bitesize</button>
            <button id="sounds" onClick={() => setCategory("sounds")}>sounds</button>
            <button id="iplayer"onClick={() => setCategory("iplayer")} >iplayer</button>
            <TimelineWrapper type={currentType} era={selectedEra} clickHandler={handleClick} modalState={modalShow} modalHandler={modalHandler} category={category}/>
        </div>
        <div className="sideBody" />
      </div>

      <Modal title="My Modal" onClose={() => modalHandler(false, {videoUrl: null, contentUrl: null})} show={modalShow}>
          {
            modalContent.videoUrl &&
              <ReactPlayer
                url={modalContent.videoUrl}
                controls
                width='auto'
                height='auto'
              />
          }

          {
            modalContent.contentUrl &&
              <div className='contentLink'>
                <a href={`${modalContent.contentLink}`} target="_blank" rel="noreferrer">Go to content {modalContent.contentLink}</a>
              </div>
          }

          {
            !modalContent.videoUrl && !modalContent.contentUrl && 'no content'
          }

          </Modal>

    </div>
  );
}

export default App;
