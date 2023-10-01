import React from "react";
import AllEvents from "../components/AllEvents";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import "../styles/home-page.css";
import { memo } from "react";
const RecommendedEvents = memo(function () {
  const { t } = useTranslation();
  const recommendedEvents = useSelector(
    (state) => state.events.recommendedEvents
  );

  return (
    <AllEvents title={t("recommended-events")} events={recommendedEvents} />
  );
});

export default RecommendedEvents;
