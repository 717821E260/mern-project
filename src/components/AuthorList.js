import React from 'react';
import Figure from 'react-bootstrap/Figure';

function FigureExample() {
  return (
    <div style={{ backgroundColor: 'aliceblue', padding: '15px', marginTop: '-15em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Figure style={{ textAlign: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Figure.Image
            width={450}
            height={550}
            alt="450x550"
            src="https://assets.website-files.com/639c1bdc4d03cc1829cb360c/639d8526caead8c6ce951870_au-01-p-500.jpg"
            style={{ margin: '0', marginLeft: '-1000px' }} // Adjust marginLeft to move the image to the left
          />
          <div style={{ marginLeft: '50px', textAlign: 'left', fontSize: '40px' }}>

            <p style={{ marginTop: '-10em',textAlign: 'center',fontSize:'50px',marginRight:'-200px'}}>DENNIS BARRETT
            </p>
            <p style={{ marginTop: '-0em',textAlign: 'center',fontSize:'40px',marginRight:'-200px',fontFamily:'italic'}}>“My books are marked down

              </p>
              <p style={{ marginTop: '0em',textAlign: 'center',fontSize:'40px',marginRight:'-300px',fontFamily:'italic'}}>because most of them are marked
            
              </p>
              <p style={{ marginTop: '0em',textAlign: 'center',fontSize:'40px',marginRight:'-190px',fontFamily:'italic'}}>with an on the edge by the
            
            </p>
            <p style={{ marginTop: '0em',textAlign: 'center',fontSize:'40px',marginRight:'-1px',fontFamily:'italic'}}>publisher.”
            
            </p>
          </div>
        </div>
      </Figure>
    </div>
  );
}

export default FigureExample;

