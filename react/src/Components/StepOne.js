import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Container, Row, Col, Image, Figure } from "react-bootstrap";

// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ nextStep, handleFormData, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);
  const rooms = [
    { name: "Queen", description: "1 Queen bed, city view", content: "Complimentary room service, flexible rate. Short description. ", rate: "123.45", qty: 10 },
    { name: "King", description: "1 King bed, garden view", content: "Complimentary room service, flexible rate. Long description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", rate: "193.45", qty: 2 },
    { name: "Deluxe", description: "2 Queen beds, city view", content: "Free breakfast and bottle of wine, flexible rate. Medium description. Medium description. Medium description. Medium description. ", rate: "223.45", qty: 3 }];

  const roomRow = (room, i) => {
    return (
      <Card key={i} className="mt-3">
        <Card.Header>{room.name}</Card.Header>
        <Card.Body className="ml-3">
          <Container>
            <Row>
              <Col><Card.Title>{room.description}</Card.Title></Col>
              <Col className="text-end"><b>${room.rate}</b></Col>
              <Col className="text-end"><Button variant="primary" onClick={() => select(room)}>Select</Button></Col>
            </Row>
            <Row>
              <Col>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                />
              </Col>
              <Col xs={10}>
                {room.content}
              </Col>
            </Row>
          </Container>
          <Card.Text>
          </Card.Text>
        </Card.Body>
        {room.qty < 3 &&
          <Card.Footer className="text-muted">Hurry, only {room.qty} remaining!</Card.Footer>
        }
      </Card>
    );
  };

  const select = (room) => {
    nextStep();
  }

  return (
    <div className="mt-3">
      {
        rooms.map((room, i) => roomRow(room, i))
      }
    </div>
  );
};

export default StepOne;
