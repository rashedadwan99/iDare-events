import React from "react";
import AliceCarousel from "react-alice-carousel";
function CommonAliceCarousel({ items }) {
  return (
    <AliceCarousel
      mouseTracking
      autoPlay={true}
      animationDuration={1200}
      autoPlayInterval={1200}
      infinite={true}
      items={items}
      disableButtonsControls={true}
      keyboardNavigation
      animationEasingFunction="ease-in-out"
      animationType="fadeout"
      autoPlayStrategy="all"
      autoPlayDirection="ltr"
      responsive={{
        0: {
          items: 1,
        },
        768: {
          items: 3,
        },
      }}
    />
  );
}

export default CommonAliceCarousel;
