import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { memo } from "react";
import { Col, Row } from "react-bootstrap";
import ClickOutsideAlerter from "./ClickOutSideAlerter";
import CanvasHeader from "../CanvasHeader";
import CanvasBody from "../CanvasBody";
import { closeCanvasAction } from "../../redux/actions/canvasActions";
import "../../styles/canvas.css";
const Canvas = memo(function () {
  const show = useSelector((state) => state.canvas.show);
  const dispatch = useDispatch();
  useEffect(() => {
    if (show) {
      const handleEscapeKey = (e) => {
        if (e.key === "Escape") {
          dispatch(closeCanvasAction());
        }
      };
      const handleResize = () => {
        if (window.innerWidth >= 1150) {
          dispatch(closeCanvasAction());
        }
      };

      window.addEventListener("resize", handleResize);
      window.addEventListener("keydown", handleEscapeKey);

      return () => {
        window.removeEventListener("keydown", handleEscapeKey);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [show, dispatch]);
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
});
export default Canvas;
