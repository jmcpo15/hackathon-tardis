import React from 'react';
import NavigationHeader, { navigationHeaderItemClass } from '@bbc/igm-navigation-header';
import '@bbc/igm-navigation-header/dist/NavigationHeader.css';
// import logo from './logo.svg';
import './App.css';
import ReactVerticalTimelineComponent from './timelines/ReactVerticalTimelineComponent';

function App() {
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
          <ReactVerticalTimelineComponent />
        </div>
        <div className="sideBody" />
      </div>

    </div>
  );
}

export default App;
