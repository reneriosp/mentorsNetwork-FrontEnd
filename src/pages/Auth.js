import React, { useState } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";

function Auth() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <Container className="mt-5">
        <h1>Sign Up</h1>
      </Container>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="mt-5"
      >
        <Container>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter Email Address"
                />
                <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please type an email
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label for="password">Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Enter Password"
                />
                <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please type a password{" "}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formBasicPassword" className="mb-3">
                <Form.Label for="re-enter password">
                  Re-enter Password
                </Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Re-Enter Password"
                />
                <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please type a password{" "}
                </Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit" className="mb-3">
                Create Account
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </Container>
  );
}

export default Auth;
