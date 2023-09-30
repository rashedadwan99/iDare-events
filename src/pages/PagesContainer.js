import React from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CircleSpinner from "../components/common/CircleSpinner";
import { notfoundPageRoute } from "../routes";

function PagesContainer() {
  const { id } = useParams();
  const allEvents = useSelector((state) => state.events.allEvents);

  const event = allEvents.find((e) => e.id === parseInt(id));
  const isLoading = useSelector((state) => state.events.isLoading);
  const params = useParams();
  if (!event && id) {
    return <Navigate to={notfoundPageRoute} />;
  }
  return (
    <>
      {!isLoading ? (
        <>
          <Header />
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
