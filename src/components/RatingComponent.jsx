import React from 'react';
import starIcon from '../images/icon-star.svg';

const RatingComponent = ({ onRatingSelect, onSubmit }) => {
  return (
    <div className="rating-container">
      <img src={starIcon} alt="star icon" className="star-icon" />
      <h1 className="title">How did we do?</h1>
      <p className="description">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating-numbers">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            className={`rating-btn ${onRatingSelect === num ? 'selected' : ''}`}
            data-value={num}
            onClick={() => onRatingSelect(num)}
          >
            {num}
          </button>
        ))}
      </div>
      <button className="submit-btn" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default RatingComponent;