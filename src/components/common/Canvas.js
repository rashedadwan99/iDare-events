import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ClickOutsideAlerter from "./ClickOutSideAlerter";
import CanvasHeader from "../CanvasHeader";
import CanvasBody from "../CanvasBody";
import "../../styles/canvas.css";
import { useSelector } from "react-redux";
function Canvas({ children, label, bodyComponent, toggleCanvas }) {
  const [isOpen, setIsOpen] = useState(false);
  const isAuth = useSelector((state) => state.user.isAuth);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setIsOpen(false);
  }, [toggleCanvas, isAuth]);
  return (
    <>
      <ClickOutsideAlerter onOutsideClick={() => setIsOpen(false)}>
        <div onClick={handleClick}>{children}</div>
        <Row className={`off-canvas ${isOpen && "open"}`}>
          <Col sm={12}>
            <CanvasHeader label={label} handleClick={handleClick} />
            <CanvasBody Component={bodyComponent} />
          </Col>
        </Row>
      </ClickOutsideAlerter>
    </>
  );
}

export default Canvas;
