import React from "react";
import AliceCarousel from "react-alice-carousel";
import "../../styles/alice-carousel.css";
function CommonAliceCarousel({ items }) {
  return (
    <AliceCarousel
      mouseTracking
      autoPlay={true}
      animationDuration={1200}
      infinite={true}
      items={items}
      disableButtonsControls={true}
    />
  );
}

export default CommonAliceCarousel;
