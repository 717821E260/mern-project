import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import styled, { keyframes } from 'styled-components';
import Navbar_Comp from './Navbar_Comp';
import Footer from './Footer';
const formFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from { 
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;


const AnimatedForm = styled(animated.form)`
  animation: ${formFadeIn} 1s ease-in-out; 
  padding: 20px;
  background-color: aliceblue;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 50px;
  text-align: center;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  background-color: #00838d;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #006368;
  }
`;
const BigInputField = styled(InputField)`
width: 100%;
padding: 60px; 
 
  vertical-align: top; /* Align text to the top */
  box-sizing: border-box;
`;
const CreativeForm = styled(animated.form)`
  animation: ${formFadeIn} 1s ease-in-out;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 50px;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 40px;
  color: #00838d;
  margin-bottom: 20px;
`;

const CreativeSubmitButton = styled(SubmitButton)`
  background-color: #00838d;
  color: #fff;
  padding: 15px 30px;
  font-size: 18px;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.1s ease;

  &:hover {
    background-color: #006368;
  }
`;

const ContactForm = () => {
  const formSpring = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: config.wobbly, 
  });


  return (
   
    <div style={{ marginTop: '150px', textAlign: 'center', fontSize: '19px' }}>
      <h2 style={{ fontSize: '70px', fontFamily: 'italic' }}>We’ve been waiting for you.</h2>
      <h2 style={{ fontSize: '70px', fontFamily: 'italic' }}> for you.</h2>
      <CreativeForm style={formSpring}>
        <ContactTitle>Contact Us</ContactTitle>
        <InputField type="text" id="name" name="name" placeholder="Name" />
        <InputField type="email" id="email" name="email" placeholder="Email" />
        <InputField type="text" id="Subject" name="Subject" placeholder="Subject" />
        <BigInputField id="text" name="text"  rows="4" />
        <CreativeSubmitButton type="submit">Send Message</CreativeSubmitButton>
      </CreativeForm>
    </div>
  );
};


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AnimatedTitle = styled(animated.div)`
  animation: ${fadeIn} 1s; 
`;

const AnimatedCard = styled(animated.div)`
  animation: ${fadeIn} 1s; 
`;

const Card = ({ cardStyles, hoverStyles, children }) => {
  const [style, set] = useSpring(() => ({ ...cardStyles }));

  return (
    

   
 

    <AnimatedCard
      style={style}
      onMouseEnter={() => set({ ...hoverStyles })}
      onMouseLeave={() => set({ ...cardStyles })}
    >
      {children}
    </AnimatedCard>
    
  );
};

const Cards = () => {
  const cardStyles = {
    position: 'relative',
    width: '400px',
    height: '300px',
    backgroundColor: '#f2f8f9',
    borderRadius: '4px',
    margin: '12px',
    textDecoration: 'none',
    zIndex: '0',
    overflow: 'hidden',
    backgroundColor: 'white',
  };


  const hoverStyles = {
    backgroundColor: '#00838d',
   
    top: '-4px',
    border: '1px solid #ccc',
  };

  const titleStyles = {
    textAlign: 'center',
    fontSize: '30px',
    fontFamily: 'italic',
    marginBottom: '200px',
    backgroundColor:'aliceblue',

  };
  const containerStyles = {
    backgroundColor: 'aliceblue',
    minHeight: '150vh',
    margin: '-100px',
    padding: '20px',
  };

  const titleSpring = useSpring({ opacity: 1, from: { opacity: 0 } });
  const cardSpring = useSpring({ opacity: 1, from: { opacity: 0 } });

 
const BackgroundImage = styled.div`

background-size: cover;
background-position: right;
height: 400px;
width: 100%;
position: relative;
`;

const ImageOverlay = styled.div`
background-color: white;

height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
animation: ${fadeIn} 2s ease-in-out;
`;

const ImageContent = styled.img`

width: 500px;

height: auto;
margin-bottom:-429px; 
margin-right: 100px;
animation: ${fadeIn} 2s ease-in-out;
`;

  return (
    <>
    
     <Navbar_Comp/>
     <BackgroundImage >
     <ImageOverlay>
          <ImageContent
            src="https://assets-global.website-files.com/64b8bca09e0474df27fcc6a9/64c23142c3eccac8b676c375_Home-two-banner.png" // Replace with the actual path to your image
            alt="Your Image Alt Text"
          />
          <div>
          <p style={{marginLeft:'-1300px',fontSize:'90px',fontFamily:'italic'}}>Peak 30 Books</p>
         
          <p style={{marginLeft:'-1300px',fontSize:'90px', fontFamily:'italic',marginBottom:'-450px'}}>To Make It A<br/>Great Year</p>
          
          </div>
        </ImageOverlay>
        </BackgroundImage >
      <AnimatedTitle style={{ ...titleStyles, ...titleSpring     }}>
        <h1 style={{ fontSize: '70px',height:"30vh",marginTop:"350px" }}>Come and visit our offices <br/>around the world </h1>
        {/* <h1 style={{ fontSize: '70px', marginTop: '-200px'}}>around the world</h1> */}
      </AnimatedTitle>
      <div className="d-flex flex-column align-items-center" style={{ ...containerStyles, backgroundColor: 'aliceblue' ,marginTop:"-200px"}}>
        <div className="d-flex justify-content-center align-items-center">
          <Card cardStyles={{ ...cardStyles, marginRight: '100px' }} hoverStyles={hoverStyles}>
            <h1>Rock Hill Village</h1>
            <p style={{ fontSize: '25px', fontFamily: 'cursive' }}>New Graystone Lakes, Milledgevi G2 Rock hill village</p>
            <p style={{ fontSize: '25px', fontFamily: 'cursive' }}>infi@bokifysitemail.com</p>
            <p style={{ fontSize: '25px', fontFamily: 'cursive' }}>9087678906</p>
          </Card>

          <Card cardStyles={{ ...cardStyles, marginRight: '100px' }} hoverStyles={hoverStyles}>
            <h1>Grithkly Central.</h1>
            <p style={{ fontSize: '25px', fontFamily: 'cursive' }}>G-2 Timberlake Rd, Lynchburg 99/25 Grithkly central.</p>
            <p style={{ fontSize: '25px', fontFamily: 'cursive' }}>infi@bokifysitemail.com.</p>
            <p style={{ fontSize: '25px', fontFamily: 'cursive' }}>8907645678</p>
          </Card>

          <Card cardStyles={cardStyles} hoverStyles={hoverStyles}>
            <h1>Rock Hill Village</h1>
            <p style={{ fontSize: '25px', fontFamily: 'cursive' }}>4965 Graystone Lakes, Milledgevi 22, Retsluv Town</p>
            <p style={{ fontSize: '25px', fontFamily: 'cursive' }}>infi@bokifysitemail.com.</p>
            <p style={{ fontSize: '25px', fontFamily: 'cursive' }}>7658907656</p>
          </Card>
        </div>
        <ContactForm />
     
      </div>
     
    </>
  );
};

export default Cards;
