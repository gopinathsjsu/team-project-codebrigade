import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import "./../Styles/MyTrips.css";
import { Card, Button, Container, Row, Col, Figure } from "react-bootstrap";

const MyTrips = () => {

  let navigate = useNavigate();

  const trips = [
    { id: "1", name: "Courtyard San Francisco Union Square", startDate: "04/12/2022", endDate: "04/12/2022" },
    { id: "2",name: "JW Marriott San Francisco Union Square", startDate: "04/12/2022", endDate: "04/12/2022" },
    { id: "3",name: "San Francisco Marriott Marquis", startDate: "04/12/2022", endDate: "04/12/2022" }];

  const tripRow = (trip, i) => {
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
              <Card.Title>{trip.name}</Card.Title>
              </Col>
              <Col className="text-end">{trip.startDate} to {trip.endDate}</Col>
              <Col className="text-end"><Button variant="primary" onClick={() => select(trip.id)}>View Details</Button></Col>
            </Row>
          </Container>
          <Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };

  const select = (tripId) => {
    navigate(`/`);// temporarily directing to Home page, uncomment below while integrating
    // navigate(`/detail/${tripId}`);
  }
  return <>
    <Header />
    <h1 className="my-trips-title">My Trips</h1>
    <div className="trips-container">
      {
        trips.map((trip, i) => tripRow(trip, i))
      }
    </div>
  </>
}

export default MyTrips;
