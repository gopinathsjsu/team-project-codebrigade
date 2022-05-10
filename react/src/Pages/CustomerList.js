import React from "react";
import { Card, Button, Container, Row, Col, Figure } from "react-bootstrap";
import Header from "../Components/Header";
import { useSelector } from "react-redux";


const CustomerList=()=>{
    const customers = useSelector((state) => state.customers.data);
    const customerRow = (customer, i) => {
    return (
      <Card key={i} className="mt-3">
        <Card.Body className="ml-3">
          <Container>
            <Row>
                <Col className="text-end"><b>{customer.id}</b></Col>
            <Col>
              <Card.Title>{customer.user_name}</Card.Title>
            </Col>
              <Col className="text-end"><b>From ${customer.email}</b></Col>
              <Col className="text-end"><b>From ${customer.reward_points}</b></Col>
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