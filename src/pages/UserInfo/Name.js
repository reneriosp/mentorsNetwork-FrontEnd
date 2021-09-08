import { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";

const Name = () => {
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
        <h1>Tell us your Name...</h1>
      </Container>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className="mt-5 mb-5">
              <Form.Label>First Name</Form.Label>
              <Form.Control required type="text" placeholder="first name" />
              <Form.Control.Feedback>looks good</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please type a name
              </Form.Control.Feedback>
            </Form.Group>
            <Button className="mt-5">Back</Button>
          </Col>
          <Col>
            <Form.Group className="mt-5 mb-5">
              <Form.Label>Last Name</Form.Label>
              <Form.Control required type="text" placeholder="last name" />
              <Form.Control.Feedback>looks good</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please type a name
              </Form.Control.Feedback>
            </Form.Group>
            <div className="d-md-flex justify-content-md-end">
              <Button type="submit" className="mt-5">
                Next
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Name;
