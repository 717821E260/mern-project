// Import necessary dependencies
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled components for styling
const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1px;
  background-color: aliceblue;
`;

const Card = styled.div`
  position: relative;
  width: 900px;
  height: 500px;
  border: 1px solid white;
  box-shadow: 0 4px 8px grey;
  transition: box-shadow 0.1s ease, opacity 0.1s ease; /* Add opacity transition */
  margin: 15px;

  &:hover {
    box-shadow: 0 8px 16px grey;
    opacity: 0.9; /* Reduce opacity on hover */
  }
`;

const BlogContainer = styled.div`
  text-align: center;
  margin-bottom: 10;
`;

const DateBox = styled.div`
  position: absolute;
  top: -280px; 
  left: 10px; 
  background-color: white;
  padding: 8px;
  border-radius: 5px;
  font-size:20px;
  margin-bottom: 8px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 6;
  left: 0;
  right: 0;
  background-color: white;
  padding: 10px;
  text-align: center;
`;

const CardTitle = styled.h2`
  font-size: 25px;
  margin-bottom: 5px;

`;

const CardText = styled.p`
  font-size: 20px; 
  color: black;
  margin-bottom: -30px;
`;

const ReadButton = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: white;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 40px;
`;

const blogPosts = [
  {
    id: 1,
    date: 'Jan 10, 2022',
    content: 'Enchanting The Imagination ',
    paragraph: 'Explore the enchanting world of boundless stories and tales that will transport you to magical realms.',
    imageUrl: 'https://assets-global.website-files.com/64bdf2da73f4d7db826dcce3/64bdfe177fe70c7963fe2085_literary-wonderland.jpg',
  },
  {
    id: 2,
    date: 'Jan 15, 2022',
    content: 'A Page-Turner Enthralling ',
    paragraph: 'Immerse yourself in a page-turner that captivates and enthralls, turning each leaf into a new adventure.',
    imageUrl: 'https://assets-global.website-files.com/64bdf2da73f4d7db826dcce3/64c1e59c0b43fb0bc6ebee71_turning-a-new-leaf.jpg',
  },
  {
    id: 3,
    date: 'Jan 20, 2022',
    content: 'Words Unleashed the Power ',
    paragraph: 'Witness the power of words as they unleash creativity, inspiration, and emotions in boundless stories.',
    imageUrl: 'https://assets-global.website-files.com/64bdf2da73f4d7db826dcce3/64bf4438edf653a8804e3707_boundless-stories.jpg',
  },
  {
    id: 4,
    date: 'Jan 25, 2022',
    content: 'Expanding Novel  Together',
    paragraph: 'Embark on a journey of expanding novels that bring people together, fostering a love for storytelling.',
    imageUrl: 'https://assets-global.website-files.com/64bdf2da73f4d7db826dcce3/64bf44b875a6c9c3706cc385_a-page-turners-haven.jpg',
  },
];

const BlogPost = () => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <BlogContainer>
  
       
      </BlogContainer>
      <CardContainer style={{ backgroundColor: 'white' }}>
        {blogPosts.map((post) => (
          <Card key={post.id}>
            <CardImage src={post.imageUrl} alt={`Post ${post.id}`} />
            <CardContent style={{ backgroundColor: 'white' }}>
              <DateBox>{post.date}</DateBox>
              <CardTitle>{post.content}</CardTitle>
        
              {post.id === 1 && (
                <Link to="/readable">
                  <ReadButton className="readmore">Read more</ReadButton>
                </Link>
              )}
              {post.id === 2 && (
                <Link to="/post">
                  <ReadButton className="readmore">Read more</ReadButton>
                </Link>
              )}
              {post.id === 3 && (
                <Link to="/article">
                  <ReadButton className="readmore">Read more</ReadButton>
                </Link>
              )}
              {post.id === 4 && (
                <Link to="/story">
                  <ReadButton className="readmore">Read more</ReadButton>
                </Link>
              )}
            </CardContent>
          </Card>
        ))}
      </CardContainer>
    </div>
  );
};

export default BlogPost;
