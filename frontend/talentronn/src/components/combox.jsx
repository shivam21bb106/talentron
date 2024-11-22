import React from 'react';
import '../styles/combox.css';
import '../index.css';
function Combox() {
  const boxData = [
    { imgSrc: '/images/image1.png', label: 'Full Stack Development' },
    { imgSrc: '/images/image2.png', label: 'Data Engineering' },
    { imgSrc: '/images/image3.png', label: 'Front-end Development' },
    { imgSrc: '/images/image4.png', label: 'Software Testing' },
    { imgSrc: '/images/more.png', label: 'More Events' },
  ];
  return (
    <div className="shiv-container">
      <div className="boxx">
        {boxData.map((box, index) => (
          <div key={index} className={`sm-boxx ${index === 2 ? 'zx' : ''}`}>
            <img src={box.imgSrc} alt={box.label} className={`image${index + 1}`} />
            <span>{box.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Combox;
