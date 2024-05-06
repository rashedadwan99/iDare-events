import React from "react";
import { useSelector } from "react-redux";
import { memo } from "react";
import { Form, InputGroup } from "react-bootstrap";

const Input = memo(function ({ label, icon, ...rest }) {
  const isArabic = useSelector((state) => state.language.isArabic);
  const style = {
    direction: !isArabic ? "ltr" : "rtl",
  };
  return (
    <>
      {label && (
        <Form.Label
          style={isArabic ? { textAlign: "right", width: "100%" } : {}}
        >
          {label}
        </Form.Label>
      )}
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
    </>
  );
});

export default Input;
