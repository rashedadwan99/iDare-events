import React, { memo } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import AllEvents from "../components/AllEvents";
const MyEvents = memo(function () {
  const { t } = useTranslation();
  const myEvents = useSelector((state) => state.events.myEvents);

  return <AllEvents title={t("my-events")} events={myEvents} />;
});

export default MyEvents;
