import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaCamera } from "react-icons/fa6";
import Input from "../common/Input";

function PImage() {
  return (
    <Row className="my-3">
      <Col>
        <div className="pimage-container">
          <div className="pimage-picker">
            <FaCamera />
            <input type="file" accept="image/*" />
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default PImage;
