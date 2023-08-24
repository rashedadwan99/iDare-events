import React from "react";
import { Button } from "react-bootstrap";
import "../../styles/button.css";
function CommonButton({ label, icon, ...rest }) {
  return (
    <Button {...rest} className="common-button" style={{ zIndex: "4" }}>
      <div>{label}</div>
      {icon}
    </Button>
  );
}
export default CommonButton;
