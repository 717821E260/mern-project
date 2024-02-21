import React, { useState } from 'react';

const ImageWithText = () => {
  const [showText, setShowText] = useState(false);

  const handleMouseMove = (event) => {
    const image = event.target;
    const imageRect = image.getBoundingClientRect();

    const mouseX = event.clientX - imageRect.left;
    const mouseY = event.clientY - imageRect.top;

    // Calculate the center of the image
    const centerX = imageRect.width / 2;
    const centerY = imageRect.height / 2;

    // Define a radius for the area where text should appear
    const radius = 50;

    // Check if the cursor is in the center area
    const isCursorInCenter = Math.sqrt((mouseX - centerX) ** 2 + (mouseY - centerY) ** 2) < radius;

    // Update the state based on cursor position
    setShowText(isCursorInCenter);
  };

  const handleMouseLeave = () => {
    // Reset state when the cursor leaves the image
    setShowText(false);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div>
          <h1 style={{ marginTop: '-4em', fontSize: '60px'}}>Most Interesting</h1>
        </div>

        <img
          src="https://writer.ancorathemes.com/wp-content/uploads/2021/12/post-56.jpg"
          alt="Your Image"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: 'pointer', width: '500px', padding: '35px',marginLeft:'-1100px',marginTop:'15em' }}
        />
        <img
          src="https://writer.ancorathemes.com/wp-content/uploads/2020/04/post-33-984x1024.jpg"
          alt="Your Image"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: 'pointer', width: '500px', padding: '37px',marginLeft:'-600px',marginTop:'15em' }}
        />
        <img
          src="https://writer.ancorathemes.com/wp-content/uploads/2020/04/post-43-1290x725.jpg"
          alt="Your Image"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: 'pointer', width: '550px', padding: '35px',height:'510px' ,marginLeft:'-600px',marginTop:'15em'}}
        />
      </div>
      {showText && <p style={{fontFamily:'bold',fontSize:'25px',color:'black',textAlign:'center'}}>However, when she unknowingly recalls a magical book from Oxford’s Bodlein Library while doing research, she attracts the attention of a fantastical underworld
      who are desperate to get their hands on the book. This is a great fantasy story about witches, vampires, and other creatures,Esme is a young girl who grows up in a world in which her father and a team of dedicated lexicographers are collecting words for the very first Oxford English
      The story novel follows a regular man and his entanglements with the wealthy aristocratic family whose son the narrator met at Oxford.</p>}
    </div>
  );
};

export default ImageWithText;
