import React, { useState } from "react";
import { Form, Card } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const Total = ({ values }) => {
  return (
    <div className="mt-3">
      <Card>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Subtotal</Form.Label>
              <Form.Control
                defaultValue={values.subtotal}
                type="text"
                disabled={true}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Total</Form.Label>
              <Form.Control
                defaultValue={values.total}
                type="text"
                disabled={true}
              />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Total;
