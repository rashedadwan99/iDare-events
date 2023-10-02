import React, { useCallback, useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import Aos from "aos";
function AosContainer({
  delay,
  children,
  style,
  animation_name_scroll_down,
  animation_name_scroll_up,
  ...rest
}) {
  const [scrollDirection, setScrollDirection] = useState("down");
  const handleScroll = useCallback(() => {
    let lastScroll = window.scrollY;

    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }

    lastScroll = currentScroll;
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 300,
      easing: "ease-in-out",
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return (
    <Col
      sm={12}
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
