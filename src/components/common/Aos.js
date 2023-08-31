import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import Aos from "aos";

function AosContainer({ delay, children, style, ...rest }) {
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    Aos.init({
      duration: 100,
      delay: 100,
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
      data-aos={scrollDirection === "down" ? "fade-up" : "fade-down"}
      style={style}
      {...rest}
    >
      {children}
    </Col>
  );
}

export default AosContainer;
