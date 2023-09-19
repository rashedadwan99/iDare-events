import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import Aos from "aos";
import "../../styles/aos.css";
function AosContainer({
  delay,
  children,
  style,
  animation_name_scroll_down,
  animation_name_scroll_up,
  ...rest
}) {
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    Aos.init({
      duration: 300,
      easing: "ease-in-out",
    });

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      lastScroll = currentScroll;
    };

    let lastScroll = window.scrollY;
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Col
      sm={12}
      xs={12}
      className="px-0"
      data-aos={
        scrollDirection === "down"
          ? animation_name_scroll_down
          : animation_name_scroll_up
      }
      style={style}
      {...rest}
    >
      {children}
    </Col>
  );
}

export default AosContainer;
