import Carousel from 'react-bootstrap/Carousel';
import Navbar_Comp from './Navbar_Comp';
function DarkVariantExample() {
  return (
    <Carousel  style={{padding:'100px',backgroundColor:'aliceblue' }}>
      <Carousel.Item>
       
<Navbar_Comp/>
<h1 style={{
  fontSize: "60px",
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: "center",
  marginRight: '9em',
  
}}>A Page-Turner Enthralling</h1>
        <img
          className="d-block w-100"
          
          src="https://assets-global.website-files.com/64bdf2da73f4d7db826dcce3/64c1e56f8410f2f3dedcdb32_turning-a-new-leaf.jpg"
        
        />
        <br></br>
         <p style={{marginRight:"200px",fontSize:"40px",fontFamily:'sans-serif'}}>The Truth About Book Library Is About To. </p>
         <br></br>
         <p style={{marginRight:"200px",fontSize:"30px",fontFamily:'serif'}}>'The Truth About Book Library' - a sanctuary for knowledge seekers. Immerse yourself in a curated collection of enlightening literature that challenges perspectives, and the depths of human understanding. Our diverse array of thought-provoking books unveils the untold stories, unveils the mysteries, and offers fresh insights into history, science, philosophy, and more. </p>
        <br></br>
        <p style={{marginRight:"200px",fontSize:"30px",fontFamily:'serif'}}>Unearth the truth a journey of intellectual exploration with us. Discover the world's hidden truths through the pages of our books at 'The Truth About Book Library'. </p>
        <br></br>
        <p style={{marginRight:"200px",fontSize:"30px",fontFamily:'serif'}}>Welcome to our enchanting Book Shop, a haven for literary enthusiasts! Nestled amidst the aroma of fresh paper, our shelves house a diverse collection of novels, memoirs, and poetry. Immerse yourself in the world of words as you explore genres ranging from fantasy to historical fiction. Our passionate staff is always ready to recommend hidden spirited literary discussions.</p>
        <br></br>
        <p style={{marginRight:"200px",fontSize:"40px",fontFamily:'sans-serif'}}>Understand of Background Library </p>
        <br></br>
        <p style={{marginRight:"200px",fontSize:"30px",fontFamily:'serif'}}> Step into the realm of literature at our Book Shop, where every book is a gateway to new adventures. Our curated selection spans across classics, contemporary bestsellers, and thought-provoking non-fiction. Join us for author meet and greets, book clubs, and writing workshops.</p>
        <br></br>
        <p style={{marginRight:"200px",fontSize:"30px",fontFamily:'serif'}}>A journey through the written word.‍
Insights from a wordsmith's journey
Pen to paper perspectives A writer's chronicle
Between the lines A wordsmith's musings </p>
        <br></br>
        <p style={{marginRight:"200px",fontSize:"40px",fontFamily:'sans-serif'}}>Truth Of Book Library </p>
        <br></br>
        <p style={{marginRight:"200px",fontSize:"30px",fontFamily:'serif'}}>Delight in the rhythm of language and the power of storytelling in our haven for poetry and literature enthusiasts. From sonnets to epics, our library celebrates the beauty of words woven into art. Explore eras, and pivotal moments that shaped humanity, all within the walls of this knowledge sanctuary. This library offers your journey toward a more filling life.

</p>
      </Carousel.Item>
    </Carousel>
    
   
  );
}

export default DarkVariantExample;