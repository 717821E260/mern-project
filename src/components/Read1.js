import React from 'react';
import Figure from 'react-bootstrap/Figure';
import styled, { keyframes } from 'styled-components';
import { FaCartPlus } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Navbar_Comp from './Navbar_Comp';
const RatingStyles = {
  input: {
    position: 'absolute',
    appearance: 'none',
    display: 'none',
  },
  label: {
    float: 'right',
    cursor: 'pointer',
    fontSize: '30px',
    color: '#666',
    display: 'inline-block',
    width: '30px',
    height: '30px',
    transition: 'color 0.1s ease', 
  },
  checkedLabelHover: {
    color: '#e58e09',
  },
  uncheckedLabelHover: {
    color: '#ff9e0b',
  },
  checkedLabel: {
    color: '#ffa723',
  },
  starImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

const Rating = ({ rating, onRatingChange }) => {
  return (
    <div className="rating">
          
      {[5, 4, 3, 2, 1].map((value) => (
        <React.Fragment key={value}>
          <input
            type="radio"
            id={`star${value}`}
            name="rate"
            value={value}
            style={RatingStyles.input}
            checked={rating === value}
            onChange={() => onRatingChange(value)}
          />
          <label
            title="text"
            htmlFor={`star${value}`}
            style={rating === value ? { ...RatingStyles.label, ...RatingStyles.checkedLabel } : RatingStyles.label}
          >
            
          </label>
        </React.Fragment>
      ))}
    </div>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const AnimatedFigure = styled(Figure)`
  animation: ${fadeIn} 1s ease-in-out;
`;

const AnimatedCaption = styled(Figure.Caption)`
  animation: ${slideIn} 1s ease-in-out;
`;

const AnimatedButton = styled(Button)`
  animation: ${slideIn} 1s ease-in-out;
`;

const RatingImage = styled.img`
  animation: ${slideIn} 1s ease-in-out;
`;

function FigureExample() {
  const [rating, setRating] = React.useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  const categoryImages = {
    hideAndSeek: "https://assets-global.website-files.com/64bdf2da73f4d7db826dcce3/64cdec3f9c11711e174190a4_hide-and-seek.jpg",
    nextCategory: "https://example.com/next-category-image.jpg",
    
  };

  return (
<div>
<Navbar_Comp/>
    <AnimatedFigure style={{ backgroundColor: 'white', padding: '30px', marginTop: '8em', display: 'flex', justifyContent: 'center', marginRight: '80em' }}>
       
      <Figure style={{ textAlign: 'center' }}>
  
        <Figure.Image
          width={400}
          height={800}
          alt="400x800"
          src="https://assets-global.website-files.com/64bdf2da73f4d7db826dcce3/64cdec3f9c11711e174190a4_hide-and-seek.jpg"
          style={{ margin: '0 auto' }}
        />
        
        <AnimatedCaption style={{ textAlign: 'left', maxWidth: '800px', marginLeft: '1300px', marginTop: '-550px' }}>
          <h3 style={{ fontSize: '3rem', color: 'black', fontFamily: 'Arial, sans-serif', margin: '0', marginBottom: '10px', whiteSpace: 'nowrap', textAlign: 'left' }}>Hide And Seek</h3>
          <div style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif', marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
            {/* Include the Rating component */}
            <Rating rating={rating} onRatingChange={handleRatingChange} />
          </div>
          <p style={{ fontSize: '1.5rem', fontFamily: 'serif', margin: '0', marginBottom: '10px', width: '300%', }}>
            I know we all are lonely. Locked off from one another in some fundamental secrecy. But some of us declare war and some of us don't. What a terrible time to find out how good life.Writing a good book description isn't just about telling readers what your book's about once they find it; it's about telling search engines what search queries your book could answer so that they actually can find it.Even the best book readers suffer from writer’s block, when finding the words to describe a book you just read can be an uphill task.This is a great word to use because it promises readers that they will have positive feelings after reading the book. It is also a good way to describe a book that checked all the boxes for you in terms of the story and the quality of writing.


          </p>
          <p style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif', margin: '0' }}>
            Price: 509.99
          </p>
         <br></br>
          {/* Wrap the button with Link */}
          <Link to="/cart">
            <AnimatedButton variant="primary" style={{ marginLeft: '10px', fontSize: '1rem', fontFamily: 'Arial, sans-serif' }}>
              <FaCartPlus style={{ marginRight: '5px' }} />
              Add to Cart
            </AnimatedButton>
          </Link>
          
        </AnimatedCaption>
      </Figure>
      
    </AnimatedFigure>
    </div>
    
  );
}

export default FigureExample;
