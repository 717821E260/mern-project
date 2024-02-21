import React from 'react';
import { useSpring, animated } from 'react-spring';
import ContactUs from './ContactUs';

const Card3 = () => {
  const cardStyles = {
    display: 'block',
    top: '0px',
    position: 'relative',
    maxWidth: '262px',
    backgroundColor: '#f2f8f9',
    borderRadius: '4px',
    padding: '32px 24px',
    margin: '12px',
    textDecoration: 'none',
    overflow: 'hidden',
    border: '1px solid #f2f8f9',
  };

  const hoverStyles = {
    transition: 'border 0.2s ease-out, box-shadow 0.2s ease-out',
    border: '1px solid #00838d',
    boxShadow: '0px 0px 999px 999px rgba(255, 255, 255, 0.5)',
    zIndex: 500,
  };

  const [style, set] = useSpring(() => ({ ...cardStyles }));

  return (
    <animated.div
      style={style}
      onMouseEnter={() => set({ ...hoverStyles })}
      onMouseLeave={() => set({ ...cardStyles })}
    >
      <p>Your text here</p>
      <h3>Your heading here</h3>
    </animated.div>
  );
};

export default Card3;
