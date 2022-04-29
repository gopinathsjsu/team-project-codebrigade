import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import "./../Styles/MyTrips.css";
import { Card, Button, Container, Row, Col, Figure } from "react-bootstrap";

const MyTrips = () => {

  let navigate = useNavigate();
  const server = 'http://localhost:8080';
  const [trips, setTrips] = useState([]);
  const [hotels, setHotels] = useState({});

  useEffect(() => {
    async function getTrips() {
      const tripsResponse = await fetch(server + "/booking?firstName=sa&lastName=virk");
      const trips = await tripsResponse.json();
      const hotels = await fetchHotels(trips);
      setTrips(trips)
      setHotels(hotels);
    }
    getTrips();
  }, [])

  async function fetchHotels(trips) {
    const fetchedHotels = {};
    for (let i = 0; i < trips.length; i++) {
      let trip = trips[i];
      if (!fetchedHotels[trip.roomId]) {
        // fetch hotel for this trip
        const response = await fetch(server + '/hotel/room/' + trip.roomId);
        const hotels = await response.json();
        console.log(hotels[0]);
        fetchedHotels[trip.roomId] = hotels[0];
      }
    }
    return fetchedHotels;
  }

  const tripRow = (trip, i) => {
    return (
      <Card key={i} className="mt-3">
        <Card.Body className="ml-3">
          <Container fluid>
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
                <Card.Title>{hotels[trip.roomId] ? hotels[trip.roomId].name : "unknown hotel"}</Card.Title>
              </Col>
              <Col className="text-end">{trip.checkin} to {trip.checkout}</Col>
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
