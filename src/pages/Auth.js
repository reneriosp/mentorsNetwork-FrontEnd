import React from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (submitData) => {
    console.log(submitData);
  };

  return (
    <Container>
      <Container className="mt-5">
        <h1>Sign Up</h1>
      </Container>
      <Form noValidate onSubmit={handleSubmit(submitForm)} className="mt-5">
        <Container>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  {...register("email")}
                  placeholder="Enter Email Address"
                  isInvalid={errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  {...register("password")}
                  placeholder="Enter Password"
                  isInvalid={errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password?.message}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formBasicConfirmPassword" className="mb-3">
                <Form.Label>Re-enter Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  {...register("confirmPassword")}
                  placeholder="Confirm Password"
                  isInvalid={errors.confirmPassword}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.confirmPassword?.message}
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
};

export default Auth;
