import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CircleSpinner from "../components/common/CircleSpinner";

function PagesContainer() {
  const allEvents = useSelector((state) => state.events.allEvents);
  const params = useParams();

  const event = allEvents.find((e) => e.id === parseInt(params.id));
  const isLoading = useSelector((state) => state.events.isLoading);

  return (
    <>
      {!isLoading ? (
        <>
          <Header event={event} />
          <Outlet />
          {!params.id ? <Footer /> : <></>}
        </>
      ) : (
        <div className="event-spinner">
          <CircleSpinner />
        </div>
      )}
    </>
  );
}

export default PagesContainer;
