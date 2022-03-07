import React from 'react'
import{Row,Col,Button,Card} from 'react-bootstrap'
import logo from '../assets/2048px-HP_logo_2012.svg.png'
import{Link,useParams} from 'react-router-dom'
function ContactComponent(props) {
  let {name} = useParams()
  return (
    <div className="contacts">
      <Link to='/'>Back</Link>
      <div className="contact-card">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <h6>{props.title}</h6>
              <h6 style={props.style}>{props.phone}</h6>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ContactComponent