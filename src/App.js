import React, { useState } from 'react';
import './App.css';
import RatingComponent from './components/RatingComponent';
import ThankYouComponent from './components/ThankYouComponent';

function App() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    if (selectedRating) {
      setIsSubmitted(true);
    }
  };

  return (
    <div>
      {isSubmitted ? (
        <ThankYouComponent selectedRating={selectedRating} />
      ) : (
        <RatingComponent
          onRatingSelect={handleRatingSelect}
          onSubmit={handleSubmit}
          selectedRating={selectedRating}
        />
      )}
    </div>
  );
}

export default App;