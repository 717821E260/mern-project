import React from 'react';
import Figure from 'react-bootstrap/Figure';
import styled, { keyframes } from 'styled-components';
import {Link} from 'react-router-dom';

// Define a keyframe animation for the image
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

// Create a styled component with the animation
const AnimatedFigureImage = styled(Figure.Image)`
  animation: ${fadeIn} 1.5s ease-in-out;
`;

// Style for the container holding the image, date, heading, and paragraph
const Container = styled.div`
  background-color: white;
  padding: 7px;
  margin-top: 4em;
  position: relative;
`;

// Style for the date element
const DateElement = styled.div`
  position: absolute;
  top: 10px;
  left: 200px;
  color: black;
  background-color: white;
  padding: 5px;
  border-radius: 2px;
  font-size: 19px;
`;

// Style for the heading element
const HeadingElement = styled.h1`
  text-align: center;
  font-size: 30px;
  color: black;
  margin-top: -16em;
  margin-left: 330px;
`;

// Style for the paragraph element
const ParagraphElement = styled.p`
  margin-left: 750px;
  margin-top: 2em; /* Adjust the value to move the paragraph up */
  font-size: 20px;
  font-style: italic;
  color: black;
`;
const ReadButton = styled.button`
  background-color: black;
  color: white;
  padding: 10px 30px;
 
  border: black;
  border-radius: 3px;
  cursor: pointer;

`;
function FigureExample() {
  // Get the current date
  const currentDate = new Date().toLocaleDateString();

  return (
    <Container>

      <div>
        <Figure style={{ textAlign: 'center', position: 'relative' }}>
          {/* Apply the animation to the image */}
          <AnimatedFigureImage
            width={500}
            height={480}
            alt="500x480"
            src="https://assets-global.website-files.com/64b8bca09e0474df27fcc6a9/64bce8aec380dc07d920fc2d_Banner.png"
            style={{ margin: '0 auto', marginLeft: '200px' }}
          />
          {/* Display the date at the top-left corner */}
          <DateElement>No. 1 Bestseller Author</DateElement>
        </Figure>

        <div style={{ marginTop: '-2em', color: 'black' }}>
          <HeadingElement>Suzanne den Broek</HeadingElement>
          <ParagraphElement>
            An eloquent storyteller celebrated for her eloquence and grace. Rivers' historical fiction novels effortlessly
            transport readers to bygone eras, while her poetic prose weaves a tapestry of emotions. Her ability to breathe
            life into history has earned her the well-deserved title of the number one book author, adored by literature
            enthusiasts.
          </ParagraphElement>
          <br></br>
          <p style={{marginLeft:'760px',fontSize:'40px',fontStyle:'bold'}}>59+</p>
          <br></br>
          <p style={{marginLeft:'760px',fontSize:'17px',fontStyle:'bold',marginTop:'-2em',color:'blue'}}>Books Published</p>
       
          <Link to='/contactus'>
        <ReadButton style={{display:"center",justifyContent:"flex-end",marginLeft:"760px"}} className="all categories" >Contact
        </ReadButton>
        </Link>
          
        </div>
      </div>
    </Container>
  );
}

export default FigureExample;
