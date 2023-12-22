import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function ExampleComponent() {
    return (
        <Container className='main-wrapper'>
            <Row className='justify-content-center'>
                <div className='image'></div>
            </Row>
            <Row className="justify-content-center">
                <Col xs={10}>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control className='no-box-shadow' type="text" placeholder='Username' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Password</Form.Label>
                            <Form.Control className='no-box-shadow' type="password" placeholder='Password' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className='no-box-shadow' type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control className='no-box-shadow' as="textarea" rows={3} />
                        </Form.Group>
                       <Col className="d-flex justify-content-center align-items-center">
                       <Button variant="outline-secondary">Secondary</Button>
                       </Col>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default ExampleComponent;
