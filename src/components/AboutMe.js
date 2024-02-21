import React from 'react';
import Figure from 'react-bootstrap/Figure';

import Navbar_Comp from './Navbar_Comp';
import styled, { keyframes } from 'styled-components';

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

const moveIn = keyframes`
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
  animation: ${fadeIn} 2s ease-in-out;
`;

const AnimatedFigureImage = styled(Figure.Image)`
  animation: ${moveIn} 2s ease-in-out;
`;

const AnimatedCaption = styled.div`
  animation: ${fadeIn} 2s ease-in-out;
`;

function FigureExample() {
  return (

    <div style={{ backgroundColor:'aliceblue', padding: '100px', marginTop: '-1em' }}>
      <Figure style={{ textAlign: 'center' }}>
       <AnimatedFigure>
        <AnimatedFigure.Image
          width={600}
          height={600}
          alt="600x600"
          src="https://assets.website-files.com/6433d05711af0d8575b9111d/648b1bb518ab9baa56703272_DX%2023-p-500.jpg"
          style={{ margin: '0 auto', marginLeft: '100px' }}
        />
   
       <AnimatedCaption>
          <h1 style={{marginRight:"1050px",fontSize:"70px",marginTop: '-12em',marginLeft:"-200px"}}>Hello! Everyone</h1><br></br>
          <p style={{marginRight:"1300px",fontSize:"50px",fontFamily:'cursive'}}>“Reading furnishes the mind only with materials of knowledge.</p>
          <p style={{marginRight:"1300px",fontSize:"25px" ,color:'black'}}>I declare after all there is no enjoyment 
          </p>
          <p style={{marginRight:"1370px",fontSize:"25px",color:'black'}}> thing than of a book! -- When I have a house of my own,way  interest
          </p>
          
          <p style={{marginRight:"1400px",fontSize:"25px",color:'black'}}> have not  excellent library i can feel infinitely alive curled upon the 
          </p>
            
          <p style={{marginRight:"1300px",fontSize:"25px",color:'black'}}> books are good company in sad times,as well as good times.
          </p>
        <br></br>
          <p style={{marginRight:"1300px",fontSize:"25px",color:'black'}}> One of the many gifts that books give readers  
          </p>
          <div>
          <p style={{
  marginRight: "900px",
  fontSize: "25px",
  marginBottom: '30px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  color:'black',
}}>
  When we share an affection for a writer, an author or a story, we also have a better understanding of people unlike ourselves.
</p>
</div>

          <p style={{marginRight:"-10px",fontSize:"25px",fontFamily:'cursive',marginBottom:'18px'}}> a better understanding of people unlike ourselves. Books cultivate empathy ,If a book is well written, I always find it too short some books are so
          </p>
          <p style={{marginRight:"-10px",fontSize:"25px",fontFamily:'cursive'}}>Books are the plane, and the train, and the road. They are the destination, and the journey. They are  A book is a gift you can open again and again
          </p>
          <p style={{marginRight:"-10px",fontSize:"25px",fontFamily:'cursive'}}>I think books are like people, in the sense that they’ll turn up in your life when you most need them I guess there are never enough books whole life
          </p>
         
          <p style={{marginRight:"-10px",fontSize:"25px",fontFamily:'cursive'}}>You will learn most things by looking, but reading gives understanding. Reading will make you free,  feel  alive curled up on the sofa reading a book
          </p>
          </AnimatedCaption>
          </AnimatedFigure>
         
          <div style={{ backgroundColor:'aliceblue', padding: '15px', marginTop: '19em' }}>
      <Figure style={{ textAlign: 'center' }}>
      <h1 style={{marginRight:"1070px",fontSize:"50px",marginTop: '-5em'}}>Book Your Own Adventures</h1><br></br>
        <Figure.Image
          width={300}
          height={500}
          alt="300x500"
          src="https://assets.website-files.com/639ac8bd86e0b10079d8c011/63a53ba16b5256c09964acd5_action-04.jpg"
          style={{ margin: '0 auto', marginRight: '1300px' }}
        />
           
  <h2 style={{ fontSize: '25px',marginLeft:'20px',marginTop:'-300px',fontFamily:'cursive'}}>My books are marked down because most of them are</h2>
  <h2 style={{ fontSize: '25px',marginLeft:'20px',marginTop:'10px',fontFamily:'cursive'}}>marked with an on the edge by the publisher,bad habilts that people</h2>
  <h2 style={{ fontSize: '25px',marginLeft:'20px',marginTop:'10px',fontFamily:'cursive'}}> in the bussiness need to quit  build your own library thst fits style</h2>
  <h2 style={{ fontSize: '25px',marginLeft:'20px',marginTop:'10px',fontFamily:'cursive'}}> books that you can read long after  the date had written</h2>
  <h2 style={{ fontSize: '35px',marginLeft:'20px',marginTop:'8px',fontFamily:'cursive'}}> ''Build your own library that fits your style''.</h2>
 


      </Figure>
     
    </div>
    <div style={{ backgroundColor:'aliceblue', padding: '15px', marginTop: '-18em' }}>
      <Navbar_Comp/>
      <Figure style={{ textAlign: 'center' }}>
        <Figure.Image
          width={300}
          height={500}
          alt="300x500"
          src="https://assets.website-files.com/639ac8bd86e0b10079d8c011/63a53ba16709526d5c555a34_action-05.jpg"
          style={{ margin: '0 auto', marginLeft: '1300px' }}
        />
       
      </Figure>
     
    </div>
         
      </Figure>
  
    </div>
   
  );
}

export default FigureExample;

