import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const Final = ({ values }) => {

  //destructuring the object from values
  const { firstName, lastName, phoneNumber, creditCard, cvc } = values;
  const bookingState = useSelector((state) => state.bookingState.data);
  return (
    <>
      <Card className="mt-3">
      <Card.Header>Summary</Card.Header>
        <Card.Body>
          <Container>
            <Row>
              <Col><Card.Title>{bookingState.hotelName}, {bookingState.roomType}</Card.Title></Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col>
                    First Name
                  </Col>
                </Row>
                <Row>
                  <Col>
                    Last Name
                  </Col>
                </Row>
                <Row>
                  <Col>
                    Email@address.com
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                  {bookingState.firstName}
                  </Col>
                </Row>
                <Row>
                  <Col>
                  {bookingState.lastName}
                  </Col>
                </Row>
                <Row>
                  <Col>
                  {bookingState.email}
                  </Col>
                </Row>
              </Col>
            </Row>
            <hr />
              <Row>
              <Col>
                <Row>
                  <Col>
                  Credit Card : 
                  </Col>
                </Row>
                <Row>
                  <Col>
                  Exp : 
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                  {bookingState.creditCard}
                  </Col>
                </Row>
                <Row>
                  <Col>
                  {bookingState.expiry}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default Final;
