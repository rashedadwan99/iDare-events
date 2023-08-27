import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getBurgerLinks } from "./data/BurgerMenuLinks";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../services/userService";
import { toggleIsAuth } from "../redux/actions/userActions";

function BurgerMenu({ handleCloseCanvas }) {
  const navigate = useNavigate();
  const { id: eventId } = useParams();
  const allEvents = useSelector((state) => state.events.allEvents);
  const event = allEvents.find((e) => e.id === parseInt(eventId));
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);
  const handleLogout = () => {
    logout();
    dispatch(toggleIsAuth(false));
  };
  const burgerData = getBurgerLinks(handleLogout, t, isAuth, eventId, event);
  const handleClick = (data) => {
    if (data.path) {
      navigate(data.path);
      handleCloseCanvas();
    } else {
      data.onClick();
    }
    window.scrollTo(0, 0);
  };
  return burgerData.map((b, i) => {
    return (
      <Col sm={12} className="py-4 canvas-list" key={i + b.label}>
        <span onClick={() => handleClick(b)}>{b.label}</span>
      </Col>
    );
  });
}

export default BurgerMenu;
