import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row } from "react-bootstrap";
import ClickOutsideAlerter from "./ClickOutSideAlerter";
import CanvasHeader from "../CanvasHeader";
import CanvasBody from "../CanvasBody";
import { closeCanvasAction } from "../../redux/actions/canvasActions";
import "../../styles/canvas.css";
import { useEffect } from "react";
function Canvas() {
  const show = useSelector((state) => state.canvas.show);
  const dispatch = useDispatch();
  useEffect(() => {
    if (show) {
      const handleBackButton = (e) => {
        dispatch(closeCanvasAction());
      };

      const handleEscapeKey = (e) => {
        if (e.key === "Escape") {
          dispatch(closeCanvasAction());
        }
      };

      window.addEventListener("popstate", handleBackButton);
      window.addEventListener("keydown", handleEscapeKey);

      return () => {
        window.removeEventListener("popstate", handleBackButton);
        window.removeEventListener("keydown", handleEscapeKey);
      };
    }
  }, [show]);
  return (
    <>
      <ClickOutsideAlerter onOutsideClick={() => dispatch(closeCanvasAction())}>
        <Row className={`off-canvas ${show && "open"}`}>
          <Col sm={12}>
            <CanvasHeader />
            <CanvasBody />
          </Col>
        </Row>
      </ClickOutsideAlerter>
    </>
  );
}

export default Canvas;
