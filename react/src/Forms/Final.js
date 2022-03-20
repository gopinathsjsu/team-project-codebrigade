import React from "react";
import { Card } from "react-bootstrap";

const Final = ({ values }) => {

    //destructuring the object from values
  const { firstName, lastName, phoneNumber, creditCard, cvc } = values;
  return (
    <>
      <Card style={{ marginTop: 100, textAlign: "left" }}>
        <Card.Body>
          <p>
            <strong>First Name :</strong> {firstName}{" "}
          </p>
          <p>
            <strong>Last Name :</strong> {lastName}{" "}
          </p>
          <p>
            <strong>Phone Number :</strong> {phoneNumber}{" "}
          </p>
          <p>
            <strong>Credit Card :</strong> {creditCard}{" "}
          </p>
          <p>
            <strong>CVC :</strong> {cvc}{" "}
          </p>
        </Card.Body>
      </Card>
    </>
  );
};

export default Final;
