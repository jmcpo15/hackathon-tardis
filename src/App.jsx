/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NavigationHeader, { navigationHeaderItemClass } from '@bbc/igm-navigation-header';
import '@bbc/igm-navigation-header/dist/NavigationHeader.css';
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
  const { type, era, clickHandler, modalState, modalHandler } = props;
  if (type === 'eras') {
    return (<ReactVerticalTimelineComponent inputData={erasContent} type={'era'} clickHandler={clickHandler} />);
  }
  if (type === 'eraBreakdown') {
    return (<ReactVerticalTimelineComponent inputData={eraBreakdowns[era]} type={'eraBreakdown'} era={era} clickHandler={clickHandler}  modalState={modalState} modalHandler={modalHandler} />);
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
};

function App() {
  const [currentType, setCurrentType] = useState('eras');
  const [selectedEra, setSelectedEra] = useState('The Dinosaurs');
  const [modalShow, setModalShow] = useState(false);

  const modalHandler = () => {
    setModalShow(!modalShow);
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
            <NavigationHeader
              leftChildren={[
                <div className={navigationHeaderItemClass} href="#" mdxType="a" originalType="a"><div mdxType="span" originalType="span">T.A.R.D.I.S.</div></div>,
              ]}
              rightChildren={[
              ]}
            />
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
            <TimelineWrapper type={currentType} era={selectedEra} clickHandler={handleClick} modalState={modalShow} modalHandler={modalHandler} />
        </div>
        <div className="sideBody" />
      </div>

    </div>
  );
}

export default App;
