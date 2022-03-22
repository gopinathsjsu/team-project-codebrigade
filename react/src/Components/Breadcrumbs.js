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
    <div className="mt-5">
      <Card.Header>Booking</Card.Header>
      <Card>
        <Card.Body>
          <Button variant={btnVariant(values, 1)} className="mx-5">Room Options</Button>
          &gt;
          <Button variant={btnVariant(values, 2)} className="mx-5">Make Payment</Button>
          &gt;
          <Button variant={btnVariant(values, 3)} className="mx-5">Confirmation</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Breadcrumbs;
