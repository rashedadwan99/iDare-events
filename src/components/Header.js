import React from "react";
import Logo from "../images/Logo";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap/esm";
import { RxHamburgerMenu } from "react-icons/rx";
import LanguageSwitcher from "./LanguageSwitcher";
import Canvas from "./common/Canvas";
import BurgerMenu from "./BurgerMenu";
import RightHeaderSide from "./RightHeaderSide";
import "../styles/header.css";
function Header() {
  return (
    <Row className="header py-3">
      <Col xs={12} sm={12} md={12}>
        <Row className="justify-content-around align-items-center">
          <Col xs={6} sm={6} md={6}>
            <Row className="justify-content-start px-2">
              <Logo />
            </Row>
          </Col>
          <RightHeaderSide />
        </Row>
      </Col>
    </Row>
  );
}

export default Header;
