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
import Form from "react-bootstrap/Form";
import { updateBooking } from "../redux/updateBooking/updateBookingAction";
import { RestUrl } from '../global'

const MyTrips = () => {

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const server = RestUrl;
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

  const updateRow = (trip, row, setRow) => {
    const tripData = {
      email: trip.email,
      roomid: trip.roomId,
      checkin: trip.checkin,
      checkout: trip.checkout,
      newcheckin: row.checkin,
      newcheckout: row.checkout
    }
    dispatch(updateBooking(tripData));
    setRow({ ...row, isEdit:false});
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

  const TripRow = ({trip}) => {
    const [row, setRow] = useState({
      checkin: trip.checkin,
      checkout: trip.checkout,
      isEdit: false
    });
    return (
      <div>
        <Card className="mt-3">
          <Card.Body className="ml-3">
            <Container fluid>
              <Row>
                <Col>
                  <Figure.Image
                    // width={171}
                    height={180}
                    alt="171x180"
                    src="https://tripimages.imgix.net/hotel4/hotel4.jpg"
                  />
                </Col>
                <Col xs={5}>
                  <Card.Title>{hotels[trip.roomId] ? hotels[trip.roomId].name : "unknown hotel"}</Card.Title>
                </Col>
                {row.isEdit ? <>
                  <Col className="text-end"><Form.Control value={row.checkin} onChange={e => setRow({...row, checkin: e.target.value})} type="date" placeholder="" /> to <Form.Control value={row.checkout} onChange={e => setRow({...row, checkout: e.target.value})} type="date" placeholder="" /></Col>
                </>
                  :
                  <Col className="text-end">{row.checkin} to {row.checkout}</Col>}

                {row.isEdit ? <Col className="text-end"><row><Button className="update-button" variant="primary" onClick={() => updateRow(trip, row, setRow)}>Update Details</Button></row>
                <row><Button variant="primary" onClick={() => setRow({...row, isEdit: false})}>Cancel</Button></row></Col>
                : <Col className="text-end"><Button variant="primary" onClick={() => setRow({...row, isEdit: true})}>Edit Details</Button></Col>
                }
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
        trips.map((trip, i) => <TripRow trip={trip} key={i}></TripRow>)
      }
    </div>
  </>
}

export default MyTrips;
