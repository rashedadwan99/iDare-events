import { animateScroll as scroll } from "react-scroll";

export const smoothScrolling = () => {
  return scroll.scrollToTop({
    scrollTo: 0,
    duration: 500,
    smooth: "easeInOutQuad",
  });
};
