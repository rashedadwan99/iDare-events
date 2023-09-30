import React from "react";
import AllEvents from "../components/AllEvents";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import "../styles/home-page.css";
function RecommendedEvents() {
  const { t } = useTranslation();
  const recommendedEvents = useSelector(
    (state) => state.events.recommendedEvents
  );
  const events = recommendedEvents.map((e) => e.event);

  return <AllEvents title={t("recommended-events")} events={events} />;
}

export default RecommendedEvents;
