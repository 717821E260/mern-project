import React from 'react';
import Figure from 'react-bootstrap/Figure';
import styled, { keyframes } from 'styled-components';
import Navbar_Comp from './Navbar_Comp';

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
  font-size: 70px;
  margin: 0;
  padding: -60px;
  margin-right:-400px;

`;

const ParagraphText = styled.p`
  font-size: 20px;
  color: black;
  margin-top: 20px;
  text-align:center;
  margin-left: -50px; /* Adjust the margin-right value as needed */
`;
const BackgroundContainer = styled.div`
 /* Set your desired background color */
  padding: 15px;
  margin-top: 25em;
  position: relative;
`;

function FigureExample() {
  return (
    <div style={{  padding: '15px', marginTop: '1em', position: 'relative' }}>
        
    <BackgroundContainer>
      <Navbar_Comp />
      <TextContainer>
        {/* Display the text without animation */}
        <StraightText>Writers’ Convention 2022 </StraightText>
             <div style={{marginTop:'2em',marginRight:'-270px'}}>
                <h4>Jan 5, 2024 @ 8:00 am - Mar 17, 2025 @ 5:00 pm</h4>
             
                </div>
      </TextContainer>

      <Figure style={{ textAlign: 'center' }}>
        {/* Display the animated image */}
        <AnimatedFigureImage
          width={1700}
          height={500}
          alt="1700x500"
          src="https://writer.ancorathemes.com/wp-content/uploads/2022/01/post-image-10.jpg"
          style={{
            margin: '0 auto',
            marginLeft: '70px',
            border: '2px solid black',
            borderRadius: '8px',
          }}
        />
        <div style={{marginRight:'-80px',marginTop:'4em'}}>
        <ParagraphText>
     
      <h1 style={{marginLeft:'-600px'}}> A Discovery of Witches by Deborah Harkness
</h1>
<p style={{marginLeft:'-20px'}}>However, when she unknowingly recalls a magical book from Oxford’s Bodlein Library while doing research, she attracts the attention of a fantastical underworld</p>
<p style={{marginLeft:'-350px',marginTop:'-10px'}}>who are desperate to get their hands on the book. This is a great fantasy story about witches, vampires, and other creatures.</p>
<br></br>
<h1 style={{marginLeft:'-600px'}}> The Dictionary of Lost Words by Pip Williams</h1>
<p style={{marginLeft:'-60px'}}>Esme is a young girl who grows up in a world in which her father and a team of dedicated lexicographers are collecting words for the very first Oxford English</p>
<p style={{marginLeft:'-410px',marginTop:'-10px'}}>Dictionary. Fascinated, she begins to collect other words that have been discarded or neglected by the dictionary men.</p>
<br></br>
<h1 style={{marginLeft:'-700px'}}> Brideshead Revisited by Evelyn Waugh</h1>
<p style={{marginLeft:'-50px'}}>The story novel follows a regular man and his entanglements with the wealthy aristocratic family whose son the narrator met at Oxford. It offers a look into the</p>
<p style={{marginLeft:'-990px',marginTop:'-10px'}}>English aristocracy in the waning days of the empire.</p>
<br></br>
<div >
<h1 style={{marginRight:'1350px',marginTop:'2em'}}>Details</h1>
<br></br>
<h3 style={{marginRight:'1400px'}}>Start:</h3>
<p style={{marginRight:'1300px',fontFamily:'italic'}}>January 5 @ 8:00 am</p>
<br></br>

<h3 style={{marginRight:'1400px'}}>End:</h3>
<p style={{marginRight:'1250px',fontFamily:'italic'}}>Mar 17, 2025 @ 5:00 pm</p>
<br></br>


<h3 style={{marginRight:'1350px'}}>  Category:</h3>
<p style={{marginRight:'1350px',fontFamily:'italic'}}>Creation</p>
</div>
<div style={{marginTop:'5em'}}>
<h1 style={{marginTop:'-12em'}} >Organizer</h1>
<br></br>
<h3 style={{fontFamily:'italic'}} >Ashton Porter</h3>
<br></br>
<h3  style={{marginRight:'60px'}}>Phone:</h3>
<p style={{fontFamily:'italic'}}>9361285496</p>
<br></br>
<h3 style={{marginRight:'60px'}}>Email:</h3>
<p  style={{marginRight:'-66px',fontFamily:'italic'}}>asons2@gmail.com</p>
<div>
<h1 style={{marginLeft:'1100px',marginTop:'-9.5em'}}>Venue</h1>
<br></br>
<h3 style={{marginLeft:'1180px',fontFamily:'italic'}}>Manhattan Club</h3>
<br></br>
<p style={{marginLeft:'1090px',fontFamily:'italic'}}>350 5th Ave
</p>
<p style={{marginLeft:'1120px',fontFamily:'italic'}}>New York, NY<br/> 10118 United States</p>
<br></br>
<h3 style={{marginLeft:'1100px'}} >Phone:</h3>
<p  style={{marginLeft:'1150px',fontFamily:'italic'}}>90876689509</p>
</div>

</div>



      </ParagraphText>
      </div>
      </Figure>

      {/* Display the paragraph below the image */}
     
 
      </BackgroundContainer>
    </div>
  );
}

export default FigureExample;
