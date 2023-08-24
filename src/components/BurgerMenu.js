import React from "react";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getBurgerLinks } from "./data/BurgerMenuLinks";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../services/userService";
import { toggleIsAuth } from "../redux/actions/userActions";

function BurgerMenu({ handleCloseCanvas }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);
  const handleLogout = () => {
    logout();
    dispatch(toggleIsAuth(false));
  };
  const burgerData = getBurgerLinks(handleLogout, t, isAuth);
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
      <Col
        sm={12}
        className="my-2 py-4 canvas-list"
        key={i + b.label}
        onClick={() => handleClick(b)}
      >
        <span>{b.label}</span>
        <span>{b.icon}</span>
      </Col>
    );
  });
}

export default BurgerMenu;
