import React from 'react'
import {useState} from 'react'
import{Row,Col,Button,Card,Modal,Form} from 'react-bootstrap'
import logo from '../assets/2048px-HP_logo_2012.svg.png'
import{Link} from 'react-router-dom'
import {useDispatch} from'react-redux'
import '../App.css'
function ContactComponent(props) {
  const dispatch=useDispatch();
  const [smShow, setSmShow] = useState(false);
  const [name,setName]=useState();
  const[email,setEmail]=useState();
  const[phone,setPhone]=useState();
  const newStaff={
    name:name,
    email:email,
    phone:phone
  }

  function HandleSubmitAddStaff (e){
    e.preventDefault();
    dispatch(props.postUser(newStaff));
    setSmShow(!smShow)
  }
  const staffinfoCard=props.staffinforesult.map((staffinfo,index)=>{
    return (
      //Put div out side all elements to do CSS.
      <div key={index} className='col-sm-12 col-md-6 col-lg-4 mt-5'>
        <Link to ={`/contact/${staffinfo.id}`}>
            <Card style={{ width: "18rem" }}>
              {staffinfo.website === "hildegard.org" && <h1>Needed</h1>}
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title>{staffinfo.name}</Card.Title>
                <Card.Text>
                  <h6>{staffinfo.email}</h6>
                  <h6>
                    {staffinfo.phone}
                  </h6>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
        </Link>
      </div>
    );

  }
  )
  return (
    <div className="container">
      <div className="row">
        <div>
          <Link to="/">Back</Link>
          <div className="contact-card">
            <div>
              <button onClick={() => setSmShow(!smShow)}>ADD Staffs</button>
              <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-sm">
                    Thêm Nhân viên
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextPassword"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    >
                      <Form.Label column sm="2">
                        name
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control type="text" />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextPassword"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    >
                      <Form.Label column sm="2">
                        Email
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control type="text" />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextPassword"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    >
                      <Form.Label column sm="2">
                        Phone
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control type="text" />
                      </Col>
                    </Form.Group>
                    <Button
                      type="submit"
                      variant="primary"
                      onClick={HandleSubmitAddStaff}
                    >
                      AddStaff
                    </Button>
                  </Form>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
          {staffinfoCard}
      </div>
    </div>
  );
}

export default ContactComponent