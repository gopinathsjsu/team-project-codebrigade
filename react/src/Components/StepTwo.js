import React from "react";
import { Form, Card, Button, Image, Accordion, Container, Row, Col } from "react-bootstrap";

// creating functional component ans getting props from app.js and destucturing them
const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {

  return (
    <Card className="mt-3">
      <Card.Header>Reservation Details</Card.Header>
      <Card.Body>
        <Container>
          <Row>
            <Col><Card.Title>Deluxe Queen, Guest room, 1 Queen, City view</Card.Title></Col>
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
                      <Row>
                        <Col>
                          <Form.Check
                            type="checkbox"
                            id="waterbed"
                            label="Late check-in"
                          /></Col>
                        <Col>
                          <Form.Check
                            type="checkbox"
                            id="waterbed"
                            label="Near elevator"
                          /></Col>

                      </Row>
                      <Row>
                        <Col>
                          <Form.Check
                            type="checkbox"
                            id="waterbed"
                            label="Extra pillows"
                          /></Col>
                        <Col>
                          <Form.Check
                            type="checkbox"
                            id="waterbed"
                            label="Rollaway bed"
                          /></Col>

                      </Row>
                      <Row>
                        <Col>
                          <Form.Check
                            type="checkbox"
                            id="waterbed"
                            label="Crib"
                          /></Col>
                        <Col>
                          <Form.Check
                            type="checkbox"
                            id="waterbed"
                            label="Waterbed"
                          /></Col>

                      </Row>
                      <Row>
                        <Col>
                          <Form.Check
                            type="checkbox"
                            id="waterbed"
                            label="Extra towels"
                          /></Col>
                        <Col>
                          <Form.Check
                            type="checkbox"
                            id="waterbed"
                            label="Hairdryer"
                          /></Col>
                      </Row>
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
                      <Row>
                        <Col>
                          <hr />
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
                      <Row>
                        <Col>
                          <hr />
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
    </Card>
  );
};

export default StepTwo;
