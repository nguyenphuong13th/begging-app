import React from 'react'
import {useState} from 'react';
import{Row,Col,Button,Card,Modal,Form} from 'react-bootstrap'
import {Link, useParams} from 'react-router-dom'
import {useDispatch} from'react-redux'
function ContactDetailed(props) {
  const {id}=useParams();
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const [nameUpdate,setNameUpdate]=useState();
  const[street,setStreet]=useState();
  const[zipcode,setZipcode]=useState();
  const dispatch=useDispatch();
  const StaffUpdate = {
    id:id,
    name:nameUpdate,
    street:street,
    zipcode:zipcode
  }
  function handleSubmitUpdateStaff (e) {
    e.preventDefault();
    dispatch(props.pathUser(StaffUpdate,id));
    setShowModal(!showModal)
  }
    const ClickedContactDetail =  props.staffinforesult && props.staffinforesult
      .filter((ClickedContactDetail) => {
        return (ClickedContactDetail.id === Number(id));
      })
      .map((ClickedContactDetail,index) => {
        return (
          <div key={index}>
            <Col className="mt-3">
              <Card style={{ width: "18rem" }}>
                <>
                  <Button variant="primary" onClick={handleShowModal}>
                    Launch demo modal
                  </Button>
                  <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form onSubmit={handleSubmitUpdateStaff}>
                        <Form.Group
                          as={Row}
                          className="mb-3"
                          controlId="formPlaintextPassword"
                          onSubmit={handleSubmitUpdateStaff}
                        >
                          <Form.Label column sm="2">
                            ID
                          </Form.Label>
                          <Col sm="10">
                            <Form.Control type="text" Value={id} disabled />
                          </Col>
                        </Form.Group>
                        <Form.Group
                          as={Row}
                          className="mb-3"
                          controlId="formPlaintextPassword"
                        >
                          <Form.Label column sm="2">
                            Name
                          </Form.Label>
                          <Col sm="10">
                            <Form.Control
                              type="text"
                              defaultValue={ClickedContactDetail.name}
                              onChange={(e) => setNameUpdate(e.target.value)}
                            />
                          </Col>
                        </Form.Group>
                        <Form.Group
                          as={Row}
                          className="mb-3"
                          controlId="formPlaintextPassword"
                        >
                          <Form.Label column sm="2">
                            street address
                          </Form.Label>
                          <Col sm="10">
                            <Form.Control
                              type="text"
                              defaultValue={ClickedContactDetail.address.street}
                              onChange={(e) => setStreet(e.target.value)}
                            />
                          </Col>
                        </Form.Group>
                        <Form.Group
                          as={Row}
                          className="mb-3"
                          controlId="formPlaintextPassword"
                        >
                          <Form.Label column sm="2">
                            zipcode
                          </Form.Label>
                          <Col sm="10">
                            <Form.Control
                              type="text"
                              defaultValue={
                                ClickedContactDetail.address.zipcode
                              }
                              onChange={(e) => setZipcode(e.target.value)}
                            />
                          </Col>
                        </Form.Group>
                        <Button type="submit" variant="primary">
                          UPDATE
                        </Button>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </>
                <Card.Img variant="top" src="../image/hp-logo.png" />
                <Card.Body>
                  <Card.Title>{ClickedContactDetail.name}</Card.Title>
                  <Card.Text>
                    <p>{ClickedContactDetail.address.street}</p>
                    <p>{ClickedContactDetail.address.zipcode}</p>
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </div>
        );
      });
  return (
    <div>
      {<Link to="/">Home</Link>}
      {ClickedContactDetail}
    </div>
  )
}
export default ContactDetailed