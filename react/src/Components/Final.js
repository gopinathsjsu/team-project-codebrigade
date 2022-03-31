import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const Final = ({ values }) => {

  //destructuring the object from values
  const { firstName, lastName, phoneNumber, creditCard, cvc } = values;
  return (
    <>
      <Card className="mt-3">
      <Card.Header>Summary</Card.Header>
        <Card.Body>
          <Container>
            <Row>
              <Col><Card.Title>Deluxe Queen, Guest room, 1 Queen, City view</Card.Title></Col>
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
                    123 main st.
                  </Col>
                </Row>
                <Row>
                  <Col>
                    Pleasanton
                  </Col>
                </Row>
                <Row>
                  <Col>
                    CA
                  </Col>
                  <Col>
                    94566
                  </Col>
                </Row>
              </Col>
            </Row>
            <hr />
              <Row>
                <Col>
                  <Row>
                    <Col>
                      Credit Card: 4511 **** **** **** Exp: 4/5/22
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
