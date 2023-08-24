import React from "react";
import { Form } from "react-bootstrap";

function TextArea({ label, ...rest }) {
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control as="textarea" rows={5} {...rest} />
    </Form.Group>
  );
}

export default TextArea;
