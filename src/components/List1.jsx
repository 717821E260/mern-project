import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

function FigureExample() {
  return (
    <div style={{ backgroundColor: 'aliceblue', padding: '500px', marginTop: '-28em' }}>
      <Figure style={{ textAlign: 'center' }}>
        <Figure.Image
          width={450}
          height={550}
          alt="450x550"
          src="https://assets.website-files.com/6433d05711af0d8575b9111d/648b1bb518ab9baa56703272_DX%2023-p-500.jpg"
          style={{ margin: '0 auto', marginLeft: '800px' }}
        />
        <Figure.Caption style={{ textAlign: 'center', justifyContent:"center",alignItems:"center",position:"absolute",right: '0', marginTop: '-50em', color: 'black'}}>
          <h1 style={{textAlign:"center",textAlign: 'center', justifyContent:"center",alignItems:"center",marginRight
        :"1000px",fontSize:"80px"}}>Mangos are not Comic</h1>
          <h1 style={{marginRight:"1050px",fontSize:"75px"}}>books,here how to tell</h1>
          <h1 style={{marginRight:"1300px",fontSize:"75px"}}>the difference.</h1>
          <br></br>
          <p style={{marginRight:"700px",fontSize:"40px"}}>A good book is a good friend solid and reliable companion, </p>
          <p style={{marginRight:"730px",fontSize:"40px"}}>waiting there on the shelf to provide intellectual company</p>
          <p style={{marginRight:"750px",fontSize:"40px"}}>at any time, just when it’s needed for Guest, company of</p>
          <p style={{marginRight:"1260px",fontSize:"40px"}}>‘fellowship of books is real’.</p>
        </Figure.Caption>
      </Figure>
     
    </div>
  );
}

export default FigureExample;

