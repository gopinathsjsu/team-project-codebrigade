import React, { useState } from "react";
import { Form, Card, Button, Container, Row, Col } from "react-bootstrap";
import validator from "validator";
import { useSelector, useDispatch } from "react-redux";

// creating functional component ans getting props from app.js and destucturing them
const StepThree = ({ nextStep, handleFormData, prevStep, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to next step
    if (false) {//validator.isEmpty(values.cvc) || validator.isEmpty(values.creditCard)) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <Card className="mt-3">
      <Form onSubmit={submitFormData}>
        <Card.Header>Payment Details</Card.Header>
        <Card.Body>
          <Container>
            <Row>
              <Col><Card.Title>Deluxe Queen, Guest room, 1 Queen, City view</Card.Title></Col>
            </Row>
          </Container>
          <Card.Text>
            <Container>
              <Row>
                <Col>
                  <Row>
                    <Col>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="" required/>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="" required/>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="" required/>
                      <Form.Text className="text-muted">
                        We'll never share your email.
                      </Form.Text>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col>
                      <Form.Label>Address</Form.Label>
                      <Form.Control type="text" placeholder="" required/>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" placeholder="" required/>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>State</Form.Label>
                      <Form.Control type="text" placeholder="" required/>
                    </Col>
                    <Col>
                      <Form.Label>Zip</Form.Label>
                      <Form.Control type="text" placeholder="" required/>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col>
                  <Row>
                    <Col>
                      <Form.Label>Credit Card</Form.Label>
                      <Form.Control type="text" placeholder="" required/>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>Expiry</Form.Label>
                      <Form.Control type="text" placeholder="" required/>
                    </Col>
                    <Col>
                      <Form.Label>CVC</Form.Label>
                      <Form.Control type="number" placeholder="" required/>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Card.Text>
        </Card.Body>
        <Container className="mb-3">
          <Row className="text-end">
            <Col></Col>
            <Col>
              <Button variant="secondary" onClick={prevStep}>
                Previous
              </Button>
            </Col>
            <Col>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </Card>
  );
};

export default StepThree;
