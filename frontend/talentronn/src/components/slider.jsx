import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/slider.css';
import '../index.css';
const Slider = () => {
  const navigate = useNavigate();
  const sliderData = {
    backgroundImages: [
      { src: '/images/rectangle.png', className: 'bottom' },
      { src: '/images/Designer.png', className: 'above' },
      { src: '/images/Designer4.png', className: 'small-above' },
    ],
    text: [
      { content: 'Hi Candidate!', color: '#FFFFFF' },
      { content: 'Are you looking for a Job?', color: '#109BFF' },
      {
        content:
          'Lorem ipsum, or lipsum as it is sometimes known,is dummy text used in laying out print, graphic or web designs.',
        color: '#FFFFFF',
        style: {
          fontSize: '14px',
          fontWeight: '400',
          fontFamily: 'Montserrat',
          marginTop: '13px',
        },
        className: 'mxyn',
      },
    ],
    buttons: [
      { text: 'Job Seeker', className: 'box', id: 'but' },
    ],
    icons: [
      { src: '/images/frame.png', className: 'icon' },
    ],
    arrows: [
      { src: '/images/leftarrow.png', className: 'left-arrow', onClick: () => navigate('/contact') },
      { src: '/images/rightarrow.png', className: 'right-arrow', onClick: () => navigate('/TrainingProgram') },
    ],
  };

  return (
    <div className="maiin-image">
      <div className="image">
        {sliderData.backgroundImages.map((image, index) => (
          <img key={index} src={image.src} className={image.className} alt={`Background ${index + 1}`} />
        ))}
        {sliderData.arrows.map((arrow, index) => (
          <img
            key={index}
            src={arrow.src}
            className={arrow.className}
            onClick={arrow.onClick}
            alt={`Arrow ${index + 1}`}
          />
        ))}
        <div className="boxes">
          {sliderData.text.map((text, index) => (
            <p
              key={index}
              style={{ color: text.color, ...text.style }}
              className={text.className || ''}
            >
              {index === 2 ? (
                <>
                  Lorem ipsum, or lipsum as it is sometimes known,is dummy text used in laying out print, graphic or web designs.
                  <br />
                  
                </>
              ) : (
                text.content
              )}
            </p>
          ))}
          {sliderData.buttons.map((button, index) => (
            <button key={index} className={button.className} id={button.id}>
              {button.text}
            </button>
          ))}
        </div>
        {sliderData.icons.map((icon, index) => (
          <img key={index} src={icon.src} className={icon.className} alt={`Icon ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};
export default Slider;
