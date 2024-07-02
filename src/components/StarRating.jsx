import { useState } from "react";
import { FaStar } from "react-icons/fa";
// import './styles.css';

export default function StarRating({noOfStar}) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  const active = {
    color: 'yellow'
  };

  const inActive = {
    color: 'grey'
  };

  return (
    <div className="star-rating" style={{textAlign: 'center', marginTop: '200px'}}>

        <h2>Rating Star</h2>
      {[...Array(noOfStar)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className='star'
            style={index <= (hover || rating) ? active : inActive}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={60}
          />
        );
      })}
      
    </div>
  );
}