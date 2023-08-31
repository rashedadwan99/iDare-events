import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getBurgerLinks } from "./data/BurgerMenuLinks";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../services/userService";
import { toggleIsAuth } from "../redux/actions/userActions";
import { closeCanvasAction } from "../redux/actions/canvasActions";
import { homePageRoute, loginPageRoute } from "../routes";

function BurgerMenu({ id }) {
  const navigate = useNavigate();

  const allEvents = useSelector((state) => state.events.allEvents);
  const myEvents = useSelector((state) => state.events.myEvents);
  const event = allEvents.find((e) => e.id === parseInt(id));
  const isAuth = useSelector((state) => state.user.isAuth);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleLogout = () => {
    logout();
    dispatch(toggleIsAuth(!isAuth));
    navigate(loginPageRoute, { replace: true });
  };
  const burgerData = getBurgerLinks(
    handleLogout,
    t,
    isAuth,
    id,
    event,
    myEvents
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
  return burgerData.map((b, i) => {
    return (
      <Col sm={12} className="py-4 canvas-list" key={i + b.label}>
        <span onClick={() => handleClick(b)}>{b.label}</span>
      </Col>
    );
  });
}

export default BurgerMenu;
