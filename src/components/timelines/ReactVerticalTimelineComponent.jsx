import React from 'react';
import PropTypes from 'prop-types';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import MediaHolder from '../MediaHolder';
import Logo from '../../helpers/logoGenerator';

const generateTimelineBlocks = (tlContent, type, clickHandler) => tlContent.map((content, index) => {

  if (type === 'era') {
    return (
      <VerticalTimelineElement
      key={`${index + 5}-${content.title}`}
      className="vertical-timeline-element--work"
      contentStyle={content.contentStyle}
      contentArrowStyle={content.contentArrowStyle}
      date={content.date}
      iconStyle={content.iconStyle}
      icon={content.icon ? Logo(content.icon) : ''}
      onTimelineElementClick={() => clickHandler(content.title)}
    >
      <h3 className="vertical-timeline-element-title">{content.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{content.subTitle}</h4>
      <p>
        {content.bodyText}
      </p>
    </VerticalTimelineElement>
    )
  }

  if (type === 'eraBreakdown') {
    return (
      <VerticalTimelineElement
        key={`${index + 5}-${content.title}`}
        className="vertical-timeline-element--work"
        contentStyle={content.contentStyle}
        contentArrowStyle={content.contentArrowStyle}
        // date={content.date}
        iconStyle={content.iconStyle}
        icon={content.icon ? Logo(content.icon) : ''}
        // onTimelineElementClick={() => clickHandler()}
      >
        <h3 className="mediaHolderTitle">{content.title}</h3>
        <MediaHolder inputData={content.mediaBlocksData}/>
      </VerticalTimelineElement>
    )
  }

});



export default function ReactVerticalTimelineComponent(props) {
  const { inputData, type, era, clickHandler } = props;
  return (
    <>
    {era && 
      <div className='eraTitle'>
        <button onClick={() => clickHandler('', true)}>{'<'}</button>
        <h2>{era}</h2>
      </div>}
    <VerticalTimeline lineColor="#000" animate layout="1-column-left">
      {generateTimelineBlocks(inputData, type, clickHandler)}
    </VerticalTimeline>
    </>
  );
}

ReactVerticalTimelineComponent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  inputData: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired,
  era: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};
