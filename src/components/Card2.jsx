import React from 'react';
import ContactUs from './ContactUs';

const Card2 = () => {
  const cardStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    maxWidth: '262px',
    backgroundColor: '#f2f8f9',
    borderRadius: '4px',
    padding: '32px 24px',
    margin: '12px',
    textDecoration: 'none',
    zIndex: '0',
    overflow: 'hidden',
    border: '1px solid #f2f8f9',
  };

  const hoverStyles = {
    transition: 'all 0.2s ease-out',
    boxShadow: '0px 4px 8px rgba(38, 38, 38, 0.2)',
    top: '-4px',
    border: '1px solid #ccc',
    backgroundColor: 'white',
  };

  return (
    <ContactUs cardStyles={cardStyles} hoverStyles={hoverStyles}>
      <p>Your text here</p>
      <h3>Your heading here</h3>
    </ContactUs>
  );
};

export default Card2;
