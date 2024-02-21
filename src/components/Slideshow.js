import Card from 'react-bootstrap/Card';

function ImgOverlayExample() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src="https://mir-s3-cdn-cf.behance.net/projects/max_808/d08ad4183988309.Y3JvcCw0NjU2LDM2NDIsNDAzLDA.jpg" alt="Card image" />
      <Card.ImgOverlay>
        
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlayExample;