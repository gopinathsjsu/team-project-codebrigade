import React, { useState } from "react";
import { Form, Card, Container, Row, Col } from "react-bootstrap";

// creating functional component ans getting props from app.js and destucturing them
const Total = ({ values }) => {
  return (
    <div className="mt-3">
      <Card>
        <Card.Body>
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
          </Container>        </Card.Body>
      </Card>
    </div>
  );
};

export default Total;
