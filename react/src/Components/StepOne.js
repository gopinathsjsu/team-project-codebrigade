import React from "react";
import { Card, Button, Container, Row, Col, Figure } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ nextStep, handleFormData, values }) => {
  // const rooms = [
  //   { name: "Queen", description: "1 Queen bed, city view", content: "Complimentary room service, flexible rate. Short description. ", rate: "123.45", qty: 10 },
  //   { name: "King", description: "1 King bed, garden view", content: "Complimentary room service, flexible rate. Long description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", rate: "193.45", qty: 2 },
  //   { name: "Deluxe", description: "2 Queen beds, city view", content: "Free breakfast and bottle of wine, flexible rate. Medium description. Medium description. Medium description. Medium description. ", rate: "223.45", qty: 3 }];

  const rooms = useSelector((state) => state.search.data);
  let selectedHotelRooms = rooms.filter( (room) => room.name === values);
  selectedHotelRooms = selectedHotelRooms[0].rooms;
  const roomRow = (room, i) => {
    return (
      <Card key={i} className="mt-3">
        <Card.Body className="ml-3">
          <Container>
            <Row>
              <Col>
                <Figure.Image
                  // width={171}
                  height={180}
                  alt="171x180"
                  src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                  //src= {room.imageUrl}
                />
              </Col>
              <Col xs={5}>
              <Card.Title>{room.name}</Card.Title>
              <div> {room.desc} </div><br/>
              </Col>
              <Col className="text-end"><b>${room.price}</b></Col>
              <Col className="text-end"><Button variant="primary" onClick={() => select(room)}>Select</Button></Col>
            </Row>
          </Container>
          <Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };

  const select = (room) => {
    nextStep();
  }

  return (
    <div className="mt-3">
      {
        selectedHotelRooms.map((room, i) => roomRow(room, i))
      }
    </div>
  );
};

export default StepOne;
