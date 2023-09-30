import React from "react";
import AllEvents from "../components/AllEvents";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import "../styles/home-page.css";
function MyEvents() {
  const { t } = useTranslation();
  const myEvents = useSelector((state) => state.events.myEvents);

  return <AllEvents title={t("my-events")} events={myEvents} />;
}

export default MyEvents;
