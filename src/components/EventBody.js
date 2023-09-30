import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import EventFooter from "./EventFooter";
import { useSelector } from "react-redux";

function EventBody({ event }) {
  useEffect(() => {
    const container = document.createElement("div");
    const style = document.createElement("style");
    style.innerHTML = `.event-page,.event-header{${event.google_fonts_code}}
    `;
    container.innerHTML = event.google_fonts_link;
    const linkElement = container.querySelector("link");
    if (linkElement) {
      document.head.appendChild(linkElement);
      document.head.appendChild(style);
    }

    return () => {
      container.innerHTML = "";
      document.head.removeChild(linkElement);
      document.head.removeChild(style);
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
