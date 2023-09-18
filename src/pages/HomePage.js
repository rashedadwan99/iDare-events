import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import HomeLandingPage from "../components/HomeLandingPage";
import AllEvents from "../components/AllEvents";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/home-page.css";
function HomePage() {
  const { t } = useTranslation();
  const allEvents = useSelector((state) => state.events.allEvents);

  return (
    <>
      <Header />

      <HomeLandingPage />
      <AllEvents title={t("upcoming_events")} events={allEvents} />
      <Footer />
    </>
  );
}

export default HomePage;
