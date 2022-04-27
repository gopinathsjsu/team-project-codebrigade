import React, { useState } from "react";
import { Card, Button, Container, Row, Col, Figure } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import Booking from "./Booking";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SearchResults = () => {
  const hotels = [
    { name: "Moxy Midtown", address: "761 Post Street San Francisco, California 94109", desc: "Enjoy comfort, convenience, and scenic views at our Union Square hotel.", rate: "From 250 USD/night" },
    { name: "JW Marriott San Francisco Union Square", address: "515 Mason Street San Francisco, California 94102", desc: "A historic hotel with modern amenities in the heart of downtown San Francisco.", rate: "From 275 USD/night" },
    { name: "San Francisco Marriott Marquis", address: "780 Mission Street San Francisco, California 94103", desc: "San Francisco Proper Hotel, the crossroads between historic splendor and its glistening present.", rate: "From 350 USD/night" }];
  const hotelData = useSelector((state) => state.search.data);
  
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
              <Col className="text-end"><b>${hotel.rate}</b></Col>
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
    <SearchBar></SearchBar>
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