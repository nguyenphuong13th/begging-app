import React from 'react'
import{useState} from 'react'
import{Navbar,Container,Nav,Button} from 'react-bootstrap'
import{Link} from 'react-router-dom'
import ChatBoxComponent from './ChatBoxComponent'
function HomeComponent() {
  const[openChatBox,setOpenChatBox]= useState(false)
  const[buttonTextStatus,setButtonTextStatus]=useState(true)
  let textButton
  buttonTextStatus? textButton='Open' : textButton='Close'
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to='/'>Home</Link></Nav.Link>
              <Nav.Link><Link to='/contact'>Contact</Link></Nav.Link>
              <Nav.Link><Link to='/footer'>Footer</Link></Nav.Link>
            </Nav>
            <Button
            onClick={()=>{setOpenChatBox(!openChatBox);setButtonTextStatus(!buttonTextStatus)}}
            >{textButton} Chat</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {openChatBox && <ChatBoxComponent/>}
    </div>
  );
}

export default HomeComponent