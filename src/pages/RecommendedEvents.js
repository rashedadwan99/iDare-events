import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import AllEvents from "../components/AllEvents";
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
