import { Container, Form, Row, Col, InputGroup, Button } from "react-bootstrap";

const Info = () => {
  return (
    <Container>
      <Container className="mt-5 mb-5">
        <h1>Tell us about yourself...</h1>
      </Container>
      <Form>
        <Row>
          <Form.Group as={Col} md="3" className="mb-3">
            <Form.Label>Gender</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="3" className="mb-3">
            <Form.Label>Main Industry</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group as={Col} md="3" className="mb-3">
            <Form.Label>Years of Experience</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>LinkedIn</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">
                www.linkedin.com/
              </InputGroup.Text>
              <Form.Control />
            </InputGroup>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="3" className="mb-3">
            <Form.Label>Country</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group as={Col} md="3" className="mb-3">
            <Form.Label>Time Zone</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="3" className="mb-3">
            <Form.Label>Preferred Meeting Tool</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group as={Col} md="3" className="mb-3">
            <Form.Label>Discord ID</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>
        <p className="mt-5 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Row>
          <Col>
            <Button>Back</Button>
          </Col>
          <Col>
            <div className="d-md-flex justify-content-md-end">
              <Button type="submit">Get Started!</Button>
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Info;
