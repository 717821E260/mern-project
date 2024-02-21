import React, { useState }from 'react';
import Figure from 'react-bootstrap/Figure';
import styled, { keyframes } from 'styled-components';
import {Link} from 'react-router-dom';
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
const ReadButton = styled.button`
  background-color: black;
  color: white;
  padding: 10px 30px;
 
  border: black;
  border-radius: 3px;
  cursor: pointer;

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
          src="https://assets-global.website-files.com/64b8bca09e0474df27fcc6a9/64b91982ebe4a1692ff5fcdc_hero-image.png"
          style={{ margin: '0 auto', marginLeft: '10px',marginTop:'7em' }}
        />
        <AnimatedFigureCaption style={{ textAlign: 'center', justifyContent: "center", alignItems: "center", position: "absolute", right: '0', marginTop: '-30em', color: 'black' }}>
          <h1 style={{ textAlign: "center", textAlign: 'center', justifyContent: "center", alignItems: "center", marginRight: "350px", fontSize: "30px" ,color:"grey"}}>By bestseller author</h1>
          <br></br>
          <h1 style={{ marginRight: "150px", fontSize: "70px" }}>Meet your next</h1>
          <h1 style={{ marginRight: "210px", fontSize: "70px" }}>favorite book</h1>
          <br></br>
          <Link to='/all categories'>
        <ReadButton style={{display:"center",justifyContent:"flex-end",marginLeft:"-490px"}} className="all categories" >Shop Now
        </ReadButton>
        </Link>
          
        </AnimatedFigureCaption>
      </Figure>
    </div>
  );
}

export default FigureExample;
