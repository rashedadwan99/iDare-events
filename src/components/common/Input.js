import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

function Input({ label, icon, ...rest }) {
  const isArabic = useSelector((state) => state.language.isArabic);
  return (
    <>
      {label && <Form.Label>{label}</Form.Label>}
      <InputGroup size="sm" className={`${icon ? "input-with-icon" : ""}`}>
        {icon && (
          <InputGroup.Text id="inputGroup-sizing-sm">{icon}</InputGroup.Text>
        )}
        <Form.Control
          {...rest}
          className="common-input no-auto-bg"
          style={!isArabic ? { direction: "ltr" } : { direction: "rtl" }}
        />
      </InputGroup>
    </>
  );
}

export default Input;
