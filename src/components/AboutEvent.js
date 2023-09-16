import React from "react";
import DomParser from "./common/DomParser";
import { useSelector } from "react-redux";

function AboutEvent({ event }) {
  const isArabic = useSelector((state) => state.language.isArabic);

  return (
    <div className="about-event__description">
      <DomParser
        htmlResponse={
          isArabic ? event.long_description_ar : event.long_description
        }
      />
    </div>
  );
}

export default AboutEvent;
