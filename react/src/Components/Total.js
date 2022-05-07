import React, { useState } from "react";
import { Form, Card, Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

// creating functional component ans getting props from app.js and destucturing them
const Total = ({ values }) => {
  const bookingState = useSelector((state) => state.bookingState.data);
  const dates = useSelector((state) => state.search.dates);
  const guests = useSelector((state) => state.search.guests);
  var getDaysArray = function (start, end) {
    for (var arr = [], dt = new Date(start); dt <= new Date(end); dt.setDate(dt.getDate() + 1)) {
      arr.push(new Date(dt).toISOString().substr(0, 10));
    }
    return arr;
  };
  const days = getDaysArray(new Date(dates.checkin), new Date(dates.checkout));

  const daysToHtml = days.map(
      (day, i) => (
        <Row key={i}>
          <Col>
            {day}
          </Col>
          <Col>
            ${bookingState.price}
          </Col>
        </Row>
      )
    );

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
            {daysToHtml}
            <Row>
              <Col>
                Taxes and fees
              </Col>
              <Col>
                ${bookingState.price * days.length * .1}
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
                <b>${(bookingState.price * days.length * 1.1).toFixed(2).replace(/\.0+$/,'')}</b>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Total;
