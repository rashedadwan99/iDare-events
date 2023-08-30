import React from "react";
import AllEvents from "../components/AllEvents";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import "../styles/home-page.css";
function MyEvents() {
  const { t } = useTranslation();
  const myEvents = useSelector((state) => state.events.myEvents);
  const events = myEvents.map((e) => e.event);
  return (
    <>
      <Header />
      <AllEvents title={t("my-events")} events={events} />
      <Footer />
    </>
  );
}

export default MyEvents;
