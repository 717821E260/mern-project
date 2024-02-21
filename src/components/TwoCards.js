import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 40px;
  margin-top: 26em;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 600px;
  border: 2px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
`;

const Heading = styled.h2`
  margin-bottom: 32px;
  color:black;
  margin-left:-300px;
`;

const ReadButton = styled.button`
  background-color: black;
  color: white;
  padding: 10px 30px;
  border: black;
  border-radius: 3px;
  cursor: pointer;
  margin-left:-300px;
`;

const TwoCards = () => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src="https://assets-global.website-files.com/64b8bca09e0474df27fcc6a9/64c488fc4f45d1dc6483eccb_banner-1.jpg"
          alt="Card Image"
        />
        <Content>
          <Heading>Get 25% off <br />For All New Books</Heading>
          <Link to='/all categories'>
            <ReadButton className="all categories">Shop Now</ReadButton>
          </Link>
        </Content>
      </ImageContainer>

      <ImageContainer>
        <Image
          src="https://assets-global.website-files.com/64b8bca09e0474df27fcc6a9/64c488fc8b8dda8ee1d6f6eb_banner-2.jpg"
          alt="Card Image"
        />
        <Content>
          <Heading>Find Books for<br />All Ages</Heading>
          <Link to='/all categories'>
            <ReadButton className="all categories">Shop Now</ReadButton>
          </Link>
        </Content>
      </ImageContainer>
    </Container>
  );
};

export default TwoCards;

