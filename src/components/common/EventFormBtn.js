import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useResolvedPath } from "react-router-dom";
import CommonButton from "./Button";
import { getUserToken } from "../../services/userService";
import {
  handlePrimaryButtonStyle,
  handlePrimaryButtonStyleWhenHover,
} from "../../styles/eventStyles";
import EventForm from "../EventForm";
import { Toast } from "./Toast";
import { toggleOpenModal } from "../../redux/actions/modalAction";
import { registerPageRoute } from "../../routes";

function EventFormBtn({ event }) {
  const navigate = useNavigate();
  const { pathname } = useResolvedPath();
  const myEvents = useSelector((state) => state.events.myEvents);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isInMyEvents = myEvents.find((e) => e.id === event.id);
  const handleOpenModal = (event) => {
    if (!getUserToken()) {
      const handleNavigate = () =>
        navigate(registerPageRoute, { state: pathname });
      return Toast("info", t("login_first"), 10000, handleNavigate);
    }
    if (isInMyEvents) return;
    dispatch(toggleOpenModal(<EventForm event={event} />, t("register-event")));
  };

  return (
    !isInMyEvents && (
      <CommonButton
        primaryStyle={handlePrimaryButtonStyle(event)}
        primaryStyleHover={handlePrimaryButtonStyleWhenHover(event)}
        label={t("register-event")}
        onClick={() => handleOpenModal(event)}
      />
    )
  );
}

export default EventFormBtn;
