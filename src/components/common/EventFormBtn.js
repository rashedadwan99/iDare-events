import React from "react";
import { getUserToken } from "../../services/userService";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import CommonButton from "./Button";
import {
  handlePrimaryButtonStyle,
  handlePrimaryButtonStyleWhenHover,
} from "../../styles/eventStyles";
import EventForm from "../EventForm";
import { Toast } from "./Toast";
import { toggleOpenModal } from "../../redux/actions/modalAction";

function EventFormBtn({ event }) {
  const myEvents = useSelector((state) => state.events.myEvents);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isInMyEvents = myEvents.find((e) => e.id === event.id);
  console.log(isInMyEvents);
  const handleOpenModal = (event) => {
    if (!getUserToken()) return Toast("info", t("login_first"));
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
