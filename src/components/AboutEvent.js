import React from "react";
import { isArabic } from "../locales/language";
import DomParser from "./common/DomParser";

function AboutEvent({ event }) {
  return (
    <div className="about-event__description">
      <DomParser
        htmlResponse={
          isArabic() ? event.long_description_ar : event.long_description
        }
      />
    </div>
  );
}

export default AboutEvent;
