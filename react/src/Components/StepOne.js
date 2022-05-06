import React from "react";
import { Card, Button, Container, Row, Col, Figure } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import updateBookingState from "../redux/bookingState/bookingStateAction";

// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ nextStep, handleFormData, values }) => {
 const dispatch = useDispatch();
  const hotels = useSelector((state) => state.search.data);
  let selectedHotel = hotels.find( (hotel) => hotel.name === values);
  selectedHotel = selectedHotel.rooms;
  
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
    dispatch(updateBookingState({ hotelName: values, roomType: room.name, price: room.price}));
    nextStep();
  }

  return (
    <div className="mt-3">
      {
        selectedHotel.map((room, i) => roomRow(room, i))
      }
    </div>
  );
};

export default StepOne;
