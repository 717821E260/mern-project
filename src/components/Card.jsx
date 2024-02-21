import React from 'react';
import './Card.css'; // Import your CSS file for styling
import CardContainer from './CardContainer';

const Card = ({ title, description }) => {
  return (
    <div className="card">
      <div className="circle-image">
        <img src="https://writer.ancorathemes.com/wp-content/uploads/2021/12/testi-1-150x150.jpg" alt={title} />
      </div>
      <div className="card-content">
        <h2>hi</h2>
        <p>{description}</p>
      </div>
      <CardContainer/>
      
    </div>
  );
};

export default Card;
