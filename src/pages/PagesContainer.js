import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { headerEventStyle } from "../styles/eventStyles";

function PagesContainer() {
  const allEvents = useSelector((state) => state.events.allEvents);
  const params = useParams();

  const event = allEvents.find((e) => e.id === parseInt(params.id));
  return (
    <>
      <Header event={event} style={event ? headerEventStyle(event) : {}} />
      <Outlet />
      {!event ? <Footer /> : <></>}
    </>
  );
}

export default PagesContainer;
