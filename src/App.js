import logo from './logo.svg';
import './App.css';
import NavigationHeader from '@bbc/igm-navigation-header';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function App() {
  return (
    <div className="App">

      <NavigationHeader
        leftChildren={[
          <div className="igm-navigation-header-1jrdvj7" href="#" mdxType="a" originalType="a"><div mdxType="span" originalType="span">Home</div></div>,
          <div className="igm-navigation-header-1jrdvj7" href="#" mdxType="a" originalType="a"><div mdxType="span" originalType="span">Create New</div></div>
          // <MDXCreateElement className="igm-navigation-header-1jrdvj7" href="#" mdxType="a" originalType="a"><MDXCreateElement mdxType="span" originalType="span">Home</MDXCreateElement></MDXCreateElement>,
          // <MDXCreateElement className="igm-navigation-header-1jrdvj7" href="#" mdxType="a" originalType="a"><MDXCreateElement mdxType="span" originalType="span">Create New</MDXCreateElement></MDXCreateElement>
        ]}
        rightChildren={[
          <div className="igm-navigation-header-1jrdvj7" href="#" mdxType="a" originalType="a"><div mdxType="span" originalType="span">Settings</div></div>,
          <div className="igm-navigation-header-1jrdvj7" href="#" mdxType="a" originalType="a"><div mdxType="span" originalType="span">Sign Out</div></div>
          // <MDXCreateElement className="igm-navigation-header-1jrdvj7" href="#" mdxType="a" originalType="a"><MDXCreateElement mdxType="span" originalType="span">Settings</MDXCreateElement></MDXCreateElement>,
          // <MDXCreateElement className="igm-navigation-header-1jrdvj7" href="#" mdxType="a" originalType="a"><MDXCreateElement mdxType="span" originalType="span">Sign Out</MDXCreateElement></MDXCreateElement>
        ]}
      />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


      <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
    icon="ICON"
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
    icon="ICON"
  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
    icon="ICON"
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
    icon="ICON"
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    // icon={<SchoolIcon />}
    icon="ICON"
  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    // icon={<SchoolIcon />}
    icon="ICON"
  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    // icon={<SchoolIcon />}
    icon="ICON"
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    // icon={<StarIcon />}
    icon="ICON"
  />
</VerticalTimeline>
    </div>
  );
}

export default App;
