import React from "react";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import HomeLandingPage from "../components/HomeLandingPage";
import AllEvents from "../components/AllEvents";
import Header from "../components/Header";
const HomePage = memo(function () {
  const { t } = useTranslation();
  const upcomingEvents = useSelector((state) => state.events.upcomingEvents);

  return (
    <>
      <Header />

      <HomeLandingPage />
      <AllEvents title={t("upcoming_events")} events={upcomingEvents} />
    </>
  );
});

export default HomePage;
