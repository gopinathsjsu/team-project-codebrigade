import React, { useState } from "react";
import { Form, Card, Button, Container, Row, Col } from "react-bootstrap";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import updateBookingState from "../redux/bookingState/bookingStateAction";
import { postBooking } from "../redux/booking/bookingAction";

// creating functional component ans getting props from app.js and destucturing them
const StepThree = ({ nextStep, handleFormData, prevStep, values }) => {
  //creating error state for validation
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [rewardPoints, setRewardPoints] = useState(10);
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    rewardschecked: false,
    expiry: "",
    cardNumber: "",
    cvc: ""
  });
  const bookingState = useSelector((state) => state.bookingState.data);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();
    // checking if value of first name and last name is empty show error else take to next step
    if (false) {//validator.isEmpty(values.cvc) || validator.isEmpty(values.creditCard)) {
      setError(true);
    } else {
      dispatch(updateBookingState({ ...bookingState, ...state }));
      dispatch(postBooking({ ...bookingState, ...state }));
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
                      <Form.Label>First Name *</Form.Label>
                      <Form.Control value={state.firstName} onChange={e => setState({ ...state, firstName: e.target.value })} type="text" placeholder="" required />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>Last Name *</Form.Label>
                      <Form.Control value={state.lastName} onChange={e => setState({ ...state, lastName: e.target.value })} type="text" placeholder="" required />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>Email address *</Form.Label>
                      <Form.Control value={state.email} onChange={e => setState({ ...state, email: e.target.value })} type="email" placeholder="" required />
                      <Form.Text className="text-muted">
                        We'll never share your email.
                      </Form.Text>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col>
                      <Form.Label>Address *</Form.Label>
                      <Form.Control value={state.address} onChange={e => setState({ ...state, address: e.target.value })} type="text" placeholder="" required />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>City *</Form.Label>
                      <Form.Control value={state.city} onChange={e => setState({ ...state, city: e.target.value })} type="text" placeholder="" required />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>State *</Form.Label>
                      <Form.Control value={state.state} onChange={e => setState({ ...state, state: e.target.value })} type="text" placeholder="" required />
                    </Col>
                    <Col>
                      <Form.Label>Zip *</Form.Label>
                      <Form.Control value={state.zip} onChange={e => setState({ ...state, zip: e.target.value })} type="text" placeholder="" required />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <hr />
              {rewardPoints ? <>
                <Row>
                  <Col>
                    <span>Your reward points: {rewardPoints}</span>
                  </Col>
                  <Col>
                    <label>
                      <input type="checkbox" checked={state.rewardschecked} onChange={e => setState({ ...state, rewardschecked: e.target.value })} />
                      Redeem your Reward Points
                    </label>
                  </Col>
                  <Col></Col>
                  <Col></Col>
                </Row>
              </> : ""}
              <Row>
                <Col>
                  <Row>
                    <Col>
                      <Form.Label>Credit Card *</Form.Label>
                      <Form.Control value={state.cardNumber} onChange={e => setState({ ...state, cardNumber: e.target.value })} type="text" placeholder="" required />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>Expiry *</Form.Label>
                      <Form.Control value={state.expiry} onChange={e => setState({ ...state, expiry: e.target.value })} type="text" placeholder="" required />
                    </Col>
                    <Col>
                      <Form.Label>CVC *</Form.Label>
                      <Form.Control value={state.cvc} onChange={e => setState({ ...state, cvc: e.target.value })} type="number" placeholder="" required />
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
