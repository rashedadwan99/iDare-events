import React from "react";
import { useParams } from "react-router-dom";

import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import LanguageSwitcher from "./LanguageSwitcher";
import { RxHamburgerMenu } from "react-icons/rx";
import BurgerMenu from "./BurgerMenu";
import { toggleOpenCanvasAction } from "../redux/actions/canvasActions";
import EventFormBtn from "./common/EventFormBtn";

function RightHeaderSide({ event }) {
  const myEvents = useSelector((state) => state.events.myEvents);
  const { id } = useParams();
  const isInMyEvents = myEvents.find((e) => e.event_id === id);

  const dispatch = useDispatch();

  const handleOpenCanvas = () => {
    dispatch(toggleOpenCanvasAction(<BurgerMenu id={id} />, ""));
  };
  return (
    <Col xs={6} sm={9} md={9}>
      <Row className="justify-content-end px-2 align-items-center">
        {event && !isInMyEvents && (
          <div className="event-button">
            <EventFormBtn event={event} />
          </div>
        )}

        <LanguageSwitcher />
        <RxHamburgerMenu
          style={{ fontSize: "20px" }}
          onClick={handleOpenCanvas}
          className="burger-icon"
        />
      </Row>
    </Col>
  );
}

export default RightHeaderSide;
