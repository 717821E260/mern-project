import React from 'react';
import Figure from 'react-bootstrap/Figure';
import styled, { keyframes } from 'styled-components';
import Navbar_Comp from './Navbar_Comp';
import Blog1 from './Blog1';
import Footer from './Footer';
// Create a styled component without animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px) ;
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

const TextContainer = styled.div`
  position: absolute;
  top: -7%;
  right: 700px;
  transform: translateY(-50%);
  text-align: right;
  color: #333;
`;

const StraightText = styled.h1`
  font-size: 45px;
  margin: 0;
  padding: 0;
  margin-bottom: 4em;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const ParagraphText = styled.p`
  font-size: 20px;
  color: black;
  margin-top: 20px;
  text-align:center;
  margin-left: -10px; /* Adjust the margin-right value as needed */
`;
const BackgroundContainer = styled.div`
  background-color:aliceblue; /* Set your desired background color */
  padding: 15px;
  margin-top: 25em;
  position: relative;
`;

function FigureExample() {
  return (
    <div style={{ backgroundColor: 'aliceblue', padding: '15px', marginTop: '1em', position: 'relative' }}>
        
    <BackgroundContainer>
      <Navbar_Comp />
      <TextContainer>
        {/* Display the text without animation */}
       
        <StraightText > Spellbinding Books Set In  Oxford </StraightText>
      
      
      </TextContainer>

      <Figure style={{ textAlign: 'center' }}>
        {/* Display the animated image */}
        <AnimatedFigureImage
          width={1700}
          height={500}
          alt="1700x500"
          src="https://assets-global.website-files.com/63919e4e6a1cda1c3e5cb583/639734de99ba0d1df64571be_Blog%201%20(2).jpg"
          style={{
            margin: '0 auto',
            marginLeft: '3px',
            border: '2px solid black',
            borderRadius: '8px',
            marginTop: '-10em',
      
          }}
        />
      </Figure>

      {/* Display the paragraph below the image */}
      <ParagraphText>
      Are you looking for books set in Oxford? These are some of the best books set at Oxford University or in the town of Oxford, England. Oxford is a historic .
      <br></br>
      <p style={{marginLeft:"-20px",textAlign:"center",marginBottom:"20px"}}>Oxford is one of the oldest universities in the world, founded in 1096. It’s where the Oxford English Dictionary originated. It’s the alma mater of famous writers </p>
      <p style={{marginLeft:"-160px",textAlign:"center",marginTop:"-20px"}}> Lewis Carroll, and many more. It’s one of the most prestigious universities in the world, known for arts and humanities  and literary tradition. </p>
      <br></br>
      <h1 style={{marginLeft:'100px'}}> A Discovery of Witches by Deborah Harkness
</h1>
<p>However, when she unknowingly recalls a magical book from Oxford’s Bodlein Library while doing research, she attracts the attention of a fantastical world </p>
<p style={{marginLeft:'-240px',marginTop:'-10px'}}>who are desperate to get their hands on the book. This is a great fantasy story about witches, vampires, and other creatures.</p>
<br></br>
<h1 style={{marginLeft:'100px'}}> The Dictionary of Lost Words by Pip Williams</h1>
<p>Esme is a young girl who grows up in a world in which her father and a team of dedicated lexicographers are collecting words for the very first Oxford English</p>
<p style={{marginLeft:'-350px',marginTop:'-10px'}}>Dictionary. Fascinated, she begins to collect other words that have been discarded or neglected by the dictionary men.</p>
<br></br>
<h1 style={{marginLeft:'100'}}> Brideshead Revisited by Evelyn Waugh</h1>
<p>The story novel follows a regular man and his entanglements with the wealthy aristocratic family whose son the narrator met at Oxford. It offers a look into </p>
<p style={{marginLeft:'-900px',marginTop:'-10px'}}>English aristocracy in the waning days of the empire.</p>
<br></br>
<h1 style={{marginRight:'-30px',fontSize:"60px"}}>Blogs</h1>


      </ParagraphText>
      <Blog1/>
      </BackgroundContainer>
 
    </div>
  );
}

export default FigureExample;
