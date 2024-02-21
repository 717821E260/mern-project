import React, { useState }from 'react';
import Figure from 'react-bootstrap/Figure';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const AnimatedFigureCaption = styled(Figure.Caption)`
  animation: ${fadeIn} 1s ease-in-out;
`;

function FigureExample() {
  const [isVisible, setIsVisible] = useState(true);


  setTimeout(() => {
    setIsVisible((prev) => !prev);
  }, 5000);
  return (
    <div style={{ backgroundColor: 'aliceblue', padding: '15px', marginTop: '5em' }}>
      <Figure style={{}}>
        <Figure.Image
          width={500}
          height={600}
          alt="500x600"
          src="https://assets.website-files.com/6433d05711af0d8575b9111d/648b1b8a3bbd241008c595c6_DX%2021-p-500.jpg"
          style={{ margin: '0 auto', marginLeft: '150px' }}
        />
        <AnimatedFigureCaption style={{ textAlign: 'center', justifyContent: "center", alignItems: "center", position: "absolute", right: '0', marginTop: '-49em', color: 'black' }}>
          <h1 style={{ textAlign: "center", textAlign: 'center', justifyContent: "center", alignItems: "center", marginRight: "400px", fontSize: "100px" }}>Words That</h1>
          <h1 style={{ marginRight: "250px", fontSize: "100px" }}>Inspire, Stories</h1>
          <h1 style={{ marginRight: "300px", fontSize: "100px" }}>That Matters.</h1>
          <br></br>
          <p style={{ marginRight: "40px", fontSize: "40px" }}>If u want to live Top Shelf life then you need to, </p>
          <p style={{ marginRight: "20px", fontSize: "40px" }}>on the Books  you have read, Never stop learning.</p>
          <p style={{ marginRight: "80px", fontSize: "40px" }}>Life is like a Book that never ends let our lives </p>
          <p style={{ marginRight: "130px", fontSize: "40px" }}>Be open books for all to Study and a room</p>
          <p style={{ marginRight: "160px", fontSize: "40px" }}>Without books is like body without soul.</p>
        </AnimatedFigureCaption>
      </Figure>
    </div>
  );
}

export default FigureExample;
