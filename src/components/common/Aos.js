import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import Aos from "aos";

function AosContainer({ delay, children, style, ...rest }) {
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    Aos.init();

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
      xs={11}
      data-aos={scrollDirection === "down" ? "fade-up" : "fade-down"}
      data-aos-delay={delay ?? "100"}
      style={style}
      {...rest}
    >
      {children}
    </Col>
  );
}

export default AosContainer;
