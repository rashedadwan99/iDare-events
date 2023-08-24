import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { en, language } from "../../locales/language";

function Input({ label, icon, ...rest }) {
  return (
    <>
      {label && <Form.Label>{label}</Form.Label>}
      <InputGroup size="sm" className={`mb-3 ${icon ? "input-with-icon" : ""}`}>
        {icon && (
          <InputGroup.Text id="inputGroup-sizing-sm">{icon}</InputGroup.Text>
        )}
        <Form.Control
          {...rest}
          className="common-input no-auto-bg"
          style={
            language() === en ? { direction: "ltr" } : { direction: "rtl" }
          }
        />
      </InputGroup>
    </>
  );
}

export default Input;
