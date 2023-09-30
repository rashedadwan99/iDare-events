import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import EventFooter from "./EventFooter";
import { useSelector } from "react-redux";

function EventBody({ event }) {
  useEffect(() => {
    const App = document.getElementById("container");
    const container = document.createElement("div");
    container.innerHTML = event.google_fonts_link;
    const linkElement = container.querySelector("link");
    if (linkElement) {
      let fontFamily = event.google_fonts_code.split("'").join("");
      fontFamily = fontFamily.split(";").join("");
      fontFamily = fontFamily.split("font-family:").join("");
      document.head.appendChild(linkElement);
      App.style.fontFamily = fontFamily;
    }

    return () => {
      container.innerHTML = "";
      document.head.removeChild(linkElement);
      App.style.fontFamily = "Cairo, sans-serif";
    };
  }, [event.google_fonts_link, event.google_fonts_code]);
  const isArabic = useSelector((state) => state.language.isArabic);

  return (
    <Row className={`event-page  ${isArabic ? "arabic" : ""}`}>
      <Outlet />
      <EventFooter event={event} />
    </Row>
  );
}

export default EventBody;
