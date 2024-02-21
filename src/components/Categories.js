// Import necessary dependencies
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
// Styled components for styling
const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px;



`;

const Card = styled.div`
position: relative;
  width: 190px; 
  height: 300px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px grey;
  transition: box-shadow 0.1s ease;
margin: 10px;
backgroundcolor:white;


  &:hover {
    box-shadow: 0 8px 16px grey;
  }
`;
const BlogContainer = styled.div`
  text-align: center;
  margin-bottom: 20;
`;
const BlogHeading = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;



const CardContent = styled.div`
position: absolute;
bottom: 6;
left: 0;
right: 0;
background-color: white; 
padding: 30px;
text-align: center;

`;

const CardTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 5px;
`;

const CardText = styled.p`
  font-size: 23px;
  color:black;
  font-style:bold;
  margin-left:35px;
  margin-top:20px;
`;
const ReadButton = styled.button`
  background-color: black;
  color: white;
  padding: 10px 30px;
 
  border: black;
  border-radius: 10px;
  cursor: pointer;

`;


const CardImage = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
  transition: transform 0.3s ease; /* Add transition for smooth animation */

  &:hover {
    transform: translateY(8px); /* Move the image downward by 5 pixels on hover */
  }
`;




const blogPosts = [
  {
    id: 1,
   
    content: 'Poetry&Prose ',
    imageUrl: 'https://assets-global.website-files.com/64bdf2da73f4d7db826dcce3/64c4ed2342e4ed51cf792465_poetry-%26-prose.png', // Replace with your actual image URL
  },
  {
    id: 2,
 
    content: 'Art & Design',
    imageUrl: 'https://assets-global.website-files.com/64bdf2da73f4d7db826dcce3/64c4ed468c52bbd10a19a99a_art-%26-design.png', // Replace with your actual image URL
  },
  {
    id: 3,
   
    content: 'Love Stories',
    imageUrl: 'https://assets-global.website-files.com/64bdf2da73f4d7db826dcce3/64c4e31608b3ce0dfacd6587_love-stories.png', // Replace with your actual image URL
  },
  {
    id: 3,
   
    content: ' Literature',
    imageUrl: 'https://assets-global.website-files.com/64bdf2da73f4d7db826dcce3/64c4ed2fbeeb8f2c50406ff8_old-literature.png', // Replace with your actual image URL
  },
  {
    id: 3,
   
    content: 'Young Adult',
    imageUrl: 'https://assets-global.website-files.com/64bdf2da73f4d7db826dcce3/64c4e25c4fbe08b47f8edb0d_young-adult.png', // Replace with your actual image URL
  },
  {
    id: 3,
   
    content: 'Fantasy',
    imageUrl: 'https://assets-global.website-files.com/64bdf2da73f4d7db826dcce3/64c4e3751699c1e1a3b125ae_fantasy.png', // Replace with your actual image URL
  },

];


const BlogPost = () => {
    return (
      <div>
        <BlogContainer>
        <BlogHeading style={{fontSize:"50px",color:'black',marginTop: '2em',textAlign:'left'}}>Categories</BlogHeading>
        <Link to='/all categories'>
        <ReadButton style={{display:"center",justifyContent:"flex-end",marginLeft:"1200px"}} className="all categories" >All Categories
        </ReadButton>
        </Link>
        </BlogContainer>
      
        <CardContainer>
          {blogPosts.map((post) => (
            <Card key={post.id}>
              <CardImage src={post.imageUrl} alt={`Post ${post.id}`} />
              <CardText>{post.content}</CardText>
              
            </Card>
         
          ))}
        </CardContainer>
      </div>
    );
  };
  
  export default BlogPost;
