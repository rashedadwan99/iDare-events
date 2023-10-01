import React from "react";
import { memo } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CircleSpinner from "../components/common/CircleSpinner";
import { notfoundPageRoute } from "../routes";

const PagesContainer = memo(function () {
  const isLoading = useSelector((state) => state.events.isLoading);
  const params = useParams();
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
});
export default PagesContainer;
