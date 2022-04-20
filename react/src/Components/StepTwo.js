import React, { useState, useEffect } from "react";
import { Form, Card, Button, Image, Accordion, Container, Row, Col, Spinner } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
  //creating error state for validation
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hotel, setHotel] = useState({});
  const [amenitiesHtml, setAmenitiesHtml] = useState("loading amenities...");

  const submitFormData = (e) => {
    e.preventDefault();

    if (false) {//validator.isEmpty(values.cvc) || validator.isEmpty(values.creditCard)) {
      setError("failed to validate form");
    } else {
      nextStep();
    }
  };

  const restEndpoint = "http://localhost:8080/hotel";

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://localhost:8080/hotel") // fetch a specific hotel room
      .then(res => res.json())
      .then(
        (hotels) => {
          setIsLoaded(true);
          const hotel = hotels[0];// FIXME
          console.log(hotel);
          setHotel(hotel);
          const amenitiesHtml = amenitiesToHtml(hotel.amenities);
          setAmenitiesHtml(amenitiesHtml);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  function amenitiesToHtml(amenities) {
    return amenities.map(
      (amenity, i) => (<Row>
        {i % 2 === 0 &&
          <>
            <Col key="i">
              <Form.Check
                type="checkbox"
                id={amenity.name}
                label={amenity.desc} />
            </Col>
            {amenities[i + 1] &&
              <Col key="i">
                <Form.Check
                  type="checkbox"
                  id={amenities[i + 1].name}
                  label={amenities[i + 1].desc} />
              </Col>}
          </>}</Row>
      )
    )
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Card className="mt-3">
      <Form onSubmit={submitFormData}>
        <Card.Header>Reservation Details</Card.Header>
        <Card.Body>
          <Container>
            {!isLoaded && <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>}
            <Row>
              <Col><Card.Title>{hotel && hotel.rooms && hotel.rooms[0].name}</Card.Title></Col>
            </Row>
          </Container>
          <Card.Text>
            <Container>
              <Row>
                <Col><Image fluid={true} rounded={true} src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" /></Col>
                <Col>
                  <Container>
                    <Row>
                      <Col>Check in: Friday, March 25, 2022</Col>
                    </Row>
                    <Row>
                      <Col>Check out: Saturday, March 26, 2022</Col>
                    </Row>
                    <Row>
                      <Col>Room(s): 1</Col>
                    </Row>
                    <Row>
                      <Col>Guest(s) per room: 1</Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
              <Row className="mt-3">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Choose Room Options</Accordion.Header>
                    <Accordion.Body>
                      <Container>
                        {amenitiesHtml}
                      </Container>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Summary of Charges</Accordion.Header>
                    <Accordion.Body>
                      <Container>
                        <Row>
                          <Col>
                            <b>Flex rate</b>
                          </Col>
                          <Col>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <i>1 room for 1 night</i>
                          </Col>
                          <Col>
                            Prices in USD
                          </Col>
                        </Row>
                        <Row className="border-bottom pt-1">
                          <Col>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            Saturday March 26, 2022
                          </Col>
                          <Col>
                            354.23
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            Taxes and fees
                          </Col>
                          <Col>
                            78.90
                          </Col>
                        </Row>
                        <Row className="border-bottom pt-1">
                          <Col>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <b>Total</b>
                          </Col>
                          <Col>
                            <b>454.23</b>
                          </Col>
                        </Row>
                      </Container>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
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
            <Col className="text-end">
              <Button variant="primary" onClick={() => nextStep()}>Continue</Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </Card>
  );

};

export default StepTwo;
