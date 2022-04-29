import React, { useState, useEffect } from "react";
import { Form, Card, Button, Image, Accordion, Container, Row, Col, Spinner } from "react-bootstrap";
import validator from "validator";
import { useSelector, useDispatch } from "react-redux";

// creating functional component ans getting props from app.js and destucturing them
const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
  //creating error state for validation
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hotel, setHotel] = useState({});
  const [amenitiesHtml, setAmenitiesHtml] = useState("loading amenities...");
  const [daysHtml, setDaysHtml] = useState("loading days...");
  const dates = useSelector((state) => state.search.dates);
  const guests = useSelector((state) => state.search.guests);
  console.log(dates);
  console.log(guests);

  var getDaysArray = function (start, end) {
    for (var arr = [], dt = new Date(start); dt <= new Date(end); dt.setDate(dt.getDate() + 1)) {
      arr.push(new Date(dt).toISOString().substr(0, 10));
    }
    return arr;
  };
  const days = getDaysArray(new Date(dates.checkin), new Date(dates.checkout));

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
          const daysHtml = daysToHtml(hotel);
          setDaysHtml(daysHtml);
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
      (amenity, i) => (<Row key={i}>
        {i % 2 === 0 &&
          <>
            <Col>
              <Form.Check
                type="checkbox"
                id={amenity.name}
                label={amenity.desc} />
            </Col>
            {amenities[i + 1] &&
              <Col>
                <Form.Check
                  type="checkbox"
                  id={amenities[i + 1].name}
                  label={amenities[i + 1].desc} />
              </Col>}
          </>}</Row>
      )
    )
  }

  function daysToHtml(hotel) {
    return days.map(
      (day, i) => (
        <Row key={i}>
          <Col>
            {day}
          </Col>
          <Col>
            ${hotel.price}
          </Col>
        </Row>
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
          <Container>
            <Row>
              <Col><Image fluid={true} rounded={true} src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" /></Col>
              <Col>
                <Container>
                  <Row>
                    <Col>Check in: {dates.checkin}</Col>
                  </Row>
                  <Row>
                    <Col>Check out: {dates.checkout}</Col>
                  </Row>
                  <Row>
                    <Col>Room(s): {guests.numRooms}</Col>
                  </Row>
                  <Row>
                    <Col>Guest(s) per room: {guests.numGuests}</Col>
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
                          <i>{guests.numRooms} room(s) for {days.length} night</i>
                        </Col>
                        <Col>
                          Prices in USD
                        </Col>
                      </Row>
                      <Row className="border-bottom pt-1">
                        <Col>
                        </Col>
                      </Row>
                      {daysHtml}
                      <Row>
                        <Col>
                          Taxes and fees
                        </Col>
                        <Col>
                          ${hotel.price * days.length * .1}
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
                          <b>${hotel.price * days.length * 1.1}</b>
                        </Col>
                      </Row>
                    </Container>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Row>
          </Container>
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
