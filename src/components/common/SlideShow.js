import { memo } from "react";
import { Carousel } from "react-responsive-carousel";
import "../../styles/slide-show.css";
const SlideShow = memo(function ({ children }) {
  return (
    <Carousel
      showThumbs={false}
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      stopOnHover={true}
      interval={3000}
      setTimeout={setTimeout(() => {}, [])}
    >
      {children}
    </Carousel>
  );
});

export default SlideShow;
