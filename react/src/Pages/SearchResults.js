import React, { useState } from "react";
import { Card, Button, Container, Row, Col, Figure } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import Booking from "./Booking";
import {useNavigate} from "react-router-dom";

const SearchResults = () => {
    const hotels = [
        { name: "Courtyard San Fransisco Union Square", address: "761 Post Street San Francisco, California 94109", desc: "This hotel has comfortable rooms and suites overlook lush gardens with panoramic views of the Arenal Volcano. The hotel features a splendid outdoor swimming pool in addition to satellite TV, air conditioning, and free WiFi. The Villas Eco Arenal is located only 0.6 miles from central La Fortuna, and just a short drive from the Arenal Volcano National Park.", rate: "From 250 USD/night"},
        { name: "JW Marriott San Francisco Union Square", address: "515 Mason Street San Francisco, California 94102", desc: "It is immersed in 45 hectares of primary and secondary forest, at the foot of the majestic Arenal Volcano, which makes it a true oasis of peace, enriched by an exuberant vegetation and diverse fauna. Montaña de Fuego has become one of the most beautiful hotels in the area, with one of the most privileged panoramic views of the Arenal Volcano.", rate: "From 275 USD/night"},
        { name: "San Francisco Marriott Marquis", address: "780 Mission Street San Francisco, California 94103", desc: "This is a quiet, comfortable hotel located near the Ecological Sanctuary and the Monteverde Butterfly Gardens in an area called Cerro Plano, an ideal location half way between the Monteverde Cloud Forest reserve and the main village of the Monteverde area (Santa Elena), in close proximity to several restaurants and activities. All rooms have private bathrooms with hot water. . ", rate: "From 350 USD/night"}];
   
        const hotelRow = (hotel, i) => {
            return (
              <Card key={i} className="mt-3">
                <Card.Header>{hotel.name}</Card.Header>
                <Card.Body className="ml-3">
                  <Container>
                    <Row>
                      <Col><Card.Title>{hotel.address}</Card.Title></Col>
                      <Col className="text-end"><b>${hotel.rate}</b></Col>
                      <Col className="text-end"><Button variant="primary" onClick={() => select(hotel)}>View Rates</Button></Col>
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
                        {hotel.desc}
                      </Col>
                    </Row>
                  </Container>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          };
          const navigate= useNavigate();
          const select = (hotel) => {
            navigate("/Booking")
          }
   
   return <>
      <Header/>
      <SearchBar></SearchBar>
      <div className="mt-3">
      {
        hotels.map((hotel, i) => hotelRow(hotel, i))
      }
    </div>
      </>; 
}
export default SearchResults;