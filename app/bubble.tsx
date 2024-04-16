import React from 'react';

function Bubble({ image }) {
  const size = Math.random() * 60 + 20; // Random size between 20px and 80px
  const left = Math.random() * 100 - 1; // Random position from left between 0 and 100%
  const bottom = Math.random() * -50 ; // Random position from bottom between 0 and 50%

  const style = {
    width: `${size}px`,
    height: `${size}px`,
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    left: `${left}%`,
    bottom: `${bottom}%`,
  };

  return <div className="bubble" style={style} />;
}

export default Bubble;