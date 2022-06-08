import React from 'react';
import PropTypes from 'prop-types';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Logo(logo) {
  return (<img src={logo} alt="logo" />);
}

const generateTimelineBlocks = (tlContent, clickHandler) => tlContent.map((content, index) => (
  <VerticalTimelineElement
    key={`${index + 5}-${content.title}`}
    className="vertical-timeline-element--work"
    contentStyle={content.contentStyle}
    contentArrowStyle={content.contentArrowStyle}
    date={content.date}
    iconStyle={content.iconStyle}
    icon={Logo(content.icon)}
    onTimelineElementClick={() => clickHandler()}
  >
    <h3 className="vertical-timeline-element-title">{content.title}</h3>
    <h4 className="vertical-timeline-element-subtitle">{content.subTitle}</h4>
    <p>
      {content.bodyText}
    </p>
  </VerticalTimelineElement>
));

export default function ReactVerticalTimelineComponent(props) {
  const { inputData, clickHandler } = props;
  return (
    <VerticalTimeline lineColor="#000" animate layout="1-column-left">
      {generateTimelineBlocks(inputData, clickHandler)}
    </VerticalTimeline>
  );
}

ReactVerticalTimelineComponent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  inputData: PropTypes.any.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
