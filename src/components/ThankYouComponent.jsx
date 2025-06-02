import React from 'react';
import thankYouImg from '../images/illustration-thank-you.svg';

const ThankYouComponent = ({ selectedRating }) => {
  return (
    <div className="thank-you">
      <img src={thankYouImg} alt="thank you illustration" className="thank-you-img" />
      <p className="selection">You selected {selectedRating} out of 5</p>
      <h2 className="title">Thank you!</h2>
      <p className="description">
        We appreciate you taking the time to give a rating. If you ever need more
        support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankYouComponent;