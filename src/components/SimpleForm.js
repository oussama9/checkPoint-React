import React, { Component } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

class SimpleForm extends Component {
    render() {
      return (
        <Container>
        <Form>
        <Form.Group controlId="form.Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="form.Email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="form.Textarea">
            <Form.Label>Comment</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary">Next</Button>
        </Form>
      </Container>
      );
    }
         
  }
  
  export default SimpleForm;