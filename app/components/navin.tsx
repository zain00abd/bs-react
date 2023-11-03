import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProgressBar } from 'react-bootstrap';

function navin() {
    return (
        <Navbar className="bg-body-tertiary justify-content-between">

            <Navbar.Brand href="/">
                <img
                    alt=""
                    src="photo/xz1.png"
                    width="7%"
                    height="7%"
                    className="d-inline-block"
                />{' OY Goethe '}
            </Navbar.Brand>

                <ProgressBar variant="success" animated now={68} />
            
        </Navbar>
    );
}



export default navin;