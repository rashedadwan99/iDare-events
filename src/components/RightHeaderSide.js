import React, { useCallback } from "react";
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
import { getNavLinks } from "./data/NavLinks";
import { resetEvents } from "../redux/actions/eventActions";
import { scrollToTop } from "./utils/scrollToTop";

function RightHeaderSide() {
  const { id } = useParams();
  const myEvents = useSelector((state) => state.events.myEvents);
  const allEvents = useSelector((state) => state.events.allEvents);
  const event = allEvents.find((e) => e.id === parseInt(id));
  const recommendedEvents = useSelector(
    (state) => state.events.recommendedEvents
  );
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
    scrollToTop();
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
  const handleClick = useCallback(
    (data) => {
      dispatch(closeCanvasAction());

      if (data.path) {
        navigate(data.path);
        scrollToTop();
      } else {
        data.onClick();
      }
    },
    [dispatch, navigate]
  );
  const handleOpenCanvas = useCallback(() => {
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
  }, [dispatch, event, id, navLinks, handleClick]);
  return (
    <Col xs={6} sm={9} md={10}>
      <Row className="justify-content-end align-items-center">
        <LargeScreenNavbar
          navLinks={navLinks}
          handleClick={(data) => handleClick(data)}
          event={event}
        />
        {id && !isInMyEvents && (
          <div className="event-button">
            <EventFormBtn event={event} />
          </div>
        )}

        <LanguageSwitcher />
        <RxHamburgerMenu
          style={{ fontSize: "22px", marginRight: "10px" }}
          onClick={handleOpenCanvas}
          className="burger-icon"
        />
      </Row>
    </Col>
  );
}

export default RightHeaderSide;
