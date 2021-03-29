import React from "react";

const Rate = ({ rating, setRatingSearch }) => {
  const stars = (x) => {
    let starsArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        starsArray.push(
          <span
            style={{
              color: "rgb(190, 81, 81)",
              fontSize: "200%",
              cursor: "pointer",
            }}
            key={i}
            onClick={() => setRatingSearch(i)}
          >
            ★
          </span>
        );
      } else {
        starsArray.push(
          <span
            style={{
              color: "rgb(230, 98, 21)",
              fontSize: "200%",
              cursor: "pointer",
            }}
            key={i}
            onClick={() => setRatingSearch(i)}
          >
            ☆
          </span>
        );
      }
    }
    return starsArray;
  };
  return <div>{stars(rating)}</div>;
};

Rate.defaultProps = {
  setRatingSearch: () => {},
  rating: 0,
};

export default Rate;
