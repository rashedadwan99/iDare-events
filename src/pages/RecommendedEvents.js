import React from "react";
import AllEvents from "../components/AllEvents";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import "../styles/home-page.css";
function RecommendedEvents() {
  const { t } = useTranslation();
  const recommendedEvents = useSelector(
    (state) => state.events.recommendedEvents
  );
  const events = recommendedEvents.map((e) => e.event);

  return (
    <>
      <Header />
      <AllEvents title={t("recommended-events")} events={events} />
      <Footer />
    </>
  );
}

export default RecommendedEvents;
