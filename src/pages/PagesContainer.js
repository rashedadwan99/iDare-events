import React from "react";
import { memo } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import CircleSpinner from "../components/common/CircleSpinner";

const PagesContainer = memo(function () {
  const isLoading = useSelector((state) => state.events.isLoading);
  return (
    <>
      {!isLoading ? (
        <Outlet />
      ) : (
        <div className="event-spinner">
          <CircleSpinner />
        </div>
      )}
    </>
  );
});
export default PagesContainer;
