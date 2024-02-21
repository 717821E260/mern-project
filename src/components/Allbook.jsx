import React from 'react';
import Figure from 'react-bootstrap/Figure';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';

import {Link} from 'react-router-dom';
function Allbook() {
 
  const containerStyle = {
    //backgroundImage: `url('https://img.freepik.com/free-photo/nice-guidebook-notebook-map_23-2147767294.jpg?size=626&ext=jpg&ga=GA1.1.1194671720.1702461940&semt=ais')`,
    
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    color: 'black',
    padding: '20px',
  };

  const figureStyle = {
    border: '2px solid black',
    textAlign: 'center',
    margin: '20px',
  };

  const cardData = [
    {
      id: 1,
      title: 'THE LOARD OF THE RINGS(THE KING)',
      imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41JJA2QUbGL._SY445_SX342_.jpg',
    },
    {
      id: 2,
      title: 'HARRY POTTER AND HALF-BLOOD PRINCE',
      imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81YvqjX4AdL._AC_UY327_FMwebp_QL65_.jpg',
    },
    {
      id: 3,
      title: 'THE MERRY ADVENTURES OF ROBIN HOOD',
      imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81bVuDncEjL._SY466_.jpg',
    },
    {
      id: 4,
      title: 'THE VAMPIRE DIARIES: THE FURY AND DARK ',
      imageUrl: 'data:image/jpeg;base64,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',
    },
    {
      id: 5,
      title: 'HARRY POTTER AND PHILOSOPHER STONE',
      imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRkWXbfQrO5oTm1I5izjeRTbQD-vKPnybT24S2kFw2eH8LyyCo5',
    },
    
  ];

  return (
    <div className="yourClassName" style={containerStyle}>
      <h1 className='h2-style'style={{ color: 'black',  }}>FAMOUS BOOKS TO READ</h1>
      <Carousel>
        <Carousel.Item>
          <Container>
            <Row>
              {cardData.map((card) => (
                <Col key={card.id} md={2} lg={2} style={figureStyle}>
                  <Figure.Image
                    width={171}
                    height={180}
                    alt={`Image ${card.id}`}
                    src={card.imageUrl}
                  />
    
<Figure.Caption>
  <h2 className='h2-style' style={{ color: 'black' }}>{card.title}</h2>
  <Button variant="dark" href={`#${card.title}`}>
    READ
  </Button>
</Figure.Caption>
                </Col >
              ))}
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
     
    </div>
  );
}

export default Allbook; 
