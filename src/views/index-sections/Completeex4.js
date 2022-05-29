import React,{useState} from "react";
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
// reactstrap components
import {  Row, Col } from "reactstrap";


// core components

function  Completeex3() {
    const [user, setuser] = useState('')
    const {comment,email,name}=user
    const onvaluechange=(e)=>{
        setuser({...user,[e.target.name]:e.target.value})
        
    }
   

    const adduser = async () => {
        try {
             await axios.get(
                `/Contact`,user
                 
                )
                
            } catch (err) {
            console.log(err);
        }
    };
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row className="justify-content-lg-center">
            <Col lg="10" md="12">
    
          <h1>  Get Started With WordsRWeapons Today</h1>
          <p> 
To get started with WordsRWeapons Today, simply fill out the short contact form to the right and one of our reps will contact you to get a better idea of what you are looking for in a writing department.

Once we know what you’re looking for, we’ll simply plug you into our process so that you can easily request the content you want, when you need it.</p>
          <p></p>

          <h1>Contact Info</h1>
          <p>Phone 424.218.6662</p>
          <p>Email&nbsp; tomo@wordsrweapons.com</p>
          <a href="/">Check out how our pricing works by clicking here. </a>

          <Container>

<Form      
  style={{fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',

lineHeight:2.2}}>
<h3 >Leave a Reply</h3>
<Form.Text >
Your email address will not be published. Required fields are marked *
</Form.Text>

<Form.Group className="mb-3"  controlId="formBasicPassword">
  <Form.Label>Name</Form.Label>
  <Form.Control style={{width:'50%'}} type="text" name ='name' onChange={(e)=>onvaluechange(e)}  value={name} placeholder="Enter your name" />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control style={{width:'50%'}} type="email" name ='email'  onChange={(e)=>onvaluechange(e)} value={email} placeholder="Enter email" />
  
</Form.Group>
<Form.Group htmlSize='30px' className="mb-3" controlId="formBasicEmail">
<Form.Label>Comment</Form.Label>
  <Form.Control style={{width:'50%'}} as="textarea" name='comment' onChange={(e)=>onvaluechange(e)} value={comment} rows={3}  >
                         
      </Form.Control>
      
</Form.Group>



<Button onSubmit={adduser} variant="dark" type="submit">
  Post comment
</Button>
</Form>

</Container>
        
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Completeex3;