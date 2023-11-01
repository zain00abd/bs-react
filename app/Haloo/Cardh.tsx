

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function Cardh() {
  return (
    <Row  className="g-4 mt-1" id="cardz">
      {Array.from({ length: 5 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <video controls src='https://cdn.busuu.com/media-resources/video/mp4/fb464cc9-8a5b-4548-9bac-a42fae718f42_small.mp4'/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Cardh;