

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./card.css"
import { useRef, useState } from 'react';


function Cardv() {

  const btnEr = useRef<HTMLButtonElement>(null)

  const [pool, setinner] = useState('')

  const isinner = () => {
    setinner("dhfe")

    if(btnEr.current){

      btnEr.current.style.backgroundColor = '#ff0000'
      btnEr.current.style.color = '#ffffff'
    }
  }
  console.log(pool)


  return (
    <>
      <Row className="g-4 mt-30" id="cardz">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <video controls src='https://cdn.busuu.com/media-resources/video/mp4/fb464cc9-8a5b-4548-9bac-a42fae718f42_small.mp4' />
              <Card.Body id='card_body'>
                <Card.Title>Hallo!</Card.Title>
                <Card.Text>
                  مرحبًا!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className='container mt-4'>
        <div className='row justify-content-evenly' >
          <button type="button" ref={btnEr} onClick={isinner} className="btn btn-outline-secondary btn-lg col-4">Large button</button>
          <button type="button" onClick={isinner} className="btn btn-outline-secondary text-dark btn-lg col-4">Large button</button>
        </div>
      </div>
    </>
  );
}

export default Cardv;