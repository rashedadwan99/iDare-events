import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { FaCamera } from "react-icons/fa6";
import Input from "../common/Input";
import User from "../../images/user.png";
import { useSelector } from "react-redux";

function PImage() {
  const { value } = useSelector((state) => state.user);
  return (
    <Row className="my-3">
      <Col>
        <div className="pimage-container">
          <Image src={User} />

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
