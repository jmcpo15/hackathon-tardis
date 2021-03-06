import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../helpers/logoGenerator';

const generateMediaCards = (mediaCards, modalState, clickHandler) => mediaCards.map((card, index) => (
  <div
    key={`${index + 5}-${card.title}`}
    className="mediaCard bounceAnim"
    style={{animationDelay: `${index / 10}s`, animationDuration: '1s', backgroundImage: `url(${card.background})`, backgroundSize: '100% 100%'}}
    image={card.image}
    onClick={() => clickHandler(true, {videoUrl: card?.videoUrl || null, contentUrl: card?.contentUrl || null})}
  >
    { !card.background && 
    <div>
      <h3 className="">{card.title}</h3>
      <h4 className="">{card.subTitle}</h4>
      <div className='cardLogo'>{card.productLogo ? Logo(card.productLogo) : ''}</div>
      <p>
        {card.bodyText}
      </p>
    </div>
    }
  </div>
));

// eslint-disable-next-line no-unused-vars
export default function MediaHolder(props) {
  const { inputData, modalState, clickHandler } = props;
  return (
    <div className="mediaHolderWrapper">
      <div className="mediaHolder" lineColor="#000" animate layout="1-column-left">
        {generateMediaCards(inputData, modalState, clickHandler)}
      </div>
    </div>
  );
}

MediaHolder.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  inputData: PropTypes.any.isRequired,
  modalState: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
