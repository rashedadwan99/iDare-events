import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

function Input({ label, icon, ...rest }) {
  const isArabic = useSelector((state) => state.language.isArabic);
  const style = {
    direction: !isArabic ? "ltr" : "rtl",
  };
  return (
    <Form>
      {label && <Form.Label>{label}</Form.Label>}
      <InputGroup size="sm" className={`${icon ? "input-with-icon" : ""}`}>
        {icon && (
          <InputGroup.Text id="inputGroup-sizing-sm">{icon}</InputGroup.Text>
        )}
        <Form.Control
          {...rest}
          className="common-input no-auto-bg"
          autoComplete="true"
          style={style}
        />
      </InputGroup>
    </Form>
  );
}

export default Input;
