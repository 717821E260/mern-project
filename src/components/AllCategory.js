import React,  { useEffect, useRef,useState }from 'react';
import Figure from 'react-bootstrap/Figure';
import {Link, useNavigate} from 'react-router-dom';
import { Carousel, Container, Row, Col, Button, Nav } from 'react-bootstrap';

import Navbar_Comp from './Navbar_Comp';
import styled from 'styled-components';

  const ContainerStyle = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  padding: 80px;
`;

const FigureStyle = styled.div` 
  text-align: center;
  margin: 5px;
  width: 200px;
  height: 400px;




  img {
    width: 100%; 
    height: auto;
    transition: transform 0.3s ease;
 
    

    &:hover {
      transform: scale(1.1); 
    }
  }
  
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease-out forwards;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
 
  }
`;

const ReadButton = styled(Nav.Link)`
  &&& {
    margin-top: 10px;
    background-color: #343a40; 
  }
`;
  


  const cardData = [
    {
      id: 1,
      title: 'HARRY POTTER AND HALF-BOLD PRINCE',
      imageUrl: 'https://assets-global.website-files.com/64bdf2da73f4d7db826dcce3/64cdec3f9c11711e174190a4_hide-and-seek.jpg',
     
    },
    {
      id: 2,
      title: 'VENOM: LETHAL PROTECTOR',
      imageUrl: 'https://assets-global.website-files.com/64bdf2da73f4d7db826dcce3/64c77a8e569656c515141cdd_the-castle.jpg',
    },
    {
      id: 3,
      title: 'HARRY POTTER AND PHILOSOPHER STONE',
      imageUrl: 'https://assets-global.website-files.com/64bdf2da73f4d7db826dcce3/64c77a249621f0bed65c3cd4_forbidden-forest.jpg',
    },
    {
      id: 4,
      title: 'STRANGER THINGS: WORLDS TURNED UPSIDE DO',
      imageUrl: 'https://assets-global.website-files.com/64bdf2da73f4d7db826dcce3/64c872691c4d14b3fe5f4885_secret-of-the-dark-forest.jpg',
    },
    {
      id: 5,
      title: 'PIRATES OF  CARIBBEAN ON STRANGER TIDES',
      imageUrl: 'https://assets-global.website-files.com/64bdf2da73f4d7db826dcce3/64c4b388534786a275410497_sun-%26-moon-a-story.jpg',
    },    
  ];
  const cardData1 = [
    {
      id: 1,
      title: 'HARRY POTTER AND HALF-BOLD PRINCE',
      imageUrl: 'https://assets-global.website-files.com/64bdf2da73f4d7db826dcce3/64c4b32c67694090d9138e1b_breaking-by-kim-chun.jpg',
    },
    {
      id: 2,
      title: 'VENOM: LETHAL PROTECTOR',
      imageUrl: 'https://assets-global.website-files.com/64bdf2da73f4d7db826dcce3/64c4b2c9ba9c9471e8e8df47_mystery-at-cove-001.jpg',
    },
    {
      id: 3,
      title: 'HARRY POTTER AND PHILOSOPHER STONE',
      imageUrl: 'https://assets-global.website-files.com/64bdf2da73f4d7db826dcce3/64c49c4bba9c9471e8d9ba18_listen-to-silence.jpg',
    },
    {
      id: 4,
      title: 'STRANGER THINGS: WORLDS TURNED UPSIDE DO',
      imageUrl: 'https://assets-global.website-files.com/64bdf2da73f4d7db826dcce3/64c4b28e4f45d1dc649e85d1_light-to-success.jpg',
    },
    {
      id: 5,
      title: 'PIRATES OF  CARIBBEAN ON STRANGER TIDES',
      imageUrl: 'https://assets-global.website-files.com/64bdf2da73f4d7db826dcce3/64c8dd0abe927ed3e4c903b2_echoes-of-your-soul.jpg',
    },    
  ];
  

  const Card3 = () => {
    const navigate = useNavigate();
    const cardRefs = useRef(Array.from({ length: cardData.length }, () => React.createRef()));
    const [visibleCards, setVisibleCards] = useState(0);
    
  useEffect(() => {
    const interval = setInterval(() => {
      if (visibleCards < cardData.length) {
        setVisibleCards((prev) => prev + 1);
      }
    }, 200); 

    return () => clearInterval(interval);
  }, [visibleCards]);

  return (
    <ContainerStyle className="yourClassName">
      <Navbar_Comp/>
      <h1 className='h2-style' style={{ color: 'black',marginBottom:'50px' }}>FANTASY</h1>
      <Carousel>
        <Carousel.Item> 
          <Container>
            <Row>
            {cardData.slice(0, visibleCards).map((card, index)=> (
                <Col key={card.id} md={2} lg={2}>
                   <FigureStyle ref={cardRefs.current[index]}>
                  <Figure.Image
                    width={600}
                    height={800}
                    alt={`Image ${card.id}`}
                    src={card.imageUrl}
                  />
                  <Figure.Caption>
 <Nav>
                  <Nav.Link  className="btn btn-dark" as={Link} to="/read">

    READ
    </Nav.Link>
    </Nav>

</Figure.Caption>
</FigureStyle>
    


                </Col >
              ))}
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
      <h1 className='h2-style' style={{ color: 'black' }}>SCIENCE & FICTION</h1>
      <Carousel>
        <Carousel.Item>
          <Container>
            <Row>
            {cardData1.slice(0, visibleCards).map((card, index) => (
                <Col key={card.id} md={2} lg={2}>
                  <FigureStyle ref={cardRefs.current[index]}>
                  <Figure.Image
                    width={500}
                    height={700}
                    alt={`Image ${card.id}`}
                    src={card.imageUrl}
                  />
                  <Figure.Caption>
 
 
                  <Nav>
                  <Nav.Link  className="btn btn-dark" as={Link} to="/read"> 
    READ
    </Nav.Link>
    </Nav>
</Figure.Caption>
</FigureStyle>

                </Col >
              ))}
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>

      
    </ContainerStyle>
  );
}

export default Card3;























