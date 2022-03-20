import "../App.css";
import React from "react";
import { Card, Button } from "react-bootstrap";

// breadcrumbs for wizard ...
// ours are different than bootstrap (https://react-bootstrap.github.io/components/breadcrumb)
const Breadcrumbs = ({ values }) => {

  const btnVariant = (a, b) => {
    return a === b ? "primary" : "secondary";
  };

  return (
    <div className="breadcrumbs">
      <Card.Header>Booking</Card.Header>
      <Card>
        <Card.Body>
          <Button variant={btnVariant(values, 1)} className="breadcrumb-btn">Room Options</Button>
          <Button variant={btnVariant(values, 2)} className="breadcrumb-btn">Make Payment</Button>
          <Button variant={btnVariant(values, 3)} className="breadcrumb-btn">Confirm Booking</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Breadcrumbs;
