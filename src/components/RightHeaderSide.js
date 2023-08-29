import React from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import LanguageSwitcher from "./LanguageSwitcher";
import { RxHamburgerMenu } from "react-icons/rx";
import BurgerMenu from "./BurgerMenu";
import { toggleOpenCanvasAction } from "../redux/actions/canvasActions";

function RightHeaderSide() {
  const dispatch = useDispatch();

  const handleOpenCanvas = () => {
    dispatch(toggleOpenCanvasAction(<BurgerMenu />, ""));
  };
  return (
    <Col xs={6} sm={6} md={6}>
      <Row className="justify-content-end px-2 align-items-center">
        <LanguageSwitcher />

        <RxHamburgerMenu
          style={{ fontSize: "20px" }}
          onClick={handleOpenCanvas}
        />
      </Row>
    </Col>
  );
}

export default RightHeaderSide;
