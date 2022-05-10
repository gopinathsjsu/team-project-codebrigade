import React from "react";
import { Card, Button, Container, Row, Col, Figure } from "react-bootstrap";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SearchResults = () => {

  const hotels = useSelector((state) => state.search.data);
  
  const hotelRow = (hotel, i) => {
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
                />
              </Col>
              <Col xs={5}>
              <Card.Title>{hotel.name}</Card.Title>
              <div>{hotel.address}</div>
              <br/>
              <div>{hotel.desc}</div>
              </Col>
              <Col className="text-end"><b>From ${hotel.price} USD/night</b></Col>
              <Col className="button-container text-end"><Button variant="primary" onClick={() => select(hotel)}>View Rates</Button></Col>
            </Row>
          </Container>
          <Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };
  const navigate = useNavigate();
  const select = (hotel) => {
    navigate("/Booking", { state: { hotelName: hotel.name} });

  }

  return <>
    <Header />
    <Container>
      <Row>
        <Col>
          <div className="mt-3">
            {
              hotels.map((hotel, i) => hotelRow(hotel, i))
            }
          </div>
        </Col>
      </Row>
    </Container>
  </>;
}
export default SearchResults;