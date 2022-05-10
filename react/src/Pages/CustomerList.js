import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Header from "../Components/Header";
import { useSelector } from "react-redux";
import "./../Styles/MyTrips.css";


const CustomerList=()=>{
    const customers = useSelector((state) => state.customers.data);
    const customerRow = (customer, i) => {
    return (
      <Card key={i} className="mt-3">
        <Card.Body className="ml-3">
          <Container>
            <Row>
              <Col className="text-end"><b>{customer.id}</b></Col> 
              <Col xs={5}>
              <Card.Title>{customer.user_name}</Card.Title> 
              </Col>
              <Col className="text-end"><b>{customer.email}</b></Col>
              <Col className="text-end"><b>{customer.reward_points}</b></Col>
            </Row>
          </Container>
          <Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };
 
  return <>
    <Header />
    <h1 className="my-trips-title">Customer List</h1>
    <Container>
      <Row>
        <Col>
          <div className="mt-3">
            {
              customers.map((customer, i) => customerRow(customer, i))
            }
          </div>
        </Col>
      </Row>
    </Container>
  </>;
}
export default CustomerList;