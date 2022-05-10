import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import "./../Styles/MyTrips.css";
import { Card, Button, Container, Row, Col, Figure } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from "react-redux";
import { deleteBooking } from "./../redux/deleteBooking/deleteBookingAction";

const MyTrips = () => {

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const server = 'http://localhost:8080';
  const [trips, setTrips] = useState([]);
  const [hotels, setHotels] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const deleteTrip = (trip) => {
    const tripData = {
      email: trip.email,
      roomid: trip.roomId,
      checkin: trip.checkin,
      checkout: trip.checkout
    }
    dispatch(deleteBooking(tripData));
    handleClose();
  };

  useEffect(() => {
    async function getTrips() {
      const url = server + "/booking?email=" + sessionStorage.getItem("userEmail");
      const tripsResponse = await fetch(url);
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
        fetchedHotels[trip.roomId] = hotels[0];
      }
    }
    return fetchedHotels;
  }

  const tripRow = (trip, i) => {
    return (
      <div key={i}>
        <Card className="mt-3">
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
                <Col><Button onClick={handleShow}><FontAwesomeIcon icon={faTrashCan} /></Button></Col>
              </Row>
            </Container>
            <Card.Text>
            </Card.Text>
          </Card.Body>
        </Card>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure you want to cancel your trip?</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              No
            </Button>
            <Button variant="primary" onClick={() => deleteTrip(trip)}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
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
