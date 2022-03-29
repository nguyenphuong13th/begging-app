import React from 'react'
import { useState } from 'react';
import{InputGroup,FormControl,Button} from 'react-bootstrap'
function ChatBoxComponent() {
    const[message,setMessage]=useState('')
    const[chatInFo,setChatInFo]=useState([])
    const handleonSubmit = (e)=>{
        setChatInFo(Prev=>[...Prev,message])
        setMessage('');
    }
  return (
    <div>
      <h1>Chat Box</h1>
      <ul>
        {chatInFo.map((chat, index) => {
          return (
            <div key={index}>
              <li>{chat}</li>
            </div>
          );
        })}
      </ul>
      <InputGroup size="sm" className="mb-3">
        <FormControl
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button onClick={handleonSubmit}>Send</Button>
      </InputGroup>
    </div>
  );
}

export default ChatBoxComponent