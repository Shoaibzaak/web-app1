import React,{useState} from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
const Forms = () => {
    const [user, setuser] = useState('')
    const {comment,email,name}=user
    const onvaluechange=(e)=>{
        setuser({...user,[e.target.name]:e.target.value})
        
    }
   

    const adduser = async () => {
        try {
             await axios.get(
                `/Adduser`,user
                 
                )
                
            } catch (err) {
            console.log(err);
        }
    };

  return (
    <>
    <Container>

    <Form  onSubmit={adduser}  
      style={{fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
  
 lineHeight:2.2}}>
    <h3 >Leave a Reply</h3>
    <Form.Text >
    Your email address will not be published. Required fields are marked *
    </Form.Text>
    <Form.Group htmlSize='30px' className="mb-3" controlId="formBasicEmail">
    <Form.Label>Comment</Form.Label>
      <Form.Control style={{width:'50%'}} as="textarea" name='comment' onChange={(e)=>onvaluechange(e)} value={comment} rows={3}  >
                             
          </Form.Control>
          
    </Form.Group>
    <Form.Group className="mb-3"  controlId="formBasicPassword">
      <Form.Label>Name</Form.Label>
      <Form.Control style={{width:'50%'}} type="text" name ='name' onChange={(e)=>onvaluechange(e)} value={name}  placeholder="Enter your name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control style={{width:'50%'}} type="email" name ='email'  onChange={(e)=>onvaluechange(e)} value={email} placeholder="Enter email" />
      
    </Form.Group>
    
  
   
    <Button variant="dark" type="submit">
      Post comment
    </Button>
  </Form>
  
    </Container>
    
    </>
  )
}

export default Forms