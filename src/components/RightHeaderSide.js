import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import LanguageSwitcher from "./LanguageSwitcher";
import { RxHamburgerMenu } from "react-icons/rx";
import BurgerMenu from "./BurgerMenu";
import {
  closeCanvasAction,
  toggleOpenCanvasAction,
} from "../redux/actions/canvasActions";
import EventFormBtn from "./common/EventFormBtn";
import LargeScreenNavbar from "./LargeScreenNavbar";
import { logout } from "../services/userService";
import { toggleIsAuth } from "../redux/actions/userActions";
import { homePageRoute } from "../routes";
import { useTranslation } from "react-i18next";
import { getNavLinks } from "./data/BurgerMenuLinks";
import { resetEvents } from "../redux/actions/eventActions";

function RightHeaderSide({ event }) {
  const myEvents = useSelector((state) => state.events.myEvents);
  const recommendedEvents = useSelector(
    (state) => state.events.recommendedEvents
  );
  const { id } = useParams();
  const { t } = useTranslation();
  const isInMyEvents = myEvents.find((e) => e.event_id === id);
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    dispatch(toggleIsAuth(!isAuth));
    dispatch(resetEvents());

    navigate(homePageRoute, { replace: true });
  };
  const navLinks = getNavLinks(
    handleLogout,
    t,
    isAuth,
    id,
    event,
    myEvents,
    recommendedEvents
  );
  const handleClick = (data) => {
    if (data.path) {
      navigate(data.path);
    } else {
      data.onClick();
    }
    dispatch(closeCanvasAction());
    window.scrollTo(0, 0);
  };
  const handleOpenCanvas = () => {
    dispatch(
      toggleOpenCanvasAction(
        <BurgerMenu
          id={id}
          handleClick={(data) => handleClick(data)}
          burgerData={navLinks}
          event={event}
        />,
        ""
      )
    );
  };
  return (
    <Col xs={6} sm={9} md={10}>
      <Row className="justify-content-end align-items-center">
        <LargeScreenNavbar
          navLinks={navLinks}
          handleClick={(data) => handleClick(data)}
          event={event}
        />
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
