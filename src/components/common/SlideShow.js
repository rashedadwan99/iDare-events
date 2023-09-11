import { Carousel } from "react-responsive-carousel";
import "../../styles/slide-show.css";
function SlideShow({ children }) {
  return (
    <Carousel
      showThumbs={false}
      showArrows={true}
      // autoPlay={true}
      infiniteLoop={true}
      interval={10000}
      stopOnHover={true}
    >
      {children}
    </Carousel>
  );
}

export default SlideShow;
