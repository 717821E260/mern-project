import React from 'react';
import Figure from 'react-bootstrap/Figure';
import styled, { keyframes } from 'styled-components';
import Navbar_Comp from './Navbar_Comp';
import { Link } from 'react-router-dom';
import Footer from './Footer';

import { Col } from 'react-bootstrap';

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

const AnimatedFigureImage = styled(Figure.Image)`
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const AnimatedHeading = styled.h1`
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const AnimatedParagraph = styled.p`
  animation: ${fadeIn} 1.5s ease-in-out;
`;

function FigureExample() {
  return (
    <Col md={28} lg={19}>
      <div style={{ backgroundColor: 'white', padding: '100px', marginTop: '3em', width: '100%', backgroundColor: 'aliceblue' }}>
        <Navbar_Comp />
        <div style={{ textAlign: 'center', marginBottom: '8em' }}>
          <AnimatedHeading style={{ fontSize: '50px' }}>Upcoming Events</AnimatedHeading>
        </div>
        <Figure style={{ textAlign: 'center' }}>
          <Col md={6} lg={4}>
            <Link to="/eventregister">
              <AnimatedFigureImage
                width={500}
                height={500}
                alt="500x500"
                src="https://writer.ancorathemes.com/wp-content/uploads/2022/01/post-image-7.jpg"
                style={{ margin: '0 auto', marginTop: '1em', marginRight: '-110em' }}
              />
            </Link>
            <div style={{ marginTop: '-16em', marginRight: '-15em', fontSize: '20px' }}>
              <AnimatedHeading>Top Writing Jobs Today</AnimatedHeading>
              <AnimatedParagraph>
                The greatest glory in living lies not in never falling, but in rising every time we fall.
                Your time so don't waste it living someone else's life. Having a positive attitude isn't
                wishy-washy, it's a concrete and intelligent way to view problems, challenges, and obstacles.
              </AnimatedParagraph>
              <br />
              <AnimatedHeading>$500</AnimatedHeading>
              <br />
            </div>
          </Col>

          {/* Event 1 */}
          <Col md={6} lg={4}>
            <Link to="/events1">
              <AnimatedFigureImage
                width={500}
                height={500}
                alt="500x500"
                src="https://writer.ancorathemes.com/wp-content/uploads/2022/01/post-image-10.jpg"
                style={{ margin: '0 auto', marginTop: '15em', marginRight: '-110em' }}
              />
            </Link>
            <div style={{ marginTop: '-15em', marginRight: '-15em', fontSize: '20px' }}>
              <AnimatedHeading>Writers’ Convention 2022</AnimatedHeading>
              <AnimatedParagraph>
                The greatest glory in living lies not in never falling, but in rising every time we fall.
                Your time is limited, so don't waste it living someone else's life. Having a positive attitude isn't
                wishy-washy, it's a concrete and intelligent way to view problems, challenges, and obstacles.
              </AnimatedParagraph>
              <br />
              <AnimatedHeading>$300</AnimatedHeading>
              <br />
            </div>
          </Col>

          {/* Event 2 */}
          <Col md={6} lg={4}>
            <Link to="/Events2">
              <AnimatedFigureImage
                width={500}
                height={500}
                alt="500x500"
                src="https://writer.ancorathemes.com/wp-content/uploads/2022/01/post-image-11.jpg"
                style={{ margin: '0 auto', marginTop: '13em', marginRight: '-110em' }}
              />
            </Link>
            <div style={{ marginTop: '-16em', marginRight: '-15em', fontSize: '20px' }}>
              <AnimatedHeading>Writing’ MasterClass</AnimatedHeading>
              <AnimatedParagraph>
                The greatest glory in living lies not in never falling, but in rising every time we fall.
                Your time is limited, so don't waste it living someone else's life. Having a positive attitude isn't
                wishy-washy, it's a concrete and intelligent way to view problems, challenges, and obstacles.
              </AnimatedParagraph>
              <br />
              <AnimatedHeading>$400</AnimatedHeading>
              <br />
            </div>
          </Col>
        </Figure>
       
      </div>
  
    </Col>
  );
}

export default FigureExample;
