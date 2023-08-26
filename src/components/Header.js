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
import LeftHeaderSide from "./LeftHeaderSide";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/dist";
import { headerEventStyle } from "../styles/eventStyles";
function Header() {
  const { id } = useParams();

  const allEvents = useSelector((state) => state.events.allEvents);
  const isLoading = useSelector((state) => state.events.isLoading);
  const event = allEvents.find((e) => e.id === parseInt(id));
  const handleStyle = () => {
    if (id && event) return headerEventStyle(event);
  };
  return (
    !isLoading && (
      <Row className="header py-3" style={handleStyle()}>
        <Col xs={12} sm={12} md={12}>
          <Row className="justify-content-around align-items-center">
            <LeftHeaderSide event={event} />
            <RightHeaderSide event={event} />
          </Row>
        </Col>
      </Row>
    )
  );
}

export default Header;
