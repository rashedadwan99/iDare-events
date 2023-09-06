import React from "react";
import { getUserToken } from "../../services/userService";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import CommonButton from "./Button";
import {
  handlePrimaryButtonStyle,
  handlePrimaryButtonStyleWhenHover,
} from "../../styles/eventStyles";
import CommonModal from "./CommonModal";
import EventForm from "../EventForm";
import { Toast } from "./Toast";
import { toggleOpenModal } from "../../redux/actions/modalAction";

function EventFormBtn({ event }) {
  const myEvents = useSelector((state) => state.events.myEvents);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isInMyEvents = myEvents.find((e) => e.event_id === event.id);

  const handleOpenModal = () => {
    if (!getUserToken()) return Toast("info", t("login_first"));
    if (isInMyEvents) return;
    dispatch(toggleOpenModal());
  };

  return (
    <>
      <CommonButton
        primaryStyle={handlePrimaryButtonStyle(event)}
        primaryStyleHover={handlePrimaryButtonStyleWhenHover(event)}
        label={
          getUserToken()
            ? isInMyEvents
              ? t("already_registered")
              : t("register-event")
            : t("register-event")
        }
        onClick={handleOpenModal}
      />
      <CommonModal title={t("register-event")}>
        <EventForm event={event} />
      </CommonModal>
    </>
  );
}

export default EventFormBtn;
