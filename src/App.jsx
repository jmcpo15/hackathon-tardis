/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NavigationHeader, { navigationHeaderItemClass } from '@bbc/igm-navigation-header';
import '@bbc/igm-navigation-header/dist/NavigationHeader.css';
// import logo from './logo.svg';
import './App.css';
import ReactVerticalTimelineComponent from './timelines/ReactVerticalTimelineComponent';
// import { timelineContent } from './contentData/initialDummyData';
import { erasContent } from './contentData/erasContent';
import { decadesContent } from './contentData/decadesContent';

function TimelineWrapper(props) {
  const { type, clickHandler } = props;

  if (type === 'eras') {
    return (<ReactVerticalTimelineComponent inputData={erasContent} clickHandler={clickHandler} />);
  } if (type === 'decades') {
    return (<ReactVerticalTimelineComponent inputData={decadesContent} clickHandler={clickHandler} />);
  }
  return <> </>;
}

TimelineWrapper.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  type: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

function App() {
  const [currentType, setCurrentType] = useState('eras');

  const handleClick = () => {
    console.log('clickHandler clicked');
    if (currentType === 'eras') setCurrentType('decades');
    if (currentType === 'decades') setCurrentType('eras');
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
          <TimelineWrapper type={currentType} clickHandler={handleClick} />
        </div>
        <div className="sideBody" />
      </div>

    </div>
  );
}

export default App;
